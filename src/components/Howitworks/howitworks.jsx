import React,{Component} from 'react'
import withStyles from '@material-ui/styles/withStyles'
import Img from 'gatsby-image'
import howitworksStyles from './howitworksStyles'
import Button from "../CustomButtons/Button"

class howitworks extends Component{
    render(){
const {hiwData,classes}=this.props;

    return(
<section>
    <div className={classes.titleText}>
        <h2>{hiwData.title}</h2>
        <p>How it works ?...</p>
        </div>
        <div className={classes.stepsContainer}>
        {
        hiwData.field_step.map((i,k) =>(
            <div className={classes.stepCard}>
            <Img fluid={hiwData.relationships.field_step_photo[k].localFile.childImageSharp.fluid}/>
            <h3>{i}</h3>
            <p>{hiwData.field_step_details[k]}</p>
            {
                !(hiwData.field_button[k]==`" "`)?
<Button href="#" color="primary">{hiwData.field_button[k]}</Button>:""

        }
            </div>
        ))
        }</div>
</section>

    )
    }
}
export default withStyles(howitworksStyles)(howitworks)