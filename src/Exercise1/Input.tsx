import * as React from 'react';
import { Component } from 'react';

class Input extends Component<any, any> {
    constructor(props: any, {}) {
        super(props);
        this.state = {
            val : 0
        };
    }
    handleChange(event: any, {}) {
        this.setState({ 
            val : event.target.value 
        });
        if (this.props.conversion) {
            this.props.conversion(event.target.value);
        }
    }
    render() {
        return (
            <div>
                <span>输入数字：</span>
                <input type="number"
                    placeholder='输入数字'
                    value={this.state.val}
                    onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default Input;