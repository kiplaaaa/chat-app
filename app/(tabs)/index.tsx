import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <View style={styles.titleContainer}>
        <IconSymbol name='0.circle' size={48} color="#808080" />
        <IconSymbol name="arrow.right" size={48} color="#808080" />
        <IconSymbol name="sparkles" size={48} color="#808080" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
