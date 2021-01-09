import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
render(){
    return(
    <Grid>
        <Cell col={4}>

    <p>{this.props.startYear}-{this.props.endYear}</p>

        </Cell>
        <Cell col={4}>
    <h5 style={{marginTop: '0px'}}>{this.props.schoolName}</h5>
    <h5>{this.props.schoolDegree}</h5>
    <h5>{this.props.schoolGrade}</h5>
        </Cell>
    </Grid>
    )
}

}

export default Education;