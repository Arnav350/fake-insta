import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import ThreeDots from "../../assets/threeDots.svg";
import Heart from "../../assets/heart.svg";
import HeartOutline from "../../assets/heartOutline.svg";
import Comment from "../../assets/comment.svg";
import Bookmark from "../../assets/bookmark.svg";
import BookmarkOutline from "../../assets/bookmarkOutline.svg";

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
          <View>
            <Text style={styles.username}>{username}</Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>
        <ThreeDots height={24} width={24} fill="#000" />
      </View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => <Image key={index} source={{ uri: item }} style={styles.image} />}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={windowWidth}
        horizontal
      />
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.iconsContainer}>
            {liked ? (
              <Heart height={24} width={24} fill="#ff3040" />
            ) : (
              <HeartOutline height={24} width={24} fill="#000" />
            )}
            <Comment height={24} width={24} fill="#000" />
            <Image source={require("../../assets/share.png")} style={styles.icon} />
          </View>
          {saved ? (
            <Bookmark height={24} width={24} fill="#000" />
          ) : (
            <BookmarkOutline height={24} width={24} fill="#000" />
          )}
        </View>
        <View style={styles.likedBy}>
          <Image source={{ uri: profilePicture }} style={styles.likedByThree} />
          <Image source={{ uri: profilePicture }} style={styles.likedByTwo} />
          <Image source={{ uri: profilePicture }} style={styles.likedByOne} />
          <Text style={styles.likedByText}>
            Liked by {likedBy.username && <Text style={styles.bold}>{username}</Text>}
            {likedBy.username && " and "}
            <Text style={styles.bold}>{likedBy.amount} others</Text>
          </Text>
        </View>
        <View style={styles.commentsContainer}>
          <Text style={styles.caption}>
            <Text style={styles.bold}>{username}</Text> {caption}
          </Text>
          {comments.length !== 0 && <Text style={styles.view}>View all {comments.length} comments</Text>}
          {comments.length > 0 && (
            <View style={styles.commentContainer}>
              <Text>
                <Text style={styles.bold}>{comments[0].username}</Text> {comments[0].content}
              </Text>
              <HeartOutline height={12} width={12} fill="#737373" />
            </View>
          )}
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profile: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  username: {
    fontWeight: "600",
  },
  location: {
    fontSize: 12,
  },
  icon: {
    height: 24,
    width: 24,
  },
  image: {
    height: windowWidth,
    width: windowWidth,
  },
  bottomContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 10,
  },
  likedBy: {
    flexDirection: "row",
  },
  likedByOne: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#fff",
  },
  likedByTwo: {
    position: "absolute",
    left: 10,
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#fff",
  },
  likedByThree: {
    position: "absolute",
    left: 20,
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#fff",
  },
  likedByText: {
    marginLeft: 22,
  },
  bold: {
    fontWeight: "600",
  },
  commentsContainer: {
    gap: 6,
  },
  caption: {},
  view: {
    color: "#737373",
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#737373",
  },
});

export default Post;
