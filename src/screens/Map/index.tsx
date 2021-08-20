import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';
import { styles } from './styles';
import map from '../../image/map.png';

export function Map() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -6.4019317,
          longitude: -36.4511400,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={map}
          coordinate={{
            latitude: -6.4019317,
            longitude: -36.4511400,
          }}
        >
          <Callout tooltip>
            <View style={styles.callout}>
              <Text style={styles.calloutText}>Ponto de Vacinação</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};
