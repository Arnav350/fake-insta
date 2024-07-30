import { Link } from "expo-router";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headingContainer}>
          <Link href="/home">
            <Image source={require("../../assets/chevronLeft.png")} style={styles.icon} />
          </Link>
          <Text style={styles.username}>@arnav.patel35</Text>
          <Image source={require("../../assets/chevronDown.png")} style={styles.down} />
        </View>
        <Image source={require("../../assets/create.png")} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require("../../assets/metaSearch.png")} style={styles.icon} />
        <TextInput placeholder="Ask Meta AI or Search" style={styles.input} />
      </View>
      <View style={styles.subheadingsContainer}>
        <Text style={styles.messages}>Messages</Text>
        <Text style={styles.requests}>Requests</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 32,
    width: 32,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  down: {
    height: 12,
    width: 12,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: "#ddd",
    borderRadius: 20,
  },
  input: {
    flex: 1,
  },
  subheadingsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  messages: {
    fontWeight: "600",
  },
  requests: {
    color: "777",
  },
});

export default Messages;
