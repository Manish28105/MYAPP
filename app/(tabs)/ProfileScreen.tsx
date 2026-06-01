import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedUser =
      await AsyncStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        My Profile
      </Text>

      <Text style={styles.label}>
        Username
      </Text>

      <Text style={styles.value}>
        {user?.username}
      </Text>

      <Text style={styles.label}>
        Email
      </Text>

      <Text style={styles.value}>
        {user?.email}
      </Text>

      <Text style={styles.label}>
        Account Type
      </Text>

      <Text style={styles.value}>
        {user?.AccountType}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    color: 'gray',
    marginTop: 15,
  },

  value: {
    fontSize: 20,
    fontWeight: '600',
  },
});