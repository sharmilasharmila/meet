import React, { Component } from 'react';

class Event extends Component {
  state = {
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    return (
      <div className='eventSummary'>
        <h1>{this.props.summary}</h1>
        <p>{() => this.props.start.dateTime}</p>
        <p className='locations'>{this.props.location}</p>

        {this.state.showHideDetails && (
          <div className='event-details'>
            <h2>About event:</h2>
            <a href={this.props.htmlLink}>See Details on Google Calendar</a>
            <p>{this.props.description}</p>
          </div>
        )}

        <button
          className='detailsButton'
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showHideDetails ? 'show details' : 'hide-details'}
        </button>
      </div>
    );
  }
}
export default Event;