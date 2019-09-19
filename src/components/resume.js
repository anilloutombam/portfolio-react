import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';





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
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833FB2', width:'50%'}} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <h5>Email</h5>
                        <p>nlkr50@gmail.com</p>
                        <h5>Web</h5>
                        <hr style={{borderTop:'3px solid #833FB2', width:'50%'}} />
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2019}
                            schoolName="Assam Don Bosco University"
                            schoolDescription="Don Bosco University is a project of the Salesians of Don Bosco (SDB) executed by Don Bosco Society, Azara, Guwahati. Presently, Salesians are working in 132 countries catering to over nine million young people worldwide; Salesians have been recognized by Government of India as the single largest provider of technical education in India, second only to the Government."
                        
                        />
                          <Education
                            startYear={2016}
                            endYear={2019}
                            schoolName="Assam Don Bosco University"
                            schoolDescription="Don Bosco University is a project of the Salesians of Don Bosco (SDB) executed by Don Bosco Society, Azara, Guwahati. Presently, Salesians are working in 132 countries catering to over nine million young people worldwide; Salesians have been recognized by Government of India as the single largest provider of technical education in India, second only to the Government."
                        
                        />
                            <hr style={{borderTop:'3px solid #e22497'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear='Present'
                            jobName="Software Engineer"
                            jobDescription="Working as a developer in the startup based company."
                        />
                         
                        <hr style={{borderTop:'3px solid #833FB2', width:'100%'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={40}
                        />
                          <Skills
                            skill="HTML/CSS"
                            progress={60}
                        />
                          <Skills
                            skill="Laravel"
                            progress={70}
                        />
                          <Skills
                            skill="React"
                            progress={40}
                        />
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;