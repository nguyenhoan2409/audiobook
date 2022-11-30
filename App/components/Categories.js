import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  let categories = [
    {
      name: 'Rock',
      data: [
        {uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336' }, 
        {uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336' }, 
        {uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336' }, 
        {uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336' }, 
      ]
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
    {
      name: 'Classic',
    },

    {
      name: 'Classic',
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Categories</Text>
      </View>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Details', {categoryName: item.name, items: categories})}>
              <View style={styles.category}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  categoriesContainer: {
    paddingTop: 40,
    paddingLeft: 10,
  },
  textHeader: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F5F5FA',
    borderRadius: 10,
    marginRight: 15,
    marginTop: 10,
    padding: 8,
  },
  itemName: {
    color: '#000',
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
