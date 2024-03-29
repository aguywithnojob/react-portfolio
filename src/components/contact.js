import React,{ Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid container-fluid">
                    <Cell col={6}>
                        <h2>Ashutosh Kumar Singh</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                        style={{height:'250px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}> some random text a some random text a some random text a some random text a some random text asome random text a  </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                    <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}><i className="fa fa-phone-square" aria-hidden="true"></i>984375883</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}><i className="fa fa-envelope" aria-hidden="true"></i>Aaron Paul</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}><i className="fa fa-skype" aria-hidden="true"></i>Bob Odenkirk</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}><i className="fa fa-linkedin" aria-hidden="true"></i>Bob Odenkirk</ListItemContent>
                        </ListItem>
                        </List>
                    </div>
                    


                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;