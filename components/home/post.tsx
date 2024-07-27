import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type TProps = {
  post: {
    profilePicture: string;
    username: string;
    location?: string;
    images: string[];
    caption: string;
    liked: boolean;
    saved: boolean;
    likedBy: { username?: string; amount: number };
    comments: { username: string; content: string }[];
    date: string;
  };
};

const windowWidth = Dimensions.get("window").width;

const Post = ({
  post: { profilePicture, username, location, images, caption, liked, saved, likedBy, comments, date },
}: TProps) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: profilePicture }} style={styles.profile} />
          <View style={styles.textContainer}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        <Image source={require("../../assets/threeDots.png")} style={styles.icon} />
      </View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => <Image key={index} source={{ uri: item }} style={styles.image} />}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={windowWidth}
      />
      <View style={styles.rowContainer}>
        <View style={styles.iconsContainer}>
          <Image source={require("../../assets/heartOutline.png")} style={styles.icon} />
          <Image source={require("../../assets/heartOutline.png")} style={styles.icon} />
          <Image source={require("../../assets/heartOutline.png")} style={styles.icon} />
        </View>
        <Image source={require("../../assets/heartOutline.png")} style={styles.icon} />
      </View>
      <View style={styles.likedBy}>
        <Image source={{ uri: profilePicture }} style={styles.likedByOne} />
        <Image source={{ uri: profilePicture }} style={styles.likedByTwo} />
        <Image source={{ uri: profilePicture }} style={styles.likedByThree} />
        <Text style={styles.likedByText}>
          Liked by {likedBy.username && `${username} and`} {likedBy.amount} others
        </Text>
      </View>
      <Text style={styles.caption}>{caption}</Text>
      <View style={styles.commentsContainer}>
        {comments.length > 0 && (
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>
              {comments[0].username} {comments[0].content}
            </Text>
            <Image source={require("../../assets/heartOutline.png")} style={styles.heart} />
          </View>
        )}
      </View>
      <Text style={styles.view}>View all {comments.length} comments</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {},
  profileContainer: {},
  profile: {},
  textContainer: {},
  username: {},
  location: {},
  icon: {},
  image: {},
  rowContainer: {},
  iconsContainer: {},
  likedBy: {},
  likedByOne: {},
  likedByTwo: {},
  likedByThree: {},
  likedByText: {},
  caption: {},
  commentsContainer: {},
  commentContainer: {},
  comment: {},
  heart: {},
  view: {},
  date: {},
});

export default Post;
