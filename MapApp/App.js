import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapstyle}
        region={{
          latitude: 60.2277421,
          longitude: 25.030024135852813,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
      >
        <Marker
          title='Viikin Norssi'
          description='Helsingin yliopiston Viikin normaalikoulu is here'
          coordinate={{
            latitude: 60.2277421,
            longitude: 25.030024135852813,
          }}
        />
      </MapView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapstyle: {
    width: "100%",
    height: "100%",
  },
});
