import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Profile = () => {
  const { username } = useLocalSearchParams();

  return (
    <View>
      <Text>Id - {username}</Text>
    </View>
  );
};

export default Profile;
