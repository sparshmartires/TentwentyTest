import React, { useRef, useEffect, useState } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../navigation/app.navigator';
import { goBack } from '../navigation/root.navigator';
import { palette } from '../theme/palette';

type TrailerPlayerProps = NativeStackScreenProps<
  StackParamList,
  'TrailerPlayerScreen'
>;

const TrailerPlayerScreen: React.FC<TrailerPlayerProps> = ({ route }) => {
  const { videoKey } = route.params; // Extract video key from params
  const playerRef = useRef(null); // Reference for the player

  const [dimensions, setDimensions] = useState(Dimensions.get('screen'));

  useEffect(() => {
    // Update dimensions on orientation change
    const subscription = Dimensions.addEventListener('change', ({ screen }) => {
      setDimensions(screen);
    });

    // Cleanup on unmount: Reset orientation and remove listener
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        webViewProps={{
          allowsFullscreenVideo: true,
        }}
        ref={playerRef}
        width={dimensions.width}
        height={dimensions.height}
        play={true}
        videoId={videoKey}
        onChangeState={state => {
          if (state === 'ended') goBack();
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title="Done" onPress={goBack} />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    padding: 4,
  },
});

export default TrailerPlayerScreen;
