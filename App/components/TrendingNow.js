import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TrendingNow = () => {
  let books = [
    {
      img: {uri: 'https://ia800309.us.archive.org/9/items/adventures_sherlock_holmes_rg_librivox/Adventures_Sherlock_Holmes_V2_1209.jpg?cnt=0' },
    },
    {
      img: {uri: 'https://ia800309.us.archive.org/9/items/adventures_sherlock_holmes_rg_librivox/Adventures_Sherlock_Holmes_V2_1209.jpg?cnt=0'},
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.trendingNowContainer}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Trending Now</Text>
        <TouchableWithoutFeedback>
            <Text style={styles.link}>See more</Text>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={books}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback>
              <View style={styles.trendingNow}>
                <Image style={styles.itemImg} source= {item.img} />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default TrendingNow;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  trendingNowContainer: {
    paddingTop: 40,
    paddingLeft: 10,
  },
  textHeader: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  trendingNow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F5F5FA',
    borderRadius: 10,
    marginRight: 15,
    marginTop: 10,
    padding: 8,
  },
  itemImg: {
    width: 200, 
    height: 200,
    resizeMode: 'stretch',
  },
  link: {
    color: '#4838D1',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    top: 8,
  },
});
