import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function HeaderX(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <View style={styles.iconRow}>
          <MaterialIconsIcon
            name="dehaze"
            style={styles.icon}
          ></MaterialIconsIcon>
          <FontAwesomeIcon name="th" style={styles.icon2}></FontAwesomeIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31,178,204,1)"
  },
  group: {
    width: 360,
    height: 66,
    backgroundColor: "rgba(31,178,204,1)",
    flexDirection: "row",
    marginTop: 14
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginTop: 9
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 132
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 160,
    marginLeft: 10,
    marginTop: 6
  }
});

export default HeaderX;
