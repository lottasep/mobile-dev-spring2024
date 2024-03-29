import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Permission to access location was denied. \nPlease go to your device's settings and grant permission."
        );
        Alert.alert("No permission to get location");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <View style={{ flex: 1 }}>
            <MapView
              style={styles.mapstyle}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
              }}
            >
              <Marker
                title='Your Location'
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
              />
            </MapView>
            <View style={styles.bottomView}>
              <Text>This is the bottom view</Text>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.centered}>
          <Text>{errorMsg || "Loading..."}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapstyle: {
    flex: 4,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    padding: 20,
  },
});
