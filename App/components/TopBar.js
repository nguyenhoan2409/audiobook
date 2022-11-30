import React from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    Image,
  } from 'react-native';

  import Icon from 'react-native-vector-icons/Ionicons';


const TopBar = () => {
    return (
        <View style={styles.header}>
        <Image source={require('../assets/imgs/logo.png')} style={styles.logoHeader} />
        <Text style={styles.textHeader}>AudioBooks</Text>
        <Icon name='settings-outline' size={22} color="#4838D1" style={styles.iconSettingHeader}/>
      </View>
    ); 

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 10,
        borderWidth: 1,
        borderColor: "#ccc",
      }, 
      logoHeader: {
        height: 40, 
        width: 40,
        marginLeft: 10,   
      }, 
      textHeader: {
        fontSize: 25, 
        paddingLeft: 5, 
        color: '#4838D1', 
        fontWeight: 'bold', 
      }, 
      iconSettingHeader: {
        fontSize: 30, 
        position: 'absolute', 
        right: 10,
        top: 10
      }
});

export default TopBar; 