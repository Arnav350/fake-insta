import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Story from "./story";

type TStory = {
  name: string;
  image: string;
};

const initStories: TStory[] = [
  {
    name: "arnav.patel",
    image: "https://picsum.photos/200",
  },
  {
    name: "arnav.patel",
    image: "https://picsum.photos/200",
  },
  {
    name: "arnav.patel",
    image: "https://picsum.photos/200",
  },
  {
    name: "arnav.patel",
    image: "https://picsum.photos/200",
  },
];

const Stories = () => {
  const [stories, setStories] = useState<TStory[]>(initStories);

  return (
    <FlatList
      data={stories}
      renderItem={({ item, index }) => <Story key={index} item={item} />}
      ListHeaderComponent={
        <View style={styles.yourContainer}>
          <Image source={{ uri: "https://picsum.photos/200" }} style={styles.image} />
          <View style={styles.plusContainer}>
            <Image source={require("../../assets/plus.png")} style={styles.plus} />
          </View>
          <Text style={styles.name}>Your story</Text>
        </View>
      }
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  yourContainer: {
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    paddingRight: 6,
    paddingLeft: 14,
  },
  image: {
    height: 78,
    width: 78,
    borderRadius: 40,
  },
  name: {
    fontSize: 12,
    color: "#777",
  },
  plusContainer: {
    position: "absolute",
    top: 54,
    right: 2,
    padding: 5,
    backgroundColor: "#0095f6",
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "#fff",
  },
  plus: {
    height: 10,
    width: 10,
  },
});

export default Stories;
