import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="messages" options={{ href: null, headerShown: false }} />
      <Tabs.Screen name="room/[username]" options={{ href: null, headerShown: false }} />
      <Tabs.Screen name="explore" options={{ title: "Explore", headerShown: false }} />
      <Tabs.Screen name="create" options={{ title: "Create", headerShown: false }} />
      <Tabs.Screen name="reels" options={{ title: "Reels", headerShown: false }} />
      <Tabs.Screen name="profile/[username]" options={{ title: "Profile", href: "profile/0", headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
