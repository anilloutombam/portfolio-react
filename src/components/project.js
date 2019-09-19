import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText,CardActions,CardMenu,Button,IconButton } from 'react-mdl';



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png)center /cover '   }}> React Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}} >
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>


                     {/*Project 1*/}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png)center /cover '   }}> React Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}} >
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>


                     {/*Project 1*/}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png)center /cover '   }}> React Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}} >
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>

            )
        } else if(this.state.activeTab === 1 ) {
            return (
                <div><h1>This is Laravel</h1></div>
            )
        } else if( this.state.activeTab === 2 ) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )

        } else if ( this.state.activeTab === 3) {
            return (
                <div><h1>This is MySQL </h1></div>
            )
        }

    }

    render() { 
        return ( 
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
                    <Tab>React</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>MySQL</Tab>

                </Tabs>
                    <Grid>
                        <Cell col= {12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>

                    </Grid>
            </div>
         );
    }
}
 
export default Project;