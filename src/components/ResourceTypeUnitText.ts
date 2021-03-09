import { ResourceType } from "../models/ResourceType";

function ResourceTypeUnitText(resourceType: ResourceType){
    switch(resourceType){
        case ResourceType.CarbonDioxide: {
            return (
                "kgCO2"
            )
        }
        case ResourceType.EWaste: {
            return "g of e-waste"
        }
        case ResourceType.Electricity: {
            return "kWh"
        }
    }
}
export { ResourceTypeUnitText }