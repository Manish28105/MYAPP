import React from 'react';
// import navigation from "./(tabs)/navigators";
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';



export default function HomeScreen() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [menuInvisible, setMenuInvisible] = useState(true);

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

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        My App
                    </Text>

                    <TouchableOpacity
                        onPress={() => setMenuVisible(prev => !prev)}
                        // onPress={() => setMenuVisible(false)}
                    >
                        <Text style={styles.headerTitle}>
                            ⋮
                        </Text>
                        {/* //modal for menu */}
                        <Modal
                            visible={menuVisible}
                            transparent
                            animationType="fade"
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-end',
                                    marginTop: 80,
                                    marginRight: 20,
                                }}
                                onPress={() => setMenuVisible(false)}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        padding: 10,
                                        width: 180,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => router.push('/SettingsScreen')} 
                                        >
                                        <Text
                                            style={{
                                                padding: 10,
                                            }}
                                        >
                                            Settings
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => router.push('/ProfileScreen')}
                                    >
                                        <Text
                                            style={{
                                                padding: 10,
                                            }}
                                        >
                                            Profile
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => router.push('/LoginScreen')}
                                    >
                                        <Text
                                            style={{
                                                padding: 10,
                                                color: 'red',
                                            }}
                                        >
                                            Logout
                                        </Text>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity
                        onPress={() => router.push('/LoginScreen')}
                    >
                        <Text style={styles.logoutText}>
                            Logout
                        </Text>
                    </TouchableOpacity> */}
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </TouchableOpacity>
                </View>

                {/* Welcome Section */}
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeTitle}>
                        Welcome {user?.username}
                    </Text>

                    <Text style={styles.welcomeSubtitle}>
                        Dashboard or subtitle goes here.
                    </Text>
                </View>

                {/* Dashboard Cards */}
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Section 1 (header section)
                    </Text>

                    <Text style={styles.cardText}>
                        brief intro of user or profession
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Section 2 (like a name or name of company or profession)
                    </Text>

                    <Text style={styles.cardText}>
                        Subtitle of that thing or something like that.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Section 3 (detail of user)
                    </Text>

                    <Text style={styles.cardText}>
                        detail of user.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Section 4 (footer section)
                    </Text>

                    <Text style={styles.cardText}>
                        here goes the footers info.
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    header: {
        backgroundColor: '#2563eb',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        // padding: 10,
        margin: 5
    },

    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    welcomeSection: {
        padding: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',

    },

    welcomeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },

    welcomeSubtitle: {
        marginTop: 5,
        color: '#666',
        fontSize: 16,
    },

    card: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginBottom: 15,
        padding: 20,
        borderRadius: 12,

        elevation: 3,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    cardText: {
        color: '#666',
        fontSize: 15,
    },
});

