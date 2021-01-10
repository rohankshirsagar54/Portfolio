import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
   
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Skills</Link>
                <Link to="/project">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contacts</Link>
                <a href="/images/Rohan.pdf" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
            <Link to="/resume">Skills</Link>
                <Link to="/project">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contacts</Link>
                <a href="/images/Rohan.pdf" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
