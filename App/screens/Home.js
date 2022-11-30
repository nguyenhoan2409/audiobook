import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/Categories';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import RecommendBook from '../components/RecommendBook';
import TrendingNow from '../components/TrendingNow';
import TopBar from '../components/TopBar';

var categories = [
  {
    name: 'Rock',
  },
  {
    name: 'Metal',
  },
  {
    name: 'Rock',
  },
  {
    name: 'Jazz',
  },
  {
    name: 'Classic',
  },
];

const Home = () => {

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <Categories />
        <RecommendBook />
        <TrendingNow />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
