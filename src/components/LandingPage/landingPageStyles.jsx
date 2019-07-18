import {
  container,
  title,
  cardTitle,
} from "../../assets/global"
import imageStyle from "../../assets/imagesStyles"
const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#00000",
    textDecoration: "none",
  },
  ...imageStyle,
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    height:"100px"
  },
  mainRaised: {
    margin: "0",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      "@media (min-width: 576px)": {
        margin:"0px 20px 0px"
      },
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",

  },
  description: {
    color: "#999"
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  Link: {
    textDecoration: "none",
    color: "black",
  },
  frontImage:{
    width:"50%",
  },
}

export default landingPageStyle
