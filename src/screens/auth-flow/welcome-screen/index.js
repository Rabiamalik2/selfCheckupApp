//import libraries
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Loader from '../../../components/loader';
import Onboarding from '../../../components/my-carousal/onboarding';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {
  useNavigation,
  useRoute,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import {fetchUserData} from '../../../services/apis/app/userApis';
import {setUser} from '../../../services/redux/reducers/user-reducer';
import RouteNames from '../../../services/constants/route-names';
import SplashScreen from 'react-native-splash-screen';
// create a component
const WelcomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  // const [userData, setUserData] = useState(null);
  // console.log("user", userData)
  const isTokenValid = async token => {
    try {
      setLoading(true);
      const response = await fetchUserData(token);
      console.log('isTokenValid', response.user);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };
  const checkKeychainAndNavigate = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        const token = credentials.password;
        const isValid = await isTokenValid(token);
        // console.log("isuser: ", isValid.user)
        dispatch(setUser(isValid.user));
        // setUserData(isValid.user);
        if (isValid) {
          SplashScreen.hide();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: RouteNames.navigatorNames.appNavigator,
                  // params: {screen: RouteNames.appRoutes.dashboardScreen},
                },
              ],
            }),
          );
          SplashScreen.hide();
        } else {
          SplashScreen.hide();
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
          SplashScreen.hide();
        }
      }
    } catch (error) {
      console.error('Error while checking keychain:', error);
    }
  };
  useEffect(() => {
    checkKeychainAndNavigate();
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <Onboarding />
    </SafeAreaView>
  );
};

//make this component available to the app
export default WelcomeScreen;
