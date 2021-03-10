import { Comparison } from "../models/Comparison"
import { Logo } from "../models/Logo"
import { ResourceType } from "../models/ResourceType"

const comparisonsData: Comparison[] = [
    {
        name: "Flight from London to Tunisia",
        resourceType: ResourceType.CarbonDioxide,
        resourceUsage: 290,
        logo: Logo.Airplane
    },
    {
        name: "Drive from London, England to Homs, Syria",
        resourceType: ResourceType.Electricity,
        resourceUsage: 665,
        logo: Logo.Car
    },
    {
        name: "Throw away 3 Apple Watches",
        resourceType: ResourceType.EWaste,
        resourceUsage: 91.5,
        logo: Logo.Watch
    }
]

export { comparisonsData }