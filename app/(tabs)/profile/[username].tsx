import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { username } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>Id - {username}</Text>
    </SafeAreaView>
  );
};

export default Profile;
