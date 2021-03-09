import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { bitcoinResourceUsageData } from "../src/data/BitcoinResourceUsageData";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    let responseMessage = JSON.stringify(bitcoinResourceUsageData)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;