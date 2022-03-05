import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function LogIn() {
  return (
    <View style={styles.LogIn}>
      <View style={styles.Group768}>
        <View style={styles.Group5410}>
          <Text style={styles.Txt412}>LOG IN</Text>
          <View style={styles.Group614}>
            <Text style={styles.Txt882}>Email</Text>
            <View style={styles.Group654}>
              <Text style={styles.Txt266}>Enter your email</Text>
            </View>
            <Text style={styles.Txt427}>Password</Text>
            <View style={styles.Group916}>
              <Text style={styles.Txt266}>Enter your password</Text>
            </View>
          </View>
          <Text style={styles.Txt965}>LOG IN</Text>
        </View>
        <View style={styles.Rectangle1} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  LogIn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 375,
    height: 812,
  },
  Group768: {
    borderRadius: 15,
    backgroundColor: "rgba(197,231,252,1)",
    width: 347,
    height: 790,
  },
  Group5410: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt412: {
    fontSize: 24,
    fontFamily: "undefined",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 137,
    height: 26,
    marginBottom: 165,
  },
  Group614: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 246,
  },
  Txt882: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  Group654: {
    paddingTop: 13,
    paddingBottom: 17,
    paddingLeft: 22,
    paddingRight: 180,
    marginBottom: 63,
    borderRadius: 22,
    backgroundColor: "rgba(248,248,248,1)",
    width: 325,
    height: 51,
  },
  Txt266: {
    fontSize: 13,
    fontFamily: "undefined",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0.78,
    color: "rgba(0,0,0,0.7)",
  },

  Txt427: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  Group916: {
    paddingTop: 14,
    paddingBottom: 16,
    paddingLeft: 26,
    paddingRight: 146,
    borderRadius: 22,
    backgroundColor: "rgba(248,248,248,1)",
    width: 325,
    height: 51,
  },
  Txt266: {
    fontSize: 13,
    fontFamily: "undefined",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0.78,
    color: "rgba(0,0,0,0.7)",
  },

  Txt965: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "700",
    lineHeight: 25,
    letterSpacing: 1.08,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 96,
    height: 63,
  },

  Rectangle1: {
    backgroundColor: "rgba(5,60,94,1)",
    width: 325,
    height: 62,
    borderRadius: 8,
  },
})