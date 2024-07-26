import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Stories from "../../components/stories";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/logoName.png")} style={styles.name} />
        <View style={styles.iconsContainer}>
          <Image source={require("../../assets/heartOutline.png")} style={styles.icon} />
          <Link href="/messages">
            <Image source={require("../../assets/messages.png")} style={styles.icon} />
          </Link>
        </View>
      </View>
      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
