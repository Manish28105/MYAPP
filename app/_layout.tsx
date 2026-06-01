import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/HomeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/ProfileScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/SectionScreen" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal'}} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
