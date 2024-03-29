import React from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import  Main  from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me </Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title={<Link style={{textDecoration:'none',color:'black'}} to="/">My Portfolio</Link>}  >
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me </Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        {/* landing page */}
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
