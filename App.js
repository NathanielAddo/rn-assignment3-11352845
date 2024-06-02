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
  const sections = [
    {
      title: "Ongoing Tasks",
      data: [
        { id: '1', title: "Mobile App Development" },
        { id: '2', title: "Web Development" },
        { id: '3', title: "Push Ups" },
        { id: '4', title: "Mow The Lawn" },
        { id: '5', title: "Walk The Dogs" },
      ]
    }
  ];
  return (
    
      <View style={styles.container}>
    <View style={styles.headDiv} >
      <Text style={styles.headText}>Hello , Devs</Text>
      <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={require('./profile.png')}></Image>
      </View>
      </View>

      <View>
      <Text style={styles.subtitle}>14 tasks today</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.searchBar}/>
      </View>
       
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.categories}>
      <Text style={styles.categoriesText}>Categories</Text>
      </View>
      
      <FlatList  horizontal={true} width={396}
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
      
      <SectionList 
      sections={sections}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.tasksContainer}>
          <Text style={styles.tasksTitle}>{item.title}</Text>
        </View>
  )}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  )}

  />

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
  profileContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 48,
    width: 48,
    padding: 1,
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
    height: 192,
    width: 186,
    marginRight: 24,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
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
    width: 151,
    alignItems: 'right',
    height: 132,
    left: 20,
    resizeMode: 'contain',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    border: 1,
    borderColor: '#F7F0E8',
  },
  tasksContainer: {
    height: 128,
    width: 354,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#E8D1BA',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: '',
  },
  tasksTitle: {
    fontSize: 16,
    fontWeight: 500,
    marginTop: 45,
    marginLeft: 16,
    alignItems: '',
    justifyContent: '',
  },
});
