import * as React from 'react';
import { CustomButton } from './components/widgets/button/CustomButton';
import { CustomSelectItem } from './components/widgets/selectitem/CustomSelectItem';
import { CustomTextItem } from './components/widgets/textitem/CustomTextItem';

export class DisplayComponent extends React.Component{
    public render(){
        return(
            <div>
                <div>
                    <CustomButton height='25px' width='100px'/>
                </div>
                <div>
                    <CustomTextItem height='25px' width='100px'/>
                </div>
                <div>
                    <CustomSelectItem height='25px' width='100px'/>
                </div>
            </div>
        );
    }
}