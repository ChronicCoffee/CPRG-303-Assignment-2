import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Animated, ActivityIndicator, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';

export default function LandingPage() {
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(true);
  const scaleLogout = new Animated.Value(1);
  const scaleCalgary = new Animated.Value(1);
  const scaleEdmonton = new Animated.Value(1);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        Alert.alert('Error', 'No user session found');
        router.replace('/login');
        return;
      }

      const { data, error } = await supabase
        .from('user_details')
        .select('first_name, last_name')
        .eq('uuid', user.id)
        .single();

      if (error) {
        Alert.alert('Error fetching user details', error.message);
        return;
      }

      setFullName(`${data.first_name} ${data.last_name}`);
      setLoading(false);
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Logout Failed', error.message);
    } else {
      router.replace('/login');
    }
  };

  const createButtonHandlers = (scaleRef: Animated.Value, onPressAction: () => void) => ({
    onPressIn: () => {
      Animated.spring(scaleRef, {
        toValue: 0.95,
        useNativeDriver: true,
      }).start();
    },
    onPressOut: () => {
      Animated.spring(scaleRef, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start(onPressAction);
    },
  });

  const calgaryButton = createButtonHandlers(scaleCalgary, () => router.push('/(auth)/calgary'));
  const edmontonButton = createButtonHandlers(scaleEdmonton, () => router.push('/(auth)/edmonton'));
  const logoutButton = createButtonHandlers(scaleLogout, handleLogout);

  if (loading) {
    return (
      <LinearGradient colors={['#1B2845', '#537895']} style={styles.container}>
        <ActivityIndicator size="large" color="#121212" />
      </LinearGradient>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#16222A', '#3A6073']} // Match the Login and Welcome page background gradient
        style={styles.innerContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>Welcome, {fullName} 👋</Text>

        {/* Calgary Button */}
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleCalgary }] }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={calgaryButton.onPressIn}
            onPressOut={calgaryButton.onPressOut}
          >
            <LinearGradient
              colors={['#D32F2F', '#B71C1C']} // Keep Calgary button gradient
              style={[styles.button, { borderWidth: 1, borderColor: '#FFFFFF' }]} // Add white border
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.buttonText}>Explore Calgary</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        {/* Edmonton Button */}
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleEdmonton }] }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={edmontonButton.onPressIn}
            onPressOut={edmontonButton.onPressOut}
          >
            <LinearGradient
              colors={['#1976D2', '#0D47A1']} // Keep Edmonton button gradient
              style={[styles.button, { borderWidth: 1, borderColor: '#FFFFFF' }]} // Add white border
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.buttonText}>Discover Edmonton</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        {/* Logout Button */}
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleLogout }] }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={logoutButton.onPressIn}
            onPressOut={logoutButton.onPressOut}
          >
            <LinearGradient
              colors={['#3A6073', '#16222A']} // Match the Login and Welcome page button gradient
              style={[styles.button, { borderWidth: 1, borderColor: '#FFFFFF' }]} // Add white border
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    padding: 30,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 12,
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

