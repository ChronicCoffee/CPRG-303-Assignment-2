// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      {/* Remove or adjust the (auth) route if not needed */}
      {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
    </Stack>
  );
}