import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";
import * as cheerio from 'cheerio';
import { BitcoinResourceUsage } from "../src/models/BitcoinResourceUsage";
import * as storage from "azure-storage";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, resourceUsage: BitcoinResourceUsage): Promise<void> {
    let responseMessage = JSON.stringify(resourceUsage)
    let now = new Date();

    let differenceInMilliseconds = now.getTime() - new Date(resourceUsage.dateTime).getTime();

    // To calculate the no. of days between two dates 
    var differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);
    if (differenceInDays > 1) {
        context.log("Refreshing")
        const storageClient = storage.createTableService(process.env["MyStorageConnectionAppSetting"]);
        const tableName = "ResourceUsage"
        let responseMessage = ""
        const response = await axios.get('https://digiconomist.net/bitcoin-energy-consumption');
        const $ = await cheerio.load(response.data);
        let carbonText = $('b:contains("kgCO2")').text().replace(" kgCO2", "")
        let electricityText = $('b:contains("kWh")').text().replace(" kWh", "")
        let ewasteText = $('b:contains("grams")').text().replace(" grams", "")

        let bitcoinResourceUsageData = new BitcoinResourceUsage()
        bitcoinResourceUsageData.carbonDioxideInKg = Number.parseFloat(carbonText)
        bitcoinResourceUsageData.electricityUsageInkWh = Number.parseFloat(electricityText)
        bitcoinResourceUsageData.eWasteInGrams = Number.parseFloat(ewasteText)
        bitcoinResourceUsageData.dateTime = new Date()
        bitcoinResourceUsageData.ETag = "*"
        bitcoinResourceUsageData.RowKey = "1"
        bitcoinResourceUsageData.PartitionKey = "1"
        responseMessage = JSON.stringify(bitcoinResourceUsageData)
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
        storageClient.insertOrMergeEntity(tableName, bitcoinResourceUsageData, function (error, result, response) {
            context.done()
        })
    } else {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
    context.done();

    }

};

export default httpTrigger;