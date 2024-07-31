import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type TProps = {
  item: {
    name: string;
    image: string;
  };
};

const Story = ({ item: { name, image } }: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 6,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    width: 90,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: "#ddd",
  },
  image: {
    height: 78,
    width: 78,
    borderRadius: 40,
  },
  name: {
    fontSize: 12,
  },
});

export default Story;
