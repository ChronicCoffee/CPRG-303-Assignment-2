import { View, Text, StyleSheet } from 'react-native';
import { CityLink } from '../../components/cityLink';

export default function Page() {
  return (
    <View style={styles.container}>
      <CityLink 
        name="Edmonton" 
        imageSource={require('../../assets/edmonton.jpg')}
        websiteUrl="https://www.edmonton.ca/" 
      />
      <Text style={styles.cityInfo}>
        Edmonton is the capital of Alberta and is known for its extensive park system 
        and the West Edmonton Mall.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  cityInfo: {
    marginTop: 15,
    textAlign: 'center',
    color: '#666',
  },
});