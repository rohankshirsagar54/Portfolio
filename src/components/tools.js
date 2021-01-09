import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Tools extends Component{
render(){
    return (
        <Grid>
            <Cell col={12}>
                
            <div style={{display: 'flex'}}>{this.props.tool} <ProgressBar style={{margin: 'auto', width: '75%'}} 
                progress={this.props.progress} /> </div>
            </Cell>
            
        </Grid>
    )
}

}

export default Tools;