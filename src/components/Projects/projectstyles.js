import {
  title,
  karaenaGold,
  lightKaraenaGold,
} from "../../assets/global"
import imageStyle from "../../assets/imagesStyles"
const projectStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    margin:0,
    "@media (min-width:576px)":{
      marginLeft:"-8px",
      marginRight:"-8px",
    },
  },
  projectTitle: {
    ...title,
    display: "block",
    width: "100%",
    textAlign: "center",
    padding: "3rem",
    fontSize: "2.5rem",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "0px",
    minHeight: "32px",
    textDecoration: "none",
  },
  transformImage:{
  overflow:"hidden",
  },
  ...imageStyle,
  imgRaised: {
    height: "100%",
    transition: "all ease-in-out 1.2s",
    "@media (min-width:576px)": {
      "&:hover": {
        transform: "scale(1.1)",
        transition: "ease-in-out 1s",
      },
    },
  },
  subtitle: {
    color: lightKaraenaGold,
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "0px auto 0",
    lineHeight: "0.8px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px 0px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100%",
    padding:0,

    "@media (min-width:576px)": {
overflow:"hidden",
      paddingLeft:"15px",
      paddingRight:"15px",
    },
  },
  description: {
    color: "#999",
    textAlign: "center",
    paddingTop: "12px",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  Link: {
    textDecoration: "none",
    color: "black",
  },
}

export default projectStyle
