import { Logo } from "../models/Logo"
import DirectionsCarSharpIcon from '@material-ui/icons/DirectionsCarSharp';
import FlightTakeoffSharpIcon from '@material-ui/icons/FlightTakeoffSharp';
import WatchSharpIcon from '@material-ui/icons/WatchSharp';

type CustomLogoProps = {
    logo: Logo
}

const FONT_SIZE = 150;

function CustomLogo({logo}: CustomLogoProps) {
    switch(logo){
        case Logo.Car: {
            return (
                <DirectionsCarSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
        case Logo.Airplane: {
            return (
                <FlightTakeoffSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
        case Logo.Watch: {
            return (
                <WatchSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
    }
}

export { CustomLogo }