import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors'

const primary = red.A700
const secondary = '#C41237'
// eslint-disable-next-line @typescript-eslint/no-use-before-define
const error = red[500]

const primaryText = grey[900]
// A custom theme for this app
let theme = createMuiTheme({
  typography: {
    h1:{
      color: primaryText
    },
    h2:{
      color: primaryText
    },
    h3:{
      color: primaryText
    },
    h4:{
      color: primaryText
    },
    h5:{
      color: primaryText
    },
    h6:{
      color: primaryText
    },
    subtitle1:{
      color: primaryText
    },
    subtitle2:{
      color: primaryText
    },
  },
  overrides: {
  },
  palette: {
    type: 'light',
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    error: {
      main: error
    },
    background: {
    },
    text: {
      primary: primaryText
    },
    
  }
})

theme = responsiveFontSizes(theme);


export { theme }