import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
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
          title: 'Calgary',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarActiveTintColor: '#D32F2F',  // Calgary Red
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="terrain" 
              color={color} 
              size={size} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="edmonton" 
        options={{
          title: 'Edmonton',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarActiveTintColor: '#1976D2',  // Edmonton Blue
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="city-variant-outline" 
              color={color} 
              size={size} 
            />
          ),
        }} 
      />
    </Tabs>
  );
}
