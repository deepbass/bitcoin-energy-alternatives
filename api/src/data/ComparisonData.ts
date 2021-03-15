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
        name: "Drive a Tesla Model 3 from New York to San Francisco",
        resourceType: ResourceType.Electricity,
        resourceUsage: 708,
        logo: Logo.Car
    }
]

function generateChickenData(carbon: number): Comparison {
    let carbonForOneServing = 0.657
    const { roundedServings, roundedUsage } = calculateRoundedServingsAndUsage(carbonForOneServing, carbon)
    let comparison = new Comparison()
    comparison.logo = Logo.Food
    comparison.name = `Eating ${roundedServings} portions of chicken breast`
    comparison.resourceType = ResourceType.CarbonDioxide
    comparison.resourceUsage = roundedUsage
    return comparison
}

function generateKettleData(electricity: number): Comparison {
    let electricityForOneServing = 0.225
    const { roundedServings, roundedUsage } = calculateRoundedServingsAndUsage(electricityForOneServing, electricity)
    let comparison = new Comparison()
    comparison.logo = Logo.Tea
    comparison.name = `Boil ${roundedServings} kettles`
    comparison.resourceType = ResourceType.Electricity
    comparison.resourceUsage = roundedUsage
    return comparison
}

function generateLifeSupportData(electricity: number): Comparison {
    let electricityForOneServing = 156.5
    const { roundedServings, roundedUsage } = calculateRoundedServingsAndUsage(electricityForOneServing, electricity)
    let comparison = new Comparison()
    comparison.logo = Logo.Hospital
    comparison.name = `Run a life support machine for ${roundedServings} months`
    comparison.resourceType = ResourceType.Electricity
    comparison.resourceUsage = roundedUsage
    return comparison
}

function generateRocketData(electricity: number): Comparison {
    let electricityForOneServing = 9.1
    const { roundedServings, roundedUsage } = calculateRoundedServingsAndUsage(electricityForOneServing, electricity)
    let comparison = new Comparison()
    comparison.logo = Logo.Moon
    comparison.name = `Launch ${roundedServings} kilos into orbit`
    comparison.resourceType = ResourceType.Electricity
    comparison.resourceUsage = roundedUsage
    return comparison
}

type RoundedServingsAndUsage = {
    roundedServings: number
    roundedUsage: number
}

function calculateRoundedServingsAndUsage(ratio: number, usage: number): RoundedServingsAndUsage {
    let servings = usage / ratio
    let roundedServings = Math.floor(servings)
    let roundedUsage = Math.floor(roundedServings * ratio);
    return {
        roundedServings: roundedServings,
        roundedUsage: roundedUsage
    }
}

function generateAppleWatchData(ewaste: number): Comparison {
    let electricityForOneServing = 30.5;
    const { roundedServings, roundedUsage } = calculateRoundedServingsAndUsage(electricityForOneServing, ewaste)
    let comparison = new Comparison()
    comparison.logo = Logo.Watch
    comparison.name = `Throw away ${roundedServings} Apple Watches`
    comparison.resourceType = ResourceType.EWaste
    comparison.resourceUsage = roundedUsage
    return comparison
}

function generateAppleAirPodsData(ewaste: number): Comparison {
    let electricityForOneServing = 8;
    const { roundedServings, roundedUsage } = calculateRoundedServingsAndUsage(electricityForOneServing, ewaste)
    let comparison = new Comparison()
    comparison.logo = Logo.Headphones
    comparison.name = `Throw away ${roundedServings} pairs of Apple AirPods`
    comparison.resourceType = ResourceType.EWaste
    comparison.resourceUsage = roundedUsage
    return comparison
}

export { comparisonsData, generateChickenData, generateKettleData,generateAppleWatchData,generateAppleAirPodsData,generateLifeSupportData, generateRocketData }