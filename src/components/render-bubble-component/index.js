import {View, Text} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';
import Colors from '../../services/constants/colors';
const RenderBubble = props => {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: {
          color: Colors.white,
          // fontFamily: 'CerebriSans-Book',
        },
        left: {
          color: Colors.black,
          // fontFamily: 'P',
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: Colors.lightGrey,
        },
        right: {
          backgroundColor: Colors.orange,
        },
      }}
    />
  );
};

export default RenderBubble;
