import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,  TextInput, Button, FlatList, SectionList } from 'react-native';


export default function App() {
  return (
    
      <View style={styles.container}>
    <View style={styles.headDiv} >
      <Text style={styles.headText}>Hello , Devs</Text>
      <Image style={styles.profileImage} source={require('./profile.png')}></Image>
      </View>

      <View>
      <Text>14 tasks today</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.searchBar}/>
      </View>

      <View style={styles.categories}>
      <Text style={styles.headText}>Categories</Text>
      </View>
      
    
    <ScrollView> </ScrollView>
    <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F7F0E8',
    alignItems: '',
    justifyContent: '',
  },
  headDiv: {
    flexDirection: 'row',
  },
  headText: {
    flex: 4,
    fontSize: 18,
    fontWeight: 'Bold',
    color: '#000000',
    alignItems: 'left',
    justifyContent: '',
  },
  categories: {
    marginTop: 50,
    alignItems: '',
    justifyContent: '',
  },
  profileImage: {
    width: 24,
    alignItems: 'right',
    height: 24,
  },
  searchBar: {
    paddingLeft: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
});
