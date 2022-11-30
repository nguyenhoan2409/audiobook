import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import TopBar from '../components/TopBar';
// import { TextInput } from 'react-native-gesture-handler';

const Library = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <View style={styles.topProfilePage}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg',
          }}
          style={styles.img}
        />
        <Text
          style={styles.imgText}>
          Change profile photo
        </Text>
      </View>
      <View style={styles.information}>

      </View>
      <View style={styles.editProfile}></View> */}
      <TopBar />
      <ScrollView>
        <View style={styles.topLibraryPage}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
            My books
          </Text>
          <TextInput
            placeholder="Search Books or Authors..."
            style={styles.inputSearch}></TextInput>
        </View>
        <View style={styles.centerLibraryPage}>
          <View style={styles.bookInfoContainer}>
            <Image
              style={styles.imgBook}
              source={{
                uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336',
              }}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>
                Harry Potter and The Prisoner of Azkaban
              </Text>
              <Text style={styles.bookAuthor}>J.K.Rowling</Text>
            </View>
          </View>
          <View style={styles.bookInfoContainer}>
            <Image
              style={styles.imgBook}
              source={{
                uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336',
              }}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>
                Harry Potter and The Prisoner of Azkaban
              </Text>
              <Text style={styles.bookAuthor}>J.K.Rowling</Text>
            </View>
          </View>
          <View style={styles.bookInfoContainer}>
            <Image
              style={styles.imgBook}
              source={{
                uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336',
              }}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>
                Harry Potter and The Prisoner of Azkaban
              </Text>
              <Text style={styles.bookAuthor}>J.K.Rowling</Text>
            </View>
          </View>
          <View style={styles.bookInfoContainer}>
            <Image
              style={styles.imgBook}
              source={{
                uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336',
              }}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>
                Harry Potter and The Prisoner of Azkaban
              </Text>
              <Text style={styles.bookAuthor}>J.K.Rowling</Text>
            </View>
          </View>
          <View style={styles.bookInfoContainer}>
            <Image
              style={styles.imgBook}
              source={{
                uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336',
              }}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>
                Harry Potter and The Prisoner of Azkaban
              </Text>
              <Text style={styles.bookAuthor}>J.K.Rowling</Text>
            </View>
          </View>
          <View style={styles.bookInfoContainer}>
            <Image
              style={styles.imgBook}
              source={{
                uri: 'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336',
              }}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>
                Harry Potter and The Prisoner of Azkaban
              </Text>
              <Text style={styles.bookAuthor}>J.K.Rowling</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topLibraryPage: {
    marginLeft: 10,
    marginTop: 20,
  },
  inputSearch: {
    height: 40,
    backgroundColor: '#F5F5FA',
    width: '95%',
    marginTop: 5,
    borderRadius: 8,
    paddingLeft: 10,
  },
  bookInfoContainer: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },
  imgBook: {
    height: 120,
    width: 80,
    resizeMode: 'stretch',
  },
  bookInfo: {
    justifyContent: 'center',
    height: 120,
    width: '70%',
    paddingLeft: 10,
  },
  bookName: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#4838D1',
  },
  // title: {
  //   fontSize: 18,
  //   color: '#000',
  //   fontWeight: 'bold',
  // },
  // imgContainer: {
  //   alignItems: 'center',
  //   marginTop: 20,
  // },
  // img: {
  //   width: 160,
  //   height: 160,
  //   borderRadius: 20,
  // },
  // imgText: {
  //   paddingTop: 15,
  //   color: '#4838D1',
  //   fontWeight: 'bold',
  // }
});
