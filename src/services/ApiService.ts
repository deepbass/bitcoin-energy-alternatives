import { BitcoinResourceUsage } from "../models/BitcoinResourceUsage";
import { Comparison } from "../models/Comparison"

function getDomain(){
    const url = window.location.href
    return url.includes("localhost") ? "http://localhost:7071" : ""
}

async function getComparisons(): Promise<Comparison[]> {
    const url = `${getDomain()}/api/getinfo`;
    const response = await fetch(url)
    return await response.json()
}

async function getBitcoinResourceUsage(): Promise<BitcoinResourceUsage> {
    const url = `${getDomain()}/api/GetCurrentBitcoinResourceUsage`;
    const response = await fetch(url)
    const responseObject: BitcoinResourceUsage = await response.json()
    return responseObject
}

export { getDomain, getComparisons, getBitcoinResourceUsage }