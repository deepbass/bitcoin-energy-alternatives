import { Logo } from "../models/Logo"
import DirectionsCarSharpIcon from '@material-ui/icons/DirectionsCarSharp';
import FlightTakeoffSharpIcon from '@material-ui/icons/FlightTakeoffSharp';
import WatchSharpIcon from '@material-ui/icons/WatchSharp';
import EmojiFoodBeverageSharpIcon from '@material-ui/icons/EmojiFoodBeverageSharp';
import HeadsetSharpIcon from '@material-ui/icons/HeadsetSharp';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';

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
        case Logo.Tea: {
            return (
                <EmojiFoodBeverageSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
        case Logo.Headphones: {
            return (
                <HeadsetSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
        case Logo.Hospital: {
            return (
                <LocalHospitalSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
        case Logo.Food: {
            return (
                <FastfoodSharpIcon style={{fontSize: FONT_SIZE}} />
            )
        }
    }
}

export { CustomLogo }