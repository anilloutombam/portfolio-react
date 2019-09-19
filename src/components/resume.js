import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Resume extends Component {
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4} >
                        <div style= {{textAlign: 'center'}}>
                        <img src="https://qph.fs.quoracdn.net/main-raw-172673610-taxpksdjyppyzsosdtwftlrwktgzyjce.jpeg"
                         alt="profile" 
                         className="profile-pic"
                          />
                          
                        </div>
                        <h2 style={{paddingTop:'2em'}} > Anil Loutombam</h2>

                    </Cell>
                    <Cell col={4} className="resume-right-col">
                        Here i am
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;