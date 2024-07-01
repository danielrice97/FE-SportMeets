import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Accounts() {
  return (
    <ThemedView style={styles.pageContainer}>
    <ThemedText  style={styles.titleText} type="title">Accounts</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    height: "100%",
  },
  titleText: {
    color: '#90000',
    bottom: '100%', // Centers the text vertically
    left: '5%',  // Centers the text horizontally
    transform: [{ translateX: 120 }, { translateY:100 }], // Adjusts the position to be exactly in the center
    position: 'absolute'
  },
});
