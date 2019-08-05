import {
  container,
  title,
  cardTitle,
  karaenaGold,
  karaenaFilter,
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
    color: "#000",
    fontWeight:"600",
    textDecoration: "none",
    fontFamily: "'Montserrat', sans-serif",
    width:"100%",
    fontSize:"1.2rem",
    textAlign:"center",
    "@media (min-width: 576px)": {
     fontSize:"1.2rem"
    },
    "@media (min-width: 768px)": {
      fontSize:"1.5rem"
    },
    "@media (min-width: 992px)": {
      fontSize:"2.5rem"
    },

  },
  ...imageStyle,
  subtitle: {
    fontSize: "1rem",
    maxWidth: "100%",
    margin: "10px auto 0",
    color:"#fff",
    textAlign:"center",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight:"500",
    "@media (min-width: 576px)": {
      fontSize:"1rem"
     },
     "@media (min-width: 768px)": {
       fontSize:"1.2rem"
     },
     "@media (min-width: 992px)": {
       fontSize:"1.5rem"
     },
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
    width:"30%",
    height:"100vh",
    objectFit:"scale-down",
  },
  frontMatter:{
    width:"50%",
  },
  wrapper:{
    display: "flex",
    flexFlow:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  mainLinks:{
    color:karaenaGold,
  },
  filter:{
    backgroundColor:karaenaFilter,
    width:"100%"
  },
  button:{
    fontSize:"1.2rem",
    color:"#000"
  },
  secButton:{
    display:"none",
    "@media (min-width:1024px)":{
    display:"flex",
    flexFlow:"row nowrap",
    }

  }
}

export default landingPageStyle
