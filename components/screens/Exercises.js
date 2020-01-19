import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import HeaderX from "../components/HeaderX";

function Exercises(props) {
  return (
    <View style={styles.root}>
      <HeaderX
        icon2Family="Feather"
        icon2Name="search"
        style={styles.headerX}
      ></HeaderX>
      <View style={styles.body}>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.following}>
            <Text style={styles.text}>Exercises</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categories}>
          <View style={styles.button2Row}>
            <TouchableOpacity style={styles.button2}>
              <ImageBackground
                source={require("../assets/images/ABS.jpg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              >
                <View style={styles.rect8Filler}></View>
                <View style={styles.rect8}>
                  <Text style={styles.text22}>ABS</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button9}>
              <ImageBackground
                source={require("../assets/images/BACK.jpg")}
                resizeMode="cover"
                style={styles.image34}
                imageStyle={styles.image34_imageStyle}
              >
                <View style={styles.rect88Filler}></View>
                <View style={styles.rect88}>
                  <Text style={styles.science2}>BACK</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button8}>
              <ImageBackground
                source={require("../assets/images/BICEPS.jpg")}
                resizeMode="cover"
                style={styles.image33}
                imageStyle={styles.image33_imageStyle}
              >
                <View style={styles.rect87Filler}></View>
                <View style={styles.rect87}>
                  <Text style={styles.science}>BICEPS</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.button10Row}>
            <TouchableOpacity style={styles.button10}>
              <ImageBackground
                source={require("../assets/images/CALF.jpg")}
                resizeMode="cover"
                style={styles.image35}
                imageStyle={styles.image35_imageStyle}
              >
                <View style={styles.rect89Filler}></View>
                <View style={styles.rect89}>
                  <Text style={styles.science3}>CALF</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button11}>
              <ImageBackground
                source={require("../assets/images/CHEST.jpg")}
                resizeMode="cover"
                style={styles.image36}
                imageStyle={styles.image36_imageStyle}
              >
                <View style={styles.rect90Filler}></View>
                <View style={styles.rect90}>
                  <Text style={styles.science4}>CHEST</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button12}>
              <ImageBackground
                source={require("../assets/images/FOREARM.jpg")}
                resizeMode="cover"
                style={styles.image37}
                imageStyle={styles.image37_imageStyle}
              >
                <View style={styles.rect91Filler}></View>
                <View style={styles.rect91}>
                  <Text style={styles.science5}>FOREARMS</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.button13Row}>
            <TouchableOpacity style={styles.button13}>
              <ImageBackground
                source={require("../assets/images/LEGS.jpg")}
                resizeMode="cover"
                style={styles.image38}
                imageStyle={styles.image38_imageStyle}
              >
                <View style={styles.rect92Filler}></View>
                <View style={styles.rect92}>
                  <Text style={styles.science6}>LEGS</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button15}>
              <ImageBackground
                source={require("../assets/images/SHOULDERS.jpg")}
                resizeMode="cover"
                style={styles.image40}
                imageStyle={styles.image40_imageStyle}
              >
                <View style={styles.rect94Filler}></View>
                <View style={styles.rect94}>
                  <Text style={styles.science8}>SHOULDERS</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button14}>
              <ImageBackground
                source={require("../assets/images/TRICEPS.jpg")}
                resizeMode="cover"
                style={styles.image39}
                imageStyle={styles.image39_imageStyle}
              >
                <View style={styles.rect93Filler}></View>
                <View style={styles.rect93}>
                  <Text style={styles.science7}>TRICEPS</Text>
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
    flex: 1
  },
  tabs: {
    height: 80,
    backgroundColor: "rgba(31,178,204,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  following: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  text: {
    color: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: 20
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  button2: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  rect8Filler: {
    flex: 1
  },
  rect8: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text22: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button9: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    marginLeft: 21
  },
  image34: {
    height: 99
  },
  image34_imageStyle: {},
  rect88Filler: {
    flex: 1
  },
  rect88: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science2: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button8: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 21
  },
  image33: {
    flex: 1
  },
  image33_imageStyle: {},
  rect87Filler: {
    flex: 1
  },
  rect87: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button2Row: {
    height: 99,
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 15,
    marginRight: 15
  },
  button10: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image35: {
    flex: 1
  },
  image35_imageStyle: {},
  rect89Filler: {
    flex: 1
  },
  rect89: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science3: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button11: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 21
  },
  image36: {
    flex: 1
  },
  image36_imageStyle: {},
  rect90Filler: {
    flex: 1
  },
  rect90: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science4: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button12: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 21
  },
  image37: {
    flex: 1
  },
  image37_imageStyle: {},
  rect91Filler: {
    flex: 1
  },
  rect91: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science5: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button10Row: {
    height: 99,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 15,
    marginRight: 15
  },
  button13: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image38: {
    flex: 1
  },
  image38_imageStyle: {},
  rect92Filler: {
    flex: 1
  },
  rect92: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science6: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button15: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 21
  },
  image40: {
    flex: 1
  },
  image40_imageStyle: {},
  rect94Filler: {
    flex: 1
  },
  rect94: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science8: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button14: {
    width: 96,
    height: 99,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 21
  },
  image39: {
    flex: 1
  },
  image39_imageStyle: {},
  rect93Filler: {
    flex: 1
  },
  rect93: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  science7: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button13Row: {
    height: 99,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 15,
    marginRight: 15
  }
});

export default Exercises;
