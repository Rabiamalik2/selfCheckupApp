import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Fonts from '../../services/constants/fonts';
import Colors from '../../services/constants/colors';

const Account = ({onPress, name, description}) => {
  return (
    <View style={styles.viewS7}>
      <Text style={styles.txtS3}>{description}</Text>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={styles.toStyle2}>
        <Text style={styles.txtS4}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  viewS7: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },

  toStyle2: {
    paddingLeft: 6,
  },
  txtS3: {
    color: Colors.purple,
    fontFamily: Fonts.poppinsRegular,
  },
  txtS4: {
    paddingVertical: 0,
    color: Colors.orange,
    fontFamily: Fonts.poppinsBold,
  },
});
