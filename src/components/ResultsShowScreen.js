import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{result.name}</Text>
        <Text
          style={styles.subTitleStyle}
        >{`${result.location.display_address}`}</Text>
      </View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image style={styles.imageStyle} source={{ uri: item }}></Image>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 15,
  },
  imageStyle: {
    height: 200,
    width: 350,
    borderRadius: 20,
  },
  titleStyle: {
    fontSize: 40,
    borderBottomWidth: 0.5,
    marginBottom: 10,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  subTitleStyle: {
    fontSize: 14,
    color: "#7f7f7f",
    textAlign: "center",
  },
});

export default ResultsShowScreen;
