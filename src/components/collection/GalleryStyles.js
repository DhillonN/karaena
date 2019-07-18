const GalleryStyles={
    masonry:{
height:'100%',
    },
    columns:{
        padding: "5px",
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
    },
    popup:{
        zIndex: '1200',
    }

}
export default GalleryStyles;