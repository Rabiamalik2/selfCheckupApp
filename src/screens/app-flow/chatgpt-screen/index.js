//import liraries
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Loader from '../../../components/loader';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {createMsgApi, getGptMSgs} from '../../../services/apis/auth';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
// create a component
const ChatGptScreen = props => {
  const userData = useSelector(state => state.user);
  // console.log("msgUSer", userData);
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = useState([]);
  const userID = userData.user._id;
  
  // const [answer, setAnswer] = useState();
  const defaultMsg = async messages => {
    try {
      console.log("userMsgId", userID)
      setLoading(true);
      const res = await createMsgApi(userID, messages[0]);
      setLoading(false);
      console.log(res.data)
      if (res.status == 201) {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, res.data.msg),
        );
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error sending data:', error);
    }
  };
  const onSend = useCallback((messages = []) => {
    // console.log('onSend: ', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    defaultMsg(messages);
  }, []);

  useFocusEffect(
    useCallback(() => {
      const displayingMsgs = async () => {
        try {
          setLoading(true);
          const fetchedMsgs = await getGptMSgs(userID);
          console.log("userMsgId111", userID)
          console.log('all mesgs', fetchedMsgs);
          setLoading(false);
          if (fetchedMsgs.length > 0) {
            setLoading(false);
            setMessages(fetchedMsgs[0].messages.reverse());
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          console.error('Error getting data:', error);
        }
      };
      displayingMsgs();
    }, []),
  );
  const customtInputToolbar = props => {
    return <InputToolbar {...props} containerStyle={styles.inputContainer} />;
  };
  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.viewS1}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="west" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.txtS1}>Chat Gpt</Text>
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <View style={styles.viewS2}>
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              renderBubble={props => {
                return (
                  <Bubble
                    {...props}
                    textStyle={{
                      right: {
                        color: 'white',
                        // fontFamily: 'CerebriSans-Book',
                      },
                      left: {
                        color: 'black',
                        // fontFamily: 'P',
                      },
                    }}
                    wrapperStyle={{
                      left: {
                        backgroundColor: '#D6D4DF',
                      },
                      right: {
                        backgroundColor: '#FF8845',
                      },
                    }}
                  />
                );
              }}
              renderInputToolbar={props => customtInputToolbar(props)}
              user={userData.user}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default ChatGptScreen;
