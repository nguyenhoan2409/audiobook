import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

const CategoriesDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.topCategoryDetailPage}>
        <Icon
          name="chevron-back-outline"
          size={22}
          color="#ccc"
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.iconGoBack}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.params.categoryName}</Text>
        </View>
      </View>

      <View style={styles.itemImgContainer}>
        <FlatList
          data={route.params.items[0].data}
          horizontal={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View>
                <Image style={styles.itemImg} source={item} />
                <Text style={styles.bookName}>Harry Potter and the Prisoner of Azkaban 2</Text>
                <Text style={styles.bookAuthor}>J.K.Rowling</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CategoriesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    position: 'absolute',
    left: '25%',
    right: '25%',
    alignItems: 'center',
    paddingTop: 10,
  },
  topCategoryDetailPage: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  iconGoBack: {},
  itemImgContainer: {
    alignItems: 'center',
  },
  itemImg: {
    width: 160,
    height: 160,
    resizeMode: 'stretch',
    marginTop: 15,
    marginHorizontal: 5,
  },
  bookName: {
    width: 160,  
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 5
  }, 
  bookAuthor: {
    paddingLeft: 5, 
    fontSize: 12,
    color: '#4838D1',
  }
});
