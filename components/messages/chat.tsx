import { Image, StyleSheet, Text, View } from "react-native";

type TProps = {
  item: {
    image: string;
    name: string;
    last: string;
  };
};

const Chat = ({ item: { image, name, last } }: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.last}>{last}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.unread}></View>
        <Image source={require("../../assets/camera.png")} style={styles.camera} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  name: {
    fontSize: 14,
  },
  last: {
    color: "#777",
    fontSize: 14,
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  unread: {
    height: 8,
    width: 8,
    backgroundColor: "#0095f6",
    borderRadius: 4,
  },
  camera: {
    height: 24,
    width: 24,
  },
});

export default Chat;
