import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Room = () => {
  const { username } = useLocalSearchParams();

  const profile = {
    image: "https://picsum.photos/200",
    name: "Arnav Patel",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image source={require("../../../assets/chevronLeft.png")} style={styles.icon} />
          <Image source={{ uri: profile.image }} style={styles.image} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{profile.name}</Text>
              <Image style={styles.right} />
            </View>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>
        <View style={styles.callsContainer}>
          <Image style={styles.icon} />
          <Image style={styles.icon} />
        </View>
      </View>
      <FlatList data={[]} renderItem={() => <View></View>} />
      <View>
        <View>
          <Image />
          <TextInput />
        </View>
        <View>
          <Image />
          <Image />
          <Image />
          <Image />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    height: 24,
    width: 24,
  },
  image: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  right: {
    height: 12,
    width: 12,
  },
  username: {
    fontSize: 14,
    color: "#777",
  },
  callsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default Room;
