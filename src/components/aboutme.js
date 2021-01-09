import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class About extends Component {
render(){
    return(
        <div>
             <Grid>
                  <Cell col={4}>
                      <div style={{textAlign: 'center'}}>
                          <img src="/images/profile.JPG"  alt="profiles" style={{height:'200px'}}></img>
                      </div>

                      <h2 style={{paddingTop: '2em'}}>Rohan Kshirsgar</h2>
                      <h4 style={{color: 'grey'}}>Programmer</h4>
                      <hr style={{borderTop: '3px solid dotted #833fb2', width: '50%'}}></hr>
                          <p>Software Developer having experience more than 1 year in Java and Spring Framework. 
                              Have a work experience with large and small teams in a fast-paced innovative and 
                              agile environment. Team player and an efficient leader committed to 
                              providing quality work with keen attention towards detail in pressure situations.</p>
                             
                              <hr style={{borderTop: '3px solid dotted #833fb2', width: '50%'}}></hr>
                              <h5>Address</h5>
                              <p>7264 Vernor Drive, Mississauga, Ontario, L4T2P4</p> 

                              <h5>Phone</h5>
                              <p>808-3565205</p> 

                              <h5>Email</h5>
                              <p>rohanKshirsagar54@gmail.com</p> 

                              <h5>WebSite</h5>
                              <p>XYZ</p> 
                  </Cell>


                  <Cell className="resume-right-col" col={8}>
                  <h2>Education</h2>

                  <Education 
                  startYear={2017}
                  endYear={2019}
                  schoolName="Lakehead University"
                  schoolDegree="Master’s in Computer Science"
                  schoolGrade="3.3 GPA"
                  />

                <Education 
                  startYear={2013}
                  endYear={2016}
                  schoolName="Mumbai University"
                  schoolDegree="Bachelor's in Computer Engineering"
                  schoolGrade="3.5 GPA"
                  />

            <Education 
                  startYear={2010}
                  endYear={2013}
                  schoolName="Maharashtra State Board of Technical Education"
                  schoolDegree="Diploma in Computer Engineering"
                  schoolGrade="Fist Class Distinction"
                  />
                
                <hr style={{borderTop: '3px solid #e22947'}}/>

                <h2>Experience</h2>

                  <Experience 
                  startYear={2020}
                  endYear={2021}
                  jobName="Minsitry of Education, Ontario"
                  jobPosition="Application Programmer Analyst"
                   />

                   <Experience 
                  startYear={2016}
                  endYear={2017}
                  jobName="The Coders"
                  jobPosition="Software Developer Intern"
                   />
                  


                  </Cell>
             </Grid>

        </div>
    )
}



}

export default About;