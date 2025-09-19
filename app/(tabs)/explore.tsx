import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "@/components/firebase";
import { useNavigation, router } from "expo-router";

export default function HomePage() {
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged((user) => {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() =>
                            signOut(auth)
                                .then(() => router.replace("/(tabs)"))
                                .catch((err) => console.error(err))
                        }
                    >
                        <AntDesign name="logout" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerLeft: () => {
                    if (user?.photoURL) {
                        return (
                            <Image
                                source={{ uri: user.photoURL }}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />
                        );
                    } else if (user?.email) {
                        const letter = user.email.charAt(0).toUpperCase();
                        return (
                            <View
                                style={{
                                    borderRadius: 20,
                                    height: 40,
                                    width: 40,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#eee",
                                }}
                            >
                                <Text>{letter}</Text>
                            </View>
                        );
                    }
                    return null;
                },
            });
        });

        return () => unsubscribe();
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
            <Text>Home Screen</Text>
        </View>
    );
}
