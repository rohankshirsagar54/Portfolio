import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Skills from './skills';
import Tools from './tools';

class Resume extends Component {
render(){
    return(
        <Grid>
            <Cell className="skills-left-col" col={6}>
            <h2>Programming</h2>

            <Skills 
            skill="Java"
            progress={100}
            />

            <Skills 
            skill="HTML/CSS"
            progress={90}
            />

            <Skills 
            skill="Spring"
            progress={85}
            />

            <Skills 
            skill="React"
            progress={70}
            />

            <Skills 
            skill="Rest API"
            progress={70}
            />

            <Skills 
            skill="C#"
            progress={75}
            />

             <Skills 
            skill="Javascript"
            progress={70}
            />



            </Cell>
            <Cell className="skills-right-col" col={6}>
            <h2>Tools</h2>

            <Tools 
            tool="JIRA"
            progress={100}
            />

            <Tools 
            tool="GIT"
            progress={80}
            />

            <Tools 
            tool="Jenkins"
            progress={80}
            />

            <Tools 
            tool="Maven"
            progress={100}
            />

            <Tools 
            tool="Postman"
            progress={90}
            />

            <Tools 
            tool="Eclipse"
            progress={100}
            />

            </Cell>
        </Grid>
    )
}


}

export default Resume;