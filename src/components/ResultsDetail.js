import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.subStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 110,
    height: 110,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  subStyle: {
    alignSelf: "center",
    color: "#7f7f7f",
  },
});

export default ResultsDetail;
