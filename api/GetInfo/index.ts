import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { bitcoinResourceUsageData } from "../src/data/BitcoinResourceUsageData";
import { comparisonsData, generateAppleAirPodsData, generateAppleWatchData, generateChickenData, generateKettleData, generateLifeSupportData } from "../src/data/ComparisonData";
import { BitcoinResourceUsage } from "../src/models/BitcoinResourceUsage";
import { ResourceType } from "../src/models/ResourceType";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, resourceUsage: BitcoinResourceUsage): Promise<void> {
    let localComparisonsData = comparisonsData;
    localComparisonsData.push(generateChickenData(resourceUsage.carbonDioxideInKg))
    localComparisonsData.push(generateKettleData(resourceUsage.electricityUsageInkWh))
    localComparisonsData.push(generateAppleWatchData(resourceUsage.eWasteInGrams))
    localComparisonsData.push(generateAppleAirPodsData(resourceUsage.eWasteInGrams))
    localComparisonsData.push(generateLifeSupportData(resourceUsage.electricityUsageInkWh))

    const comparisons = localComparisonsData.filter(x => {
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