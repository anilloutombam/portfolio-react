import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Contact extends Component {
    render() { 
        return ( 
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} >
                        <h2>Anil Loutombam</h2>
                        <img src="https://qph.fs.quoracdn.net/main-raw-172673610-taxpksdjyppyzsosdtwftlrwktgzyjce.jpeg"
                         alt="profile" 
                         className="profile-pic"
                          />
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                    </Cell>


                </Grid>
            </div>

           
         );
    }
}
 
export default Contact;