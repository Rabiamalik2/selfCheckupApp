import React, {Component, useRef, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import {useNavigation, StackActions} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {
  getQuestionaire,
  storeQuestionaireAnswers,
} from '../../../services/apis/app/questionaireApis';
import Loader from '../../../components/loader';
import {useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../../services/constants/colors';
import RouteNames from '../../../services/constants/route-names';

const QuestionaireScreen1 = props => {
  const userData = useSelector(state => state.user);
  // console.log('questionaire screen:', userData);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionaire, setQuestionaire] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const showQuestions = async () => {
    try {
      setLoading(true);
      if (userData.user.questionaireKey == false) {
        const fetchedData = await getQuestionaire(userData.user._id);
        setQuestionaire(fetchedData);
        // console.log(fetchedData, 'fetched');
        setLoading(false);
      } else {
        setLoading(false);
        Alert.alert('Already Done');
        navigation.dispatch(
          StackActions.replace('appNavigator', {
            screen: 'dashboardScreen',
          }),
        );
      }
    } catch (error) {
      setLoading(false);
      console.error('Error sending data:', error);
    }
  };
  const sendQuestionaireAnswers = async () => {
    try {
      setLoading(true);
      const response = await storeQuestionaireAnswers(
        userData.user._id,
        questionaire[0]._id,
        {selectedAnswers},
      );
      setLoading(false);
      if (response.status === 201) {
        setLoading(false);
        Alert.alert('Answers Stored Successfully');
        navigation.dispatch(
          StackActions.replace(RouteNames.navigatorNames.appNavigator, {
            screen: RouteNames.appRoutes.dashboardScreen,
          }),
        );
      } else {
        setLoading(false);
        console.error('Error:', response.data);
        Alert.alert('Could not be Sent.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error during storing answers:', error);
      Alert.alert('Error ');
    }
  };
  useEffect(() => {
    showQuestions();
  }, []);

  const handleOptionChange = (questionId, selectedOption) => {
    console.log('SelectedOpt:', selectedOption);
    if (Array.isArray(selectedOption)) {
      selectedOption = selectedOption[0];
    }
    // const concatenatedOptions = selectedOption.join(', ');
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption,
    });
  };

  const handleNextQuestion = () => {
    // console.log(questionaire[0].questions,'questionaire[0]')
    if (currentQuestionIndex < questionaire[0].questions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    else if (currentQuestionIndex >= questionaire[0].questions.length - 1) {
      sendQuestionaireAnswers();
    }
  };
  const handlePreviousQuestion = () => {
    // console.log(questionaire[0].questions,'questionaire[0]')
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}>
      <SafeAreaView style={styles.container}>
        <Loader visible={loading} />
        <View style={styles.scView}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <MaterialIcons name="west" style={styles.westStyle} />
          </TouchableOpacity>
          <Text style={styles.selfTxt}>Self</Text>
          <Text style={styles.checkTxt}>Check</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.subTxt}>One-Time Questionaire</Text>
        </View>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={styles.viewS2}>
              {questionaire.length > 0 && (
                <View key={questionaire[0].questions[currentQuestionIndex]._id}>
                  <Text style={styles.txtStyle1}>
                    {questionaire[0].questions[currentQuestionIndex].text}
                  </Text>
                  {questionaire[0].questions[currentQuestionIndex].type ===
                  'checkbox' ? (
                    questionaire[0].questions[currentQuestionIndex].options.map(
                      (option, optionIndex) => (
                        <View key={optionIndex} style={styles.txtStyle2}>
                          <CheckBox
                            style={styles.txtStyle3}
                            value={
                              selectedAnswers[
                                questionaire[0].questions[currentQuestionIndex]
                                  ._id
                              ] &&
                              selectedAnswers[
                                questionaire[0].questions[currentQuestionIndex]
                                  ._id
                              ] == option
                            }
                            onValueChange={newValue => {
                              console.log('newValue', newValue);
                              handleOptionChange(
                                questionaire[0].questions[currentQuestionIndex]
                                  ._id,
                                newValue
                                  ? option
                                  : (selectedAnswers[
                                      questionaire[0].questions[
                                        currentQuestionIndex
                                      ]._id
                                    ] =
                                      selectedAnswers[
                                        questionaire[0].questions[
                                          currentQuestionIndex
                                        ]._id
                                      ] !== option),
                              );
                            }}
                          />
                          <Text style={styles.options}>{option}</Text>
                        </View>
                      ),
                    )
                  ) : (
                    <Input
                      value={
                        selectedAnswers[
                          questionaire[0].questions[currentQuestionIndex]._id
                        ] || ''
                      }
                      onChangeText={text =>
                        handleOptionChange(
                          questionaire[0].questions[currentQuestionIndex]._id,
                          text,
                        )
                      }
                    />
                  )}
                </View>
              )}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Button
                  onPress={handlePreviousQuestion}
                  style={styles.Save}
                  name="Previous"
                />
                <Button
                  onPress={handleNextQuestion}
                  style={styles.Save}
                  name="Next"
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default QuestionaireScreen1;
