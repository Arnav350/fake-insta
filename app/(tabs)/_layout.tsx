import { Tabs } from "expo-router";
import HouseOutline from "../../assets/houseOutline.svg";
import House from "../../assets/house.svg";
import SearchOutline from "../../assets/searchOutline.svg";
import Search from "../../assets/search.svg";
import NewOutline from "../../assets/newOutline.svg";
import New from "../../assets/new.svg";
import ReelsOutline from "../../assets/reelsOutline.svg";
import Reels from "../../assets/reels.svg";
import ProfileOutline from "../../assets/profileOutline.svg";
import Profile from "../../assets/profileOutline.svg";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (focused ? <House fill="#000" /> : <HouseOutline fill="#000" />),
        }}
      />
      <Tabs.Screen name="messages" options={{ href: null }} />
      <Tabs.Screen name="room/[username]" options={{ href: null }} />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (focused ? <Search fill="#000" /> : <SearchOutline fill="#000" />),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "New",
          tabBarIcon: ({ focused }) => (focused ? <New fill="#000" /> : <NewOutline fill="#000" />),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          tabBarIcon: ({ focused }) => (focused ? <Reels fill="#000" /> : <ReelsOutline fill="#000" />),
        }}
      />
      <Tabs.Screen
        name="profile/[username]"
        options={{
          title: "Profile",
          href: "profile/0",
          tabBarIcon: ({ focused }) => (focused ? <Profile fill="#000" /> : <ProfileOutline fill="#000" />),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
