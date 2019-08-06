import {
  title,
  main,
  mainRaised,
} from "../../assets/global"
const GalleryStyle = {
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
    textDecoration: "none",
    maxWidth:"100%",
    overflow:"hidden",
    textAlign:"center",
  },

}

export default GalleryStyle
