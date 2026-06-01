// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { Collapsible } from '@/components/ui/collapsible';
// import { ExternalLink } from '@/components/external-link';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Fonts } from '@/constants/theme';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText
//           type="title"
//           style={{
//             fontFamily: Fonts.rounded,
//           }}>
//           Explore
//         </ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image
//           source={require('@/assets/images/react-logo.png')}
//           style={{ width: 100, height: 100, alignSelf: 'center' }}
//         />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful{' '}
//           <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
//             react-native-reanimated
//           </ThemedText>{' '}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });



import React, { useState } from 'react';
// import navigation from "./(tabs)/navigation";
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    // Check if all fields are filled
    if (
      !username || !email || !password || !confirmPassword) {
      Alert.alert(
        'Error',
        'Please fill all fields'
      );
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      Alert.alert(
        'Error',
        'Passwords do not match'
      );
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    await AsyncStorage.setItem(
      'user',
      JSON.stringify(userData)
    );
    Alert.alert(
      'Success',
      'Account Created Successfully!'
    );
    router.push('/LoginScreen');

    // console.log({
    //   username,
    //   email,
    //   password,
    // });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Create Account
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/LoginScreen')}
      >
        <Text style={styles.footerText}>
          Already have an account? Login
        </Text>

        {/* <Text style={styles.footerText}>
    Already have an account?<button
    title="go to Homescreen"
    onPress={() => navigation.navigate('/index')}
    /> Login
  </Text> */}
      </TouchableOpacity>
      {/* <Text style={styles.footerText}>
        Already have an account? Login
      </Text> */}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  a: {
    textDecorationLine: 'none',
    color: "#fff"
  }
});

