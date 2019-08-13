import {
    title,
  } from "../../assets/global"
const aboutStyles={
aboutPhoto:{
float:"left",
maxWidth:"20vw",
},
aboutDescription:{
  padding: "20px",
  wordBreak: "break-word",
  wordSpacing: "0px",
  fontSize: "0.77rem",
  fontKerning: "normal",
  fontWeight: "300",
  "@media (min-width: 900px)":{
    padding: "0% 25% 5% 25%",
    wordBreak: "break-word",
    wordSpacing: "3px",
    fontSize: "1.75rem",
    fontKerning: "normal",
    fontWeight: "300",
},
},
title:{
    ...title,
    display:"block",
    width:"100%",
    textAlign:"center",
  },
}
export default aboutStyles