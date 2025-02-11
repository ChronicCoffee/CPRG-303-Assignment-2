import React from 'react';
import { TouchableOpacity, Text, Image, Linking, StyleSheet, View } from 'react-native';

type CityLinkProps = {
  name: string;
  imageSource: any;
  websiteUrl: string;
};

export const CityLink: React.FC<CityLinkProps> = ({ name, imageSource, websiteUrl }) => {
  const openWebsite = () => {
    Linking.openURL(websiteUrl);
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <TouchableOpacity onPress={openWebsite} style={styles.linkContainer}>
        <Text style={styles.linkText}>Go to {name} City Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  linkContainer: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    color: 'white',
    textAlign: 'center',
  },
});