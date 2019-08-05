import {

    title,
    karaenaGold,

  } from "../../assets/global"
const aboutStyles={
aboutPhoto:{
float:"left",
maxWidth:"20vw",
},
aboutDescription:{
  padding: "10px",
  textAlign: "justify",
  wordBreak: "break-word",
  wordSpacing: "0px",
  fontSize: "1rem",
  fontKerning: "normal",
  fontWeight: "300",
  "@media (min-width: 900px)":{
    padding: "0% 30% 5% 30%",
    textAlign: "justify",
    wordBreak: "break-word",
    wordSpacing: "3px",
    fontSize: "1.25rem",
    fontKerning: "normal",
    fontWeight: "300",
},
},
title:{
    ...title,
    display:"block",
    width:"100%",
    textAlign:"center",
    padding:"3rem",
    fontSize:"2.5rem",
  },
}
export default aboutStyles