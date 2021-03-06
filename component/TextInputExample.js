import {View, TextInput, Button} from 'react-native';
import React from 'react';

const TextInputExample = () => {
    return (
        <view style = {{padding : 10}}>
            <view
                style={{
                    flex : 1,
                    flexDirection : 'row',
                    justifyContent : 'space-between',
                    alignItem : 'center'
                }}>
                
                <TextInput
                    placeholder='Course Goal'
                    style = {{width : '80%', borderColor : 'black', borderWidth : 1, padding : 10}} />

                <Button title = "ADD"/>

            </view>

        </view>
    );
};

export default TextInputExample;

