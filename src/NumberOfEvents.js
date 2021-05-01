import React,{Component} from 'react';

class NumberOfEvents extends Component{
    state = {
        count :32
    };

    handleInputChange = (event)=>{
        const count = event.target.value;
        this.setState({
            count
        });
    };

    render(){
        return(
            <div className="eventCounter">
                <lable htmlFor='eventCount'></lable>
                <input
                    type="number"
                    name="eventCount"
                    className="eventInputCount"
                    placeholder="Please Enter the Count"
                    value = {this.state.count}
                    onChange = {this.handleInputChange} 
                />
            </div>
        );
    }
}

export default NumberOfEvents;