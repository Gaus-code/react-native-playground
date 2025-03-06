import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function HomeScreen() {
  const bottomSheetRef = useRef(null);

  const snapPoints = ['50%', '90%'];

  return (
    <View style={styles.container}>
      <Button
        title="Открыть Bottom Sheet"
        onPress={() => bottomSheetRef.current?.expand()}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <View style={styles.contentContainer}>
          <Text>Это Bottom Sheet!</Text>
          <Text>Она открыта на 50% высоты экрана.</Text>
          <Button
            title="Закрыть"
            onPress={() => bottomSheetRef.current?.close()}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});