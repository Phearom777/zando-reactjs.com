import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import Card from './component/Card';
import Footer from './component/Footer';

function Home(props) {
    return (
        <>  
            <NavBar></NavBar>
            <Carousel></Carousel>
            <Card></Card>
            <Footer></Footer>

        </>
    );
}

export default Home;