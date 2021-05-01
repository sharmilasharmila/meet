import React, { Component } from 'react';
import { mockData } from './mock-data';

class Event extends Component{
    constructor(props){
        super(props);
        this.state={
            showDetails :false
        }
    }

    handleShowHide(bool) {
        this.setState({
            showDetails: bool
        });
    }

    render(){
        //const {summary,location,description,link} = this.props.event;
        //const date = this.props.event.date;
        let details;
        const event = this.props;

        if(this.state.showDetails){
            details = <div className="showhide">
                <h2>about event</h2>
                <p className="description">{event.description}</p>
                <a className="link" href={event.htmllink}>Show details from Calendar</a>
                <button className="detailsButton" onClick={()=>this.handleShowHide(false)}>Hide Details</button>
            </div>
        } else{
            details = <button className="detailsButton" onClick={()=>this.handleShowHide(true)}>Show Details</button>
        }

        return <div className="event">
            <p className="summary">{event.summary}</p>
            <p className="date">{event.start}</p>
            <p className="location">{event.location}</p>
            {details}
        </div>
    };
};

export default Event;