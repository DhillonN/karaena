import {
  main,
  mainRaised
} from "../../assets/global"
const BlogListStyle = {
  main:{
  ...main
  },
  mainRaised:{
  ...mainRaised,
  },
  blogContainer: {
    display: "flex",
    marginLeft: "-30px",
    width: "auto",
  },
  gridColumn: {
    paddingLeft: "30px" /* gutter size */,
    backgroundClip: "padding-box",
  },
  postLink:{
    textDecoration:"none",
    color:"#343434",
    fontSize:"1.2rem",
  },
  containerCard:{
    padding:"15px",
    margin:"0px",
  },
  description:{
    padding:"5px",
    textAlign: "justify",
    fontSize: "1.25rem",
    wordSpacing: "-1px",
    letterSpacing: "0.02px",
  },
  column:{
    width:"100%",
    "@media (min-width: 576px)": {
      width: "100%"
    },
    "@media (min-width: 768px)": {
      width: "50%"
    },
    "@media (min-width: 992px)": {
      width: "33%"
    },
    "@media (min-width: 1200px)": {
      width: "25%"
    }
  }

}
export default BlogListStyle
