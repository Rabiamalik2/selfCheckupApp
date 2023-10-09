import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
import Fonts from '../../services/constants/fonts';
const Terms = ({name, onPress}) => {
  return (
    <View style={styles.viewS8}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}>
        <Text style={styles.txtS7}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  viewS8: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtS7: {
    color: Colors.purple,
    fontFamily: Fonts.poppinsBold,
    fontSize: responsiveFontSize(1.5),
  },
});
