import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { bitcoinResourceUsageData } from "../src/data/BitcoinResourceUsageData";
import { comparisonsData } from "../src/data/ComparisonData";
import { ResourceType } from "../src/models/ResourceType";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const comparisons = comparisonsData.filter(x => {
        if(x.resourceType === ResourceType.CarbonDioxide && x.resourceUsage <= bitcoinResourceUsageData.carbonDioxideInKg){
            return true
        } else if(x.resourceType === ResourceType.EWaste && x.resourceUsage <= bitcoinResourceUsageData.eWasteInGrams){
            return true
        } else if(x.resourceType === ResourceType.Electricity && x.resourceUsage <= bitcoinResourceUsageData.electricityUsageInkWh){
            return true
        }
        return false
    })
    let responseMessage = JSON.stringify(comparisons)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;