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
    display: "flex",
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
});

export default Stories;
