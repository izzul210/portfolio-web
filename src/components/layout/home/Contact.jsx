import React, { Component, Fragment } from 'react';
import './Contact.scss';

class Contact extends Component{
    render(){
        return(
            <Fragment>
                <div className="portfolio_div">
                    <div className="portfolio_title">
                        <hr size="3" width="80%" color="#68273d"></hr>
                        <h3>CONTACTS</h3>
                        <hr size="3" width="80%" color="#68273d"></hr>
                    </div>        

                    <div className="contact_info">
                        <h4>Vancouver, BC, Canada</h4>
                        <h3>izzulsyahmi210@gmail.com</h3>
                        <h5>(778) 866-1230</h5> 
                    </div>
                             
                </div>
            </Fragment>
        )
    }
}

export default Contact;