import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CityLink } from '../../components/cityLink';

export default function CalgaryPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Calgary</Text>
      <CityLink 
        name="Calgary" 
        imageSource={require('../../assets/calgary.jpg')}
        websiteUrl="https://www.calgary.ca/home.html" 
        primaryColor="#D32F2F"  // Red theme for Calgary
      />
      <Text style={styles.cityInfo}>
        Calgary is the largest city in Alberta, known for its proximity to the Rocky Mountains 
        and its annual Calgary Stampede festival. Explore the vibrant culture and beautiful landscapes.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',  // Dark mode background
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF5252',  // Bright red accent for header
    marginBottom: 20,
  },
  cityInfo: {
    marginTop: 20,
    textAlign: 'center',
    color: '#F5F5F5',  // Soft white text for readability
    fontSize: 18,
    lineHeight: 26,
    paddingHorizontal: 10,
  },
});
