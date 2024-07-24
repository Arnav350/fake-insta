import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text>Instagram</Text>
        <View style={styles.iconsContainer}>
          <Text>He</Text>
          <Link href="/messages">Me</Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Home;
