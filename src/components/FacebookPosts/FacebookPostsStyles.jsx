import {
  title,
  cardTitle,
  main,
  mainRaised
} from "../../assets/global"
import imageStyle from "../../assets/imagesStyles"
const GalleryStyle = {
  galleryGrid: {
    zIndex: "12",
    color: "#FFFFFF",

  },
  mainRaised:{
...mainRaised,
  },
  main:{
  ...main,
  },
  title: {
    ...title,
    display: "block",
    position: "relative",
    marginTop: "1rem",
    minHeight: "32px",
    height:"fit-content",
    color: "#00000",
    textDecoration: "none",
    maxWidth:"100%",
    overflow:"hidden",
    textAlign:"center",
  },
  galleryImage: {
    width: "100%",

  },
  ...imageStyle,
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  blogContainer: {
    display: "flex",
    marginLeft: "-30px",
    width: "auto",
  },
  gridColumn: {
    paddingLeft: "5px" /* gutter size */,
    backgroundClip: "padding-box",
  },
  postLink:{
    textDecoration:"none",
    color:"#343434",
    fontSize:"1.2rem",
  },
  containerCard:{
    padding:"0px",
  },
  description:{
    padding:"5px",
    textAlign: "justify",
    fontSize: "1.25rem",
    wordSpacing: "-1px",
    letterSpacing: "0.02px",
  },
  galleryGrid__item: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding:"10px",
    "@media (min-width: 576px)": {
        width: "50%",
      },
      "@media (min-width: 768px)": {
        width: "calc(100% / 3)",
      },
      "@media (min-width: 992px)": {
        width: "calc(100% / 4)",
      },
      "@media (min-width: 1200px)": {
        width: "calc(100% / 4)",
      }
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  Link: {
    textDecoration: "none",
    color: "black",
  },
  lightBoxModal:{
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  },

}

export default GalleryStyle
