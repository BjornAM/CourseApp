import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { WebView } from "react-native-webview";

// const ExpoVideo = ({ route }) => {
//   const { course } = route.params;}

export default function ExpoVideo({ uri }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <WebView
        style={{ backgroundColor: "red", height: 200, width: 320 }}
        javaScriptEnabled={true}
        source={{
          uri: uri,
        }}
      />
      {/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          // {course.video}?
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (status.isPlaying) {
              video.current.pauseAsync();
              console.log("Videon pausades av användaren");
            } else {
              video.current.playAsync();
              console.log("Videon startades av användaren");
            }
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  video: {},
  buttons: {
    flex: 1,
  },
});
