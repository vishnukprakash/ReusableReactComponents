import *  as React from 'react';
import './CustomButton.css';


export class CustomButton extends React.Component<any, any>{
    public render(){
        return(
                <button className="custombutton" style={{height: this.props.height, width: this.props.width}}/>
            );
    }
}