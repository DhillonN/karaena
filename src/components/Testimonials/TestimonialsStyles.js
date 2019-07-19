import {
    container,
    title,
    cardTitle,
    karaenaGold
  } from "../../assets/global"
  import imageStyle from "../../assets/imagesStyles"
  const TestimonialsStyle = {
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container,
    },
    title: {
      ...title,
      display: "block",
      width:"100%",
      textAlign:"center",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      color: karaenaGold,
      textDecoration: "none",
    },
    ...imageStyle,
    imgFit:{
objectFit:"contain !important",
maxWidth:"100px !important",
width:"100%",
    },
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
      height:"100%",
      width:"100%",
      maxHeight:"100px"
    },
    mainRaised: {
      margin: "0px 0px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    cardTitle,
    smallTitle: {
      color: "#6c757d",

    },
    card:{
      width:"50%",
      margin:"0 auto",
      display:"flex",
      flexFlow:"column",
      alignItems:"center",

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
    container:{
      width:"100%",
    }
  }

  export default TestimonialsStyle