import *  as React from 'react';

export class CustomButton extends React.Component<any, any>{
    public render(){
        return(
                <button style={{height: this.props.height, width: this.props.width}}/>
            );
    }
}