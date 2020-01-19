import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import HeaderX from "../components/HeaderX";

function MainMenu(props) {
  return (
    <View style={styles.root}>
      <HeaderX
        icon2Family="Feather"
        icon2Name="search"
        style={styles.headerX}
      ></HeaderX>
      <View style={styles.body}>
        <View style={styles.tabsStack}>
          <View style={styles.tabs}></View>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.button2}>
              <ImageBackground
                source={require("../assets/images/log.jpg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              >
                <View style={styles.rect8Filler}></View>
                <View style={styles.rect8}>
                  <Text style={styles.text22}>WORK LOG</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <ImageBackground
                source={require("../assets/images/workouts.jpg")}
                resizeMode="cover"
                style={styles.image2}
                imageStyle={styles.image2_imageStyle}
              >
                <View style={styles.rect9Filler}></View>
                <View style={styles.rect9}>
                  <Text style={styles.science}>WORKOUTS</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  body: {
    width: 360,
    flex: 1,
    alignSelf: "center"
  },
  tabs: {
    top: 0,
    left: 0,
    height: 80,
    backgroundColor: "rgba(31,178,204,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 0,
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  categories: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  button2: {
    height: 330,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "#000000",
    borderWidth: 1,
    overflow: "hidden",
    justifyContent: "center"
  },
  image: {
    width: 360,
    height: 330,
    alignSelf: "center"
  },
  image_imageStyle: {},
  rect8Filler: {
    flex: 1
  },
  rect8: {
    height: 61,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text22: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "aclonica-regular",
    lineHeight: 25,
    alignSelf: "center"
  },
  button3: {
    height: 330,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "#000000",
    borderWidth: 1,
    overflow: "hidden"
  },
  image2: {
    flex: 1
  },
  image2_imageStyle: {},
  rect9Filler: {
    flex: 1
  },
  rect9: {
    width: 360,
    height: 61,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "aclonica-regular",
    alignSelf: "center"
  },
  tabsStack: {
    flex: 1
  }
});

export default MainMenu;
