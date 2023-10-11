//import liraries
import React, {useState, useCallback} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {
  useNavigation,
  CommonActions,
  useFocusEffect,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Loader from '../../../components/loader';
import 'react-native-get-random-values';
import {createMsgApi, getGptMSgs} from '../../../services/apis/app/chatApis';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import RenderBubble from '../../../components/render-bubble-component';
// create a component
const ChatGptScreen = props => {
  const userData = useSelector(state => state.user);
  // console.log("msgUSer", userData);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = useState([]);
  const userID = userData.user._id;

  // const [answer, setAnswer] = useState();
  const defaultMsg = async messages => {
    try {
      console.log('userMsgId', userID);
      setLoading(true);
      const res = await createMsgApi(userID, messages[0]);
      setLoading(false);
      console.log(res.data);
      if (res.status == 201) {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, res.data.msg),
        );
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        await Keychain.resetGenericPassword();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: RouteNames.navigatorNames.authNavigator,
                params: {screen: RouteNames.authRoutes.loginScreen},
              },
            ],
          }),
        );
      } else {
        setLoading(false);
        console.error('Error sending data:', error);
        Alert.alert('error: ', error);
      }
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
          console.log('userMsgId111', userID);
          console.log('all mesgs', fetchedMsgs);
          setLoading(false);
          if (fetchedMsgs.length > 0) {
            setLoading(false);
            setMessages(fetchedMsgs[0].messages.reverse());
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          if (error.response && error.response.status === 401) {
            await Keychain.resetGenericPassword();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: RouteNames.navigatorNames.authNavigator,
                    params: {screen: RouteNames.authRoutes.loginScreen},
                  },
                ],
              }),
            );
          } else {
            console.error('Error getting data:', error);
            Alert.alert('Error', error);
          }
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
              renderBubble={props => <RenderBubble {...props} />}
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
