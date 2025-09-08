import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function TabTwoScreen() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <IconSymbol
        name="paperplane.fill"
        size={100}
        color="#808080"
        style={styles.headerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
