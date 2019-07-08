import React from "react"
import './bootstrap'
import CssBaseLine from '@material-ui/core/CssBaseline'
import PropTypes from 'prop-types'
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { karaenaGold } from "../assets/global"
import '../assets/global.css'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: karaenaGold,
    },
  },
  typography: {
    useNextVariants: true,
  },
})
const layout = ({ children }) => (
  <>
  <MuiThemeProvider theme={theme}>
  <CssBaseLine/>
    <Header fixed={true} brand="KARAENA VINCENT" rightLinks={<HeaderLinks />} />
    <main>{children}</main>
    </MuiThemeProvider>
  </>
)
layout.propTypes={
    children: PropTypes.node.isRequired,
}
export default layout
