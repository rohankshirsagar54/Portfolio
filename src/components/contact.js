import React, {Component} from 'react';
import {Grid, Cell, ListItem, ListItemContent, List} from 'react-mdl';

class Contact extends Component {
render(){
    return(
        <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>

             <h2>ROHAN KSHIRSAGAR</h2>
             <img src="/images/r4.JPG" alt="profiles" style={{height: '250px'}}></img>
             <br/>
             <br/>


              <p sytle={{width: '75%', margin: 'auto', paddingTop: '1em'}}> Software Developer having experience more than 1 year in Java and Spring Framework. 
              Have a desire to possess a high career growth through a continuous process of learning 
              for achieving goal and keeping myself dynamic in the changing scenario to become a 
              successful professional and leading to best opportunity.</p>
            </Cell>
            <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
<div className="contact-list">

<List>
  <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Lora'}}>
        
        <i className="fa fa-phone-square" aria-hidden="true"/>
        (807) 356-5205</ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent className="text-content" style={{fontSize: '25px', fontFamily: 'Lora', overflowX: 'visible'}}>
        
        <i className="fa fa-envelope" aria-hidden="true"/>
        rohankshirsagar54@gmail.com</ListItemContent>
  </ListItem>

  
 
</List>

</div>
                


            </Cell>
        </Grid>

        </div>
    )
}


}

export default Contact;