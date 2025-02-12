// app/(auth)/calgary.tsx
import { View, Text, StyleSheet } from 'react-native';
import { CityLink } from '../../components/cityLink';

export default function Page() {
  return (
    <View style={styles.container}>
      <CityLink 
        name="Calgary" 
        imageSource={require('../../assets/calgary.jpg')}
        websiteUrl="https://www.calgary.ca/home.html" 
      />
      <Text style={styles.cityInfo}>
        Calgary is the largest city in Alberta, known for its proximity to the Rocky Mountains 
        and its annual Calgary Stampede festival.
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