import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View>
        <Link href={"/"} style={styles.button}>
          Go to Home
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 150,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 20,
    marginLeft: 20,
    textDecorationLine: "underline",
  },
});
