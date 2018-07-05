import *  as React from 'react';

export class CustomSelectItem extends React.Component<any, any>{
    public render(){
        return(<select style={{height: this.props.height, width: this.props.width}}>
                    <option>option-1</option>
                    <option>option-2</option>
                    <option>option-3</option>
                    <option>option-4</option>
                    <option>option-5</option>
                </select>);
    }
}