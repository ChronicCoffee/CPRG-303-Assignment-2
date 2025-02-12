import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,  // Re-enable header for tabs
        tabBarStyle: {
          backgroundColor: '#0D0D0D',
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: '#0D0D0D',
        },
        headerTitleStyle: {
          color: '#F5F5F5',
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen 
        name="calgary" 
        options={{
          title: 'Explore Calgary',  // Explicit title override
          tabBarActiveTintColor: '#D32F2F',
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="terrain" 
              color={color} 
              size={size} 
            />
          ),
          headerTitle: 'Explore Calgary',  // Override folder name in header
          headerTitleStyle: {
            color: '#D32F2F',
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerTintColor: '#D32F2F',  // Back arrow color
        }} 
      />
      <Tabs.Screen 
        name="edmonton" 
        options={{
          title: 'Discover Edmonton',
          tabBarActiveTintColor: '#1976D2',
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="city-variant-outline" 
              color={color} 
              size={size} 
            />
          ),
          headerTitle: 'Discover Edmonton',  // Override folder name in header
          headerTitleStyle: {
            color: '#1976D2',
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerTintColor: '#1976D2',  // Back arrow color
        }} 
      />
    </Tabs>
  );
}
