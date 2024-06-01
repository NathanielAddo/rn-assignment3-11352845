import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,  TextInput, Button, FlatList, SectionList } from 'react-native';


export default function App() {
  const data = [
    {
      id: 1,
      title: "Exercise",
      subtitle: "12 Tasks",
      image: require('./girl-sitting-on-floor.png'),
    },
    {
      id: 2,
      title: "Study",
      subtitle: "12 Tasks",
      image: require('./girl-in-workspace.png'),
    },
  ];
  const tasks = [
    {
      id:1,
      title: "Mobile App Development"
    },
    {
      id: 2,
      title: "Web Development"
    },
    {
      id: 3,
      title: "Push Ups"
    },
    {
      id: 4,
      title: "Mow The Lawn"
    },
    {
      id: 5,
      title: "Walk The Dogs"
    },
  ];
  return (
    
      <View style={styles.container}>
    <View style={styles.headDiv} >
      <Text style={styles.headText}>Hello , Devs</Text>
      <Image style={styles.profileImage} source={require('./profile.png')}></Image>
      </View>

      <View>
      <Text style={styles.subtitle}>14 tasks today</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.searchBar}/>
      </View>
       
      <ScrollView>
      <View style={styles.categories}>
      <Text style={styles.categoriesText}>Categories</Text>
      </View>
      
      <FlatList  horizontal={true} height={225}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={data} 
      renderItem={({item}) => (
        <View style={styles.categoriesContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Image source={item.image} style={styles.image}/>
        </View>
  )}
    
      />
      <View>
        <Text style={styles.categoriesText}>Ongoing Tasks</Text>
      </View>
     </ScrollView>
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
    fontSize: 32,
    fontWeight: 700,
    color: '#000000',
    alignItems: 'left',
    justifyContent: '',
    lineHeight: 38.4,
  },
  profileImage: {
    width: 46,
    alignItems: 'right',
    height: 45,
  },
  searchBar: {
    paddingLeft: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  categories: {
    marginTop: 50,
    alignItems: '',
    justifyContent: '',
  },
  categoriesText: {
    fontSize: 20,
    fontWeight: 700,
    color: '#000000',
    alignItems: 'left',
    justifyContent: '',
  },
  categoriesContainer: {
    height: 225,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    marginLeft: 16,
    alignItems: '',
    justifyContent: '',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 500,
    marginLeft: 16,
    alignItems: '',
    justifyContent: '',
  },
  image: {
    width: 396,
    alignItems: 'right',
    height: 192,
  },
});
