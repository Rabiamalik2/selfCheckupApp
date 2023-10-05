//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import Loader from '../../../components/loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Images from '../../../services/constants/images';
import Button from '../../../components/button-component/button';
import Account from '../../../components/text-input-component/haveAccount';
import Terms from '../../../components/text-input-component/termsConditions';
import RouteNames from '../../../services/constants/route-names';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {addImage} from '../../../services/apis/auth';
import storage from '@react-native-firebase/storage';

// create a component
const ChoosePicScreen = () => {
  const Route = useRoute();
  const user = Route.params?.user;
  console.log('user details from add picture screen', user.email);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [cameraPhoto, setCameraPhoto] = useState(null);
  const [galleryPhoto, setGalleryPhoto] = useState(null);
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const takePhotoFromCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera(options);
        if (result) {
          console.log('Photo captured:', result.uri);
        } else {
          console.log('Photo capture failed.');
        }
      } else {
        console.log('Camera permission denied.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const choosePhotoFromGallery = async () => {
    const result = await launchImageLibrary(options);
    if (!result.cancelled) {
      setGalleryPhoto(result.assets[0].uri);
    } else {
      console.log('Image selection failed.');
    }
  };
  const proceedButton = async () => {
    try {
      const fileName = `${Date.now()}_${Math.random()}`;
      const storageRef = storage().ref().child(`/selfCheckImages/${fileName}`);
      const response = await fetch(galleryPhoto);
      const blob = await response.blob();
      await storageRef.put(blob);
      const downloadURL = await storageRef.getDownloadURL();
      console.log('Image uploaded successfully:', downloadURL);
      const imagePath = downloadURL;
      navigation.dispatch(
        StackActions.replace('authNavigator', {
          screen: 'signupCompleteScreen',
        }),
      );
      await addImage(user.email, imagePath);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <Loader visible={loading} />
      <View style={styles.viewS1}>
        <Text style={styles.txtS1}>Self</Text>
        <Text style={styles.txtS2}>Check</Text>
      </View>
      <View style={styles.parentView}>
        <View style={styles.childView}>
          <View style={styles.viewS2}>
            <Icon name="user-circle" style={styles.userCS}></Icon>
            <Text style={styles.choosePicTxt}>Choose Picture</Text>
            {galleryPhoto != null ? (
              <>
                <Image
                  source={{uri: galleryPhoto}}
                  style={{width: 200, height: 200}}
                />
                <Button
                  onPress={choosePhotoFromGallery}
                  style={styles.CaptureToStyle}
                  name="Select Again"
                />
                <Button
                  onPress={proceedButton}
                  style={styles.GalleryToStyle}
                  name="Proceed"
                />
              </>
            ) : (
              <>
                <View style={styles.camStyle}>
                  <Image source={Images.retcam} style={styles.imgCamStyle} />
                </View>
                <Button
                  onPress={takePhotoFromCamera}
                  style={styles.CaptureToStyle}
                  name="Capture Picture"
                />
                <Button
                  onPress={choosePhotoFromGallery}
                  style={styles.GalleryToStyle}
                  name="Choose From Gallery"
                />
              </>
            )}
            <Button
              onPress={() =>
                navigation.dispatch(
                  StackActions.replace('authNavigator', {
                    screen: 'signupCompleteScreen',
                  }),
                )
              }
              style={styles.SkipToStyle}
              name="Skip"
            />
          </View>
        </View>
      </View>
      <Account
        name="Sign In"
        description="Already have an Account?"
        onPress={() => navigation.navigate(RouteNames.authRoutes.loginScreen)}
      />
      <Terms
        name="Terms & Conditions"
        onPress={() =>
          navigation.dispatch(
            StackActions.replace('authNavigator', {
              screen: 'termScreen',
              params: {isReadOnly: true},
            }),
          )
        }
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default ChoosePicScreen;
// <Image source={{ uri: galleryPhoto }} style={{ width: 200, height: 200 }} />
