import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chevron from "../../assets/chevron.svg";
import Chat from "../../components/messages/chat";
import Create from "../../assets/create.svg";

type TChat = {
  image: string;
  username: string;
  name: string;
  last: string;
  unread: boolean;
};

const initChats: TChat[] = [
  {
    image: "https://picsum.photos/200",
    username: "arnav.patel35",
    name: "Arnav Patel",
    last: "Active 16h ago",
    unread: true,
  },
  {
    image: "https://picsum.photos/200",
    username: "arnav.patel35",
    name: "Arnav Patel",
    last: "Active 4h ago",
    unread: true,
  },
  {
    image: "https://picsum.photos/200",
    username: "arnav.patel35",
    name: "Arnav Patel",
    last: "Active 20h ago",
    unread: false,
  },
  {
    image: "https://picsum.photos/200",
    username: "arnav.patel35",
    name: "Arnav Patel",
    last: "Active 4h ago",
    unread: false,
  },
  {
    image: "https://picsum.photos/200",
    username: "arnav.patel35",
    name: "Arnav Patel",
    last: "Active 4h ago",
    unread: false,
  },
  {
    image: "https://picsum.photos/200",
    username: "arnav.patel35",
    name: "Arnav Patel",
    last: "Active 4h ago",
    unread: false,
  },
];

const Messages = () => {
  const [chats, setChats] = useState<TChat[]>(initChats);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headingContainer}>
          <Link href="/home" style={styles.backContainer}>
            <Chevron height={24} width={24} fill="#000" style={{ transform: [{ rotate: "-90deg" }] }} />
          </Link>
          <Text style={styles.username}>@arnav.patel35</Text>
          <Chevron height={12} width={12} fill="#737373" style={{ transform: [{ rotate: "180deg" }] }} />
        </View>
        <Create height={24} width={24} fill="#000" />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require("../../assets/metaSearch.png")} style={styles.icon} />
        <TextInput placeholder="Ask Meta AI or Search" style={styles.input} />
      </View>
      <View style={styles.subheadingsContainer}>
        <Text style={styles.messages}>Messages</Text>
        <Text style={styles.requests}>Requests</Text>
      </View>
      <FlatList data={chats} renderItem={({ item, index }) => <Chat key={index} item={item} />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  backContainer: {
    height: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainer: {
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
  },
  messages: {
    fontSize: 16,
    fontWeight: "700",
  },
  requests: {
    color: "#737373",
    fontWeight: "600",
  },
});

export default Messages;
