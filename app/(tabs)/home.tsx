import { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Stories from "../../components/home/stories";
import Post from "../../components/home/post";
import HeartOutline from "../../assets/heartOutline.svg";
import Messages from "../../assets/messages.svg";

type TPost = {
  profilePicture: string;
  username: string;
  location?: string;
  images: string[];
  caption: string;
  liked: boolean;
  saved: boolean;
  likedBy: { username?: string; amount: number };
  comments: { username: string; content: string }[];
  date: string;
};

const initPosts: TPost[] = [
  {
    profilePicture: "https://picsum.photos/200",
    username: "arnav.patel35",
    images: ["https://picsum.photos/200"],
    caption: "hello",
    liked: false,
    saved: false,
    likedBy: { amount: 1028 },
    comments: [],
    date: "6 days ago",
  },
  {
    profilePicture: "https://picsum.photos/200",
    username: "arnav.patel35",
    location: "Orlando, Florida, USA",
    images: ["https://picsum.photos/200", "https://picsum.photos/200"],
    caption: "hello",
    liked: true,
    saved: true,
    likedBy: { username: "arnav.patel35", amount: 457 },
    comments: [
      { username: "arnav.patel35", content: "Hello" },
      { username: "arnav.patel35", content: "Hello" },
      { username: "arnav.patel35", content: "Hello" },
    ],
    date: "5 minutes ago",
  },
];

const Home = () => {
  const [posts, setPosts] = useState<TPost[]>(initPosts);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/logoName.png")} style={styles.name} />
        <View style={styles.iconsContainer}>
          <HeartOutline height={24} width={24} fill="#000" />
          <Link href="/messages">
            <Messages height={24} width={24} fill="#000" />
          </Link>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item, index }) => <Post key={index} post={item} />}
        ListHeaderComponent={<Stories />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 6,
    paddingHorizontal: 16,
  },
  name: {
    height: 35,
    width: 130,
    resizeMode: "contain",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default Home;
