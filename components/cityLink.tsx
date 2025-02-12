import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';

interface CityLinkProps {
  name: string;
  imageSource: any;
  websiteUrl: string;
  primaryColor: string;  
}

export const CityLink: React.FC<CityLinkProps> = ({ name, imageSource, websiteUrl, primaryColor }) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start(() => Linking.openURL(websiteUrl));
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
      <Image source={imageSource} style={styles.image} />
      <Text style={[styles.title, { color: primaryColor }]}>{name}</Text>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: primaryColor }]} 
        onPressIn={handlePressIn} 
        onPressOut={handlePressOut}
      >
        <Text style={styles.buttonText}>Explore {name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
    width: '100%',
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
