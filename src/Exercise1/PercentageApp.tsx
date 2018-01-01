import * as React from 'react';
import { Component } from 'react';
import Input from './Input';
import PercentageShower from './PercentageShower';

class PercentageApp extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            val : 0
        };
    }
    getMeVal(something: any) {
        this.setState ({
            val : something
        });
    }
    render() {
        return (
            <div>
                <Input conversion={this.getMeVal.bind(this)}/>
                <PercentageShower conversion={this.state.val}/>
            </div>
        );
    }
}

export default PercentageApp;