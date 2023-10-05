import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import {
    Dimensions,
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Account = ({onPress, name, description}) => {
  return (
    <View style={styles.viewS7}>
    <Text style={styles.txtS3}>
     {description}
    </Text>
    <TouchableOpacity
     onPress={() => {onPress()}}
      style={styles.toStyle2}>
      <Text
        style={styles.txtS4}>
       {name}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default Account

const styles = StyleSheet.create({

    viewS7:{
        flexDirection:"row", 
        alignItems:"center", 
        marginTop:20, 
        justifyContent:"center",
    },
    
    toStyle2:{
        paddingLeft: 6
    },
    txtS3:{ 
        color:"#33295d" ,
        fontFamily:"Poppins",
        fontWeight: "400",
    },
    txtS4:{
        paddingVertical: 0, 
        color: "#ff8945",
        fontWeight: "700",
        fontFamily:"Poppins",
    },
    
})