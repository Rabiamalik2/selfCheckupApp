import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
} from 'react-native';
import Loader from '../../../components/loader';
import Button from '../../../components/button-component';
import {
  useNavigation,
  useRoute,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import styles from '../setting-screen/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {deleteUser} from '../../../services/apis/app/userApis';
import RouteNames from '../../../services/constants/route-names';

const SettingScreen = props => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  console.log('sys:', userData);
  const [loading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const Logout = async () => {
    try {
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
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Error during logout');
    }
  };
  const buttonDel = () => {
    setModalVisible(true);
  };
  const cancelDelete = () => {
    setModalVisible(false);
  };
  const deleteSelectedUser = async () => {
    try {
      setModalVisible(false);
      setLoading(true);
      const response = await deleteUser(userData.user._id);
      setLoading(false);
      if (response.status == 204) {
        setLoading(false);
        Alert.alert(
          'Delete Profile',
          'Profile Deleted , Redirecting You to login Page.',
        );

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
        console.error('Network error:', error);
        Alert.alert('Error deleting:', error);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.istView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.txtProfile}>Profile</Text>
      </View>
      <View style={styles.optionStyle}>
        <Text style={styles.infoTxt}>Your Information</Text>

        {
          //<TouchableOpacity style={styles.biView}>
          //   <MaterialCommunityIcons
          //     name="card-account-details"
          //     style={styles.biIcon}
          //   />
          //   <Text style={styles.biTxt}>Basic Information</Text>
          // </TouchableOpacity>
        }
        <TouchableOpacity
          style={styles.biView}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1, // The index is the number of screens to reset.
                routes: [
                  {
                    name: RouteNames.navigatorNames.appNavigator,
                    params: {screen: RouteNames.appRoutes.dashboardScreen},
                  },
                  {
                    name: RouteNames.navigatorNames.sosNavigator,
                    state: {
                      routes: [
                        {
                          name: RouteNames.sosNavRoutes.personalInfoScreen,
                        },
                      ],
                    },
                  },
                ],
              }),
            )
          }>
          <MaterialCommunityIcons
            name="clipboard-account-outline"
            style={styles.pInfoIcon}
          />
          <Text style={styles.biTxt}>Personal Information</Text>
        </TouchableOpacity>

        {
          // <TouchableOpacity style={styles.biView}>
          //   <MaterialCommunityIcons
          //     name="sticker-text-outline"
          //     style={styles.hbIcon}
          //   />
          //   <Text style={styles.biTxt}>Health Background</Text>
          // </TouchableOpacity>
          // <TouchableOpacity style={styles.biView}>
          //   <MaterialIcons name="medication" style={styles.medicIcon} />
          //   <Text style={styles.biTxt}>Medication</Text>
          // </TouchableOpacity>
          // <TouchableOpacity style={styles.biView}>
          //   <MaterialCommunityIcons name="bee" style={styles.allergiesIcon} />
          //   <Text style={styles.biTxt}>Allergies</Text>
          // </TouchableOpacity>
          // <View style={styles.historyView}>
          //   <Text style={styles.infoTxt}>History</Text>
          //   <TouchableOpacity style={styles.biView}>
          //     <MaterialIcons name="insert-chart-outlined" style={styles.haIcon} />
          //     <Text style={styles.biTxt}>Health Assessments</Text>
          //   </TouchableOpacity>
          //   <TouchableOpacity style={styles.biView}>
          //     <MaterialCommunityIcons
          //       name="vector-polyline"
          //       style={styles.stIcon}
          //     />
          //     <Text style={styles.biTxt}>Symptom Tracking</Text>
          //   </TouchableOpacity>
          // </View>
        }
        <TouchableOpacity style={styles.biView} onPress={buttonDel}>
          <Text style={styles.deleteTxt}>Delete health Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutView} onPress={Logout}>
          <MaterialIcons name="logout" style={styles.logout} />
          <Text style={styles.biTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Do You really want to delete your profile?
              </Text>
              <View style={styles.buttonView}>
                <Button
                  onPress={deleteSelectedUser}
                  style={[styles.button]}
                  name="Yes"
                />
                <Button
                  onPress={cancelDelete}
                  style={[styles.button]}
                  name="No"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
