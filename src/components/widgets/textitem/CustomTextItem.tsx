import *  as React from 'react';

export class CustomTextItem extends React.Component<any, any>{
    public render(){
        return(<input type="text" style={{height: this.props.height, width: this.props.width}}/>);
    }
}