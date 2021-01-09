import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';

class LandingPage extends Component {
render(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
                <img src="/images/profile.JPG"  alt="profiles" className="pro-img"/>
                 <div className="banner-text">
                    <h1>Full Stack Developer</h1>
                    <hr/> 
                      
                    <p>Java | Spring Framework | React.js | HTML/CSS | Rest API</p>

                    <div className="social-link">

                         {/*LinkedIn */}
                        <a href="https://www.linkedin.com/in/kshirsagar-rohan/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                        </a>

                          {/*Github */}
                          <a href="https://github.com/rohankshirsagar54" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"></i>
                        </a>
                        
                         

                    </div>

                 </div>
            </Cell>
            </Grid>


        </div>
    )
}


}

export default LandingPage;