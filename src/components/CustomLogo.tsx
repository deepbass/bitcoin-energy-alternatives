import { Logo } from "../models/Logo"
import DirectionsCarSharpIcon from '@material-ui/icons/DirectionsCarSharp';
import FlightTakeoffSharpIcon from '@material-ui/icons/FlightTakeoffSharp';
import WatchSharpIcon from '@material-ui/icons/WatchSharp';

type CustomLogoProps = {
    logo: Logo
}

function CustomLogo({logo}: CustomLogoProps) {
    switch(logo){
        case Logo.Car: {
            return (
                <DirectionsCarSharpIcon />
            )
        }
        case Logo.Airplane: {
            return (
                <FlightTakeoffSharpIcon />
            )
        }
        case Logo.Watch: {
            return (
                <WatchSharpIcon />
            )
        }
    }
}

export { CustomLogo }