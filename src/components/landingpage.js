import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../components/assets/avatar/image.png';


class LandingPage extends Component {
    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto'}} >
                <Grid className= "landing-grid">
                    <Cell col={12}>
                        <img
                            src={ profilePic }  
                            alt="avatar" 
                            className="avatar-img"
                        />
                    </Cell>
                    <div className="banner-text">
                        <h1>Portfolio Profile</h1>
                        <hr/>
                        <p> HTML/CSS | Laravel | React | MySQL | MongoDB</p>
                        <div className="social-links">
                            {/* Linkedin*/}
                            <a href="https://www.linkedin.com/in/anil-loutombam/" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            {/* Medium*/}
                            <a href="https://medium.com/@anilloutombam" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-medium" aria-hidden="true"></i>
                            </a>

                             {/* Github*/}
                             <a href="https://github.com/anilloutombam" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>
                </Grid>

            </div>
         );
    }
}
 
export default LandingPage;