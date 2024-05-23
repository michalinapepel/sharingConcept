import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

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
      <Link href="/two" asChild>
        <Pressable>
          {({ pressed }) => (
            <>
              <Button title="Potrzebujesz pomocy?" />
            </>
          )}
        </Pressable>
      </Link>
      <Link href="/three" asChild>
        <Pressable style={styles.press1}>
          {({ pressed }) => (
            <>
              <Text>"Pomóż innym"</Text>
            </>
          )}
        </Pressable>
      </Link>
      <View style={styles.separator} />
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
  press1: {
    backgroundColor: "blue",
  },
});
