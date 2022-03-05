import React from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"

const image = { uri: "https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBibGFjayUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" };
export default function Frame1() {
  return (
    
    
    <View style={styles.Frame1}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.HeroPage}>
        <View style={styles.Group898}>
          <Text style={styles.Txt409}>geder</Text>
          <Text style={styles.Txt522}>/geth.er/</Text>
          <View style={styles.Group924}>
            <Text style={styles.Txt596}>GET STARTED</Text>
          </View>
          <Text style={styles.Txt845}>Already have an account?</Text>
          <Text style={styles.Txt991}>LOG IN</Text>
        </View>
      </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  Frame1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/Z6w0O39GkUDUyqDr3xkRRW-8%3A2?alt=media&token=34356c0c-c889-4528-8ec5-1ceaf6b7461c) */
    width: 375,
    height: 812,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  HeroPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  Group898: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt409: {
    fontSize: 96,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(229,97,56,1)",
  },
  Group924: {
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 12,
    marginTop: 100,
    borderRadius: 5,
    backgroundColor: "rgba(196,196,196,0)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
    width: 240,
    height: 51,
  },
  Txt596: {
    fontSize: 30,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },

  Txt845: {
    fontSize: 20,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(245,239,237,1)",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  Txt991: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(197,231,252,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt522: {
    fontSize: 18,
    color: "rgba(229,97,56,1)",
    alignItems: 'center',
  },
})