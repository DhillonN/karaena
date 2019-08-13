import React from "react"
import './bootstrap'
import CssBaseLine from "@material-ui/core/CssBaseline"
import PropTypes from "prop-types"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { karaenaGold } from "../assets/global"
import Seo from "../components/seo"
import Footer from "../components/Footer/Footer"
import { TinyButton as Scrolltop } from "react-scroll-up-button"
import ContactFAB from "../components/Contact/Contact"
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
const layout = ({ children }) => {
  return (
    <>
      <Seo/>
      <MuiThemeProvider theme={theme}>
        <CssBaseLine />
        <Header
          fixed={true}
          brand="KARAENA VINCENT PHOTOGRAPHER"
          rightLinks={<HeaderLinks />}
        />
        <main>{children}</main>
        <div className="fabContainer">
          <ContactFAB />
        </div>
        <Scrolltop
            StopPosition={0}
            ShowAtPosition={150}
            EasingType="easeOutCubic"
            AnimationDuration={500}
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
            style={{ fill: karaenaGold, backgroundColor: "transparent", bottom:"50px" }}
            ToggledStyle={{}}
          >
          </Scrolltop>
        <Footer />
      </MuiThemeProvider>
    </>
  )
}
layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default layout
