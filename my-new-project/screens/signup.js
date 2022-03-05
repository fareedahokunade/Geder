import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function SignUp() {
  return (
    <View style={styles.SignUp}>
      <View style={styles.Group6104}>
        <View style={styles.Group671}>
          <Text style={styles.Txt217}>SIGN UP</Text>
          <View style={styles.Group239}>
            <Text style={styles.Txt6101}>Email</Text>
            <View style={styles.Group192}>
              <Text style={styles.Txt669}>Enter your email</Text>
            </View>
            <Text style={styles.Txt853}>Password</Text>
            <View style={styles.Group515}>
              <Text style={styles.Txt669}>Enter your password</Text>
            </View>
            <Text style={styles.Txt044}>
              Your password must be 5-8 characters long
            </Text>
          </View>
          <Text style={styles.Txt778}>SIGN UP</Text>
          <Text style={styles.Txt162}>OR</Text>
        </View>
        <View style={styles.Rectangle1} />
        <View style={styles.Group175}>
          <Image
            style={styles.Image1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/Z6w0O39GkUDUyqDr3xkRRW-9%3A3?alt=media&token=6ea45230-368f-4157-8935-a29c20b11a24",
            }}
          />
        </View>
        <Text style={styles.Txt839}>Continue with Google</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SignUp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 14,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 375,
    height: 812,
  },
  Group6104: {
    borderRadius: 15,
    backgroundColor: "rgba(245,239,237,1)",
    width: 347,
    height: 790,
  },
  Group671: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt217: {
    fontSize: 24,
    fontFamily: "undefined",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 137,
    height: 26,
    marginBottom: 71,
  },
  Group239: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 66,
  },
  Txt6101: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  Group192: {
    paddingTop: 13,
    paddingBottom: 17,
    paddingLeft: 22,
    paddingRight: 180,
    marginBottom: 63,
    borderRadius: 22,
    backgroundColor: "rgba(248,248,248,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(5,60,94,0.1)",
    width: 325,
    height: 51,
  },
  Txt669: {
    fontSize: 13,
    fontFamily: "undefined",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0.78,
    color: "rgba(0,0,0,0.7)",
  },

  Txt853: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  Group515: {
    paddingTop: 14,
    paddingBottom: 16,
    paddingLeft: 26,
    paddingRight: 146,
    marginBottom: 8,
    borderRadius: 22,
    backgroundColor: "rgba(248,248,248,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(5,60,94,0.1)",
    width: 325,
    height: 51,
  },
  Txt669: {
    fontSize: 13,
    fontFamily: "undefined",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0.78,
    color: "rgba(0,0,0,0.7)",
  },

  Txt044: {
    fontSize: 13,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(0,0,0,0.7)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt778: {
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
    marginBottom: 25,
  },
  Txt162: {
    fontSize: 18,
    fontFamily: "undefined",
    fontWeight: "700",
    lineHeight: 25,
    letterSpacing: 1.08,
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 113,
    height: 49,
  },

  Rectangle1: {
    backgroundColor: "rgba(5,60,94,1)",
    width: 325,
    height: 62,
    borderRadius: 8,
  },
  Group175: {
    paddingTop: 9,
    paddingBottom: 7,
    paddingLeft: 55,
    paddingRight: 245,
    borderRadius: 12,
    backgroundColor: "rgba(229,229,229,1)",
    width: 325,
    height: 41,
  },
  Image1: {
    width: 23,
    height: 23,
  },

  Txt839: {
    fontSize: 15,
    fontFamily: "undefined",
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0.9,
    color: "rgba(0,0,0,0.7)",
    textAlign: "center",
    justifyContent: "center",
    width: 223,
    height: 74,
  },
})