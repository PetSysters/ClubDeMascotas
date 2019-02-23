import React, { Component } from 'react';
import imagenSan from '../img/San.jpg'
import Menu from '../Menu/Menu';
import './Home.css';


class Home extends Component {
  

        render() {
            return (
                <div className="main-container">
                    <React.Fragment>
                            <Menu />
                                <div className="Slider"> <img src={imagenSan}/> </div>
                                <div className="Footer"></div>
                    </React.Fragment>
                </div>
        
            );
        }
    }

export default Home;

