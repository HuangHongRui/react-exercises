import * as React from 'react';
import { Component } from 'react';

class PercentageShower extends Component<any,any> {
    render() {
        return (
            <div>
                <span>转化为百分比：</span>
                <span>{ (this.props.conversion*100).toFixed(2) + '%'}</span>
            </div>
        );
    }
}

export default PercentageShower;