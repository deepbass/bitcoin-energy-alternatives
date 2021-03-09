import { Comparison } from "../models/Comparison"
import { ResourceType } from "../models/ResourceType"

const comparisonsData: Comparison[] = [
    {
        name: "Flight from London to Tunisia",
        resourceType: ResourceType.CarbonDioxide,
        resourceUsage: 290
    },
    {
        name: "Drive from London, England to Homs, Syria",
        resourceType: ResourceType.Electricity,
        resourceUsage: 665
    },
    {
        name: "Throw away 3 Apple Watches",
        resourceType: ResourceType.EWaste,
        resourceUsage: 91.5
    }
]

export { comparisonsData }