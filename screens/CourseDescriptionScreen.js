import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

const CourseDescriptionScreen =
  () =>
  ({ route }) => {
    const { tags } = route.params;

    return (
      <View>
        <FlatList
          style={styles.tagsList}
          data={tags}
          renderItem={renderTagItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

const styles = StyleSheet.create({});

export default CourseDescriptionScreen;
