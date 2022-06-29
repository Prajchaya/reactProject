import{Text, View}from'react-native';
import React from'react';
import Cat from './Cat'

const Cafe = ( )=> {
    return (
        <view>
            <Text>Welcome!</Text>
            <Cat/>
            <Cat/>
            <Cat/>
        </view>
    );
}

export default Cafe;