import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import withStyles from '@material-ui/styles/withStyles'
import styles from './ctafabStyles'
const ctafab=({classes})=>(
    <div className={classes.fabContainer}>
    <FaPhone></FaPhone>
    <FaEnvelope/>
    </div>
)
export default withStyles(styles)(ctafab)