import { StyleSheet, Text, View } from "react-native";

type TProps = {
  item: {
    my: boolean;
    content: string;
  };
};

const Message = ({ item: { my, content } }: TProps) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: my ? "#3797f0" : "#efefef",
        alignSelf: my ? "flex-end" : "flex-start",
      }}
    >
      <Text style={{ ...styles.content, color: my ? "#fff" : "#000" }}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  content: {
    fontSize: 15,
  },
});

export default Message;
