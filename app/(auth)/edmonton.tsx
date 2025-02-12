import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CityLink } from '../../components/cityLink';

export default function EdmontonPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Edmonton</Text>
      <CityLink 
        name="Edmonton" 
        imageSource={require('../../assets/edmonton.jpg')}
        websiteUrl="https://www.edmonton.ca/" 
        primaryColor="#1976D2"  // Blue theme for Edmonton
      />
      <Text style={styles.cityInfo}>
        Edmonton is the capital of Alberta and is known for its extensive park system 
        and the West Edmonton Mall. Discover urban adventures and natural beauty.
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
    color: '#64B5F6',  // Light blue accent for header
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
