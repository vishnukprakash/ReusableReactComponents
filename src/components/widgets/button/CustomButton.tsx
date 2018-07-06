import *  as React from 'react';
import './CustomButton.css';

export class CustomButton extends React.Component<any, any>{
    public render(){
        return(<button style={{height: this.props.height, width: this.props.width, backgroundColor: '#ff0f97'}}/>);
    }
}