import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {
    Dimensions,
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Terms = ({name,onPress}) => {
  return (
    
    <View style={styles.viewS8} >
    <TouchableOpacity onPress={() => {onPress()}}>
      <Text style={styles.txtS7}>{name}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Terms

const styles = StyleSheet.create({

    viewS8:{
        marginTop: 5,
        alignItems:"center", 
        justifyContent:"center",
    },
    txtS7:{
        color:"#33295d",
        fontFamily:"Poppins",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "400",
      },
})