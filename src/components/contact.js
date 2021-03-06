import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



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
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}} >
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +(91)7002159327
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                         nlkr50@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                                        <i className="fa fa-linkedin" aria-hidden="true"/>
                                         Anil-Loutombam
                                    </ListItemContent>
                                </ListItem>
               
                            </List>
                        </div>
                       
                    </Cell>


                </Grid>
            </div>

           
         );
    }
}
 
export default Contact;