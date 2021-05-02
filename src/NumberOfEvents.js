import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventValue: 32,
  };

  handleEventInputChanged = (event) => {
    const eventValue = event.target.value;
    this.setState({
      eventValue,
    });
  };

  render() {
    return (
      <div className='numberOfEvent'>
        <label htmlFor='numberOfEvent'></label>
        <input
          type='number'
          name='InputNumberOfEvent'
          className='inputEvent'
          placeholder='Enter Number of Events'
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
