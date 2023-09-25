import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { WebView } from "react-native-webview";

export default function ExpoVideo({ uri }) {
  const video = React.useRef(null);
  // const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <WebView
        style={{ backgroundColor: "red", height: 200, width: 320 }}
        javaScriptEnabled={true}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
});
