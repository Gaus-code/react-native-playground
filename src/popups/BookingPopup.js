import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Menu, Button } from 'react-native-paper';

export default function BookingPopup({ selectedDate, onAddBooking, onClose }) {
  const [room, setRoom] = useState('');
  const [time, setTime] = useState('');
  const [isRoomMenuVisible, setRoomMenuVisible] = useState(false);

  const rooms = ['Комната на 2 человек', 'Комната на 5 человек', 'Комната на 6 человек'];

  const handleSave = () => {
    if (room && time) {
      onAddBooking({ room, date: selectedDate, time });
    } else {
      alert('Заполните все поля!');
    }
  };

  return (
    <View style={styles.popupContainer}>
      <Text style={styles.popupTitle}>Бронирование комнаты</Text>

      <Text style={styles.selectedDate}>Выбранная дата: {selectedDate}</Text>

      <Menu
        visible={isRoomMenuVisible}
        onDismiss={() => setRoomMenuVisible(false)}
        anchor={
          <Button onPress={() => setRoomMenuVisible(true)}>
            {room || 'Выберите комнату'}
          </Button>
        }
        style={styles.menu}
      >
        {rooms.map((roomOption, index) => (
          <Menu.Item
            key={index}
            onPress={() => {
              setRoom(roomOption);
              setRoomMenuVisible(false);
            }}
            title={roomOption}
            titleStyle={styles.menuItemText}
            style={styles.menuItem}
          />
        ))}
      </Menu>

      <TextInput
        label="Время"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />

      <View style={styles.buttonsContainer}>
        <Button mode="contained" onPress={handleSave}>
          Сохранить
        </Button>
        <Button mode="outlined" onPress={onClose}>
          Отмена
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    top: '50%',
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    transform: [{ translateY: -150 }],
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedDate: {
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  menu: {
    width: '80%',
  },
  menuItem: {
    height: 50,
    justifyContent: 'center',
  },
  menuItemText: {
    fontSize: 16,
  },
});