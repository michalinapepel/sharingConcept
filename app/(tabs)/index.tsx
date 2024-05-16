import { StyleSheet } from "react-native";
import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "react-native";

export default function TabOneScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Neucha_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Neucha_400Regular",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
