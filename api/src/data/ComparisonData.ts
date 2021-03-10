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
        name: "Eat 50kg of chicken",
        resourceType: ResourceType.CarbonDioxide,
        resourceUsage: 328.5,
        logo: Logo.Food
    },
    {
        name: "Flight from New York to Minneapolis",
        resourceType: ResourceType.CarbonDioxide,
        resourceUsage: 260,
        logo: Logo.Airplane
    },
    {
        name: "Flight from Singapore to Bangkok",
        resourceType: ResourceType.CarbonDioxide,
        resourceUsage: 230,
        logo: Logo.Airplane
    },
    {
        name: "Drive a Tesla Model 3 from London, England to Homs, Syria",
        resourceType: ResourceType.Electricity,
        resourceUsage: 665,
        logo: Logo.Car
    },
    {
        name: "Run a life support machine for 4 months",
        resourceType: ResourceType.Electricity,
        resourceUsage: 626,
        logo: Logo.Hospital
    },
    {
        name: "Boil 3144 kettles",
        resourceType: ResourceType.Electricity,
        resourceUsage: 707.4,
        logo: Logo.Tea
    },
    {
        name: "Throw away 3 Apple Watches",
        resourceType: ResourceType.EWaste,
        resourceUsage: 91.5,
        logo: Logo.Watch
    },
    {
        name: "Throw away 11 pairs of Apple AirPods",
        resourceType: ResourceType.EWaste,
        resourceUsage: 88,
        logo: Logo.Headphones
    }
]

export { comparisonsData }