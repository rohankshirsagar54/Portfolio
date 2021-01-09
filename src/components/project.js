import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';


class Project extends Component {

constructor(props){
    super(props);
    this.state={activeTab: 0};
}

toggleCategories(){

    if(this.state.activeTab===0){
        return (
<div className="project-grid col-md-6 col-lg-4">
<Grid>

<Card shadow={5} style={{minWidth: '450', marginTop: '20px', marginRight: '80px'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Smart Contact Manager</CardTitle>
   
                 <CardText>
                 SpringBoot application with Spring Security
                 </CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/SmartContactManager" rel="noopener noreferrer" target="_blank">
                     <Button colored >
                         
                         Github</Button>
                         </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>



            <Card shadow={5} style={{minWidth: '450', marginTop: '20px', marginRight: '80px'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Contact Application</CardTitle>
   
                 <CardText>Spring MVC Project with Spring Jdbc</CardText>
                 
                 
                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Contact_Application" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a> 

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>


            <Card shadow={5} style={{minWidth: '450', marginTop: '20px', marginRight: '80px'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Student Application</CardTitle>
   
                 <CardText>Java Hibernate</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Java-Hibernate-Project" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>


            <Card shadow={5} style={{minWidth: '450', marginTop: '20px', marginRight: '80px'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Employee Directory Application</CardTitle>
   
                 <CardText>Java Servlet</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Java-Servlet-Project" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>


            <Card shadow={5} style={{minWidth: '450', marginTop: '20px', marginRight: '80px'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Library Management Application</CardTitle>
   
                 <CardText>Core Java</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Library-System-Java" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>

            </Grid>

</div>
            
            




        )
    }

    else if(this.state.activeTab===1){
        return (
            <div className="project-grid col-md-6 col-lg-4">
                

<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Portfolio Website</CardTitle>
   
                 <CardText>React Js</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Library-System-Java" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>



            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Student Course Application</CardTitle>
   
                 <CardText>SpringBoot, Rest API, React Js<br/>Full Stack Application</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="#" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>


            
            

</div>
        )
    }

    else if(this.state.activeTab===2){
        return (
            <div className="project-grid col-md-6 col-lg-4">
                

<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Steganography with Cryptography</CardTitle>
   
                 <CardText>C# and SQL Server<br/>Desktop application for securely transferring files</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Steganography-and-Cryptography" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>



            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Dr.Virtual Application</CardTitle>
   
                 <CardText>C# and SQL Server<br/>Web application for recommending medicines based on symptoms</CardText>

                 <CardActions border style={{textAlign: 'center'}}>
                 <a href="https://github.com/rohankshirsagar54/Web-Health-Dr-Virtual-" rel="noopener noreferrer" target="_blank">
                     <Button colored>Github</Button>
                    </a>

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>


            
            

</div>
        )
    }

    else if(this.state.activeTab===3){
        return (
            <div className="project-grid col-md-6 col-lg-4">

<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Java Project 1</CardTitle>
   
                 <CardText>put the title over here</CardText>

                 <CardActions border>
                     <Button colored>Github</Button>
                     

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>



            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Java Project 1</CardTitle>
   
                 <CardText>put the title over here</CardText>

                 <CardActions border>
                     <Button colored>Github</Button>
                     

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>


            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', 
background: 'url{https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp} center/cover'}}>Java Project 1</CardTitle>
   
                 <CardText>put the title over here</CardText>

                 <CardActions border>
                     <Button colored>Github</Button>
                    

                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                 </CardMenu>
            </Card>

</div>
        )
    }

}


render(){
    return(
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>Java/Spring</Tab>
            <Tab>React</Tab>
            <Tab>C#</Tab>
            </Tabs>
            

                <Grid>

                    <Cell col={12}>

                       <div className="content">{this.toggleCategories()}</div> 
                    </Cell>
                </Grid>

                
            

            
        </div>
    )
}


}

export default Project;