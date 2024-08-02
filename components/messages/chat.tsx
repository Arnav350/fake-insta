import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

type TProps = {
  item: {
    image: string;
    username: string;
    name: string;
    last: string;
    unread: boolean;
  };
};

const Chat = ({ item: { image, username, name, last, unread } }: TProps) => {
  return (
    <Link href={`room/${username}`} style={styles.link}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.last}>{last}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          {unread && <View style={styles.unread} />}
          <Image source={require("../../assets/camera.png")} style={styles.camera} />
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  leftContainer: {
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
    color: "#737373",
    fontSize: 14,
  },
  rightContainer: {
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
