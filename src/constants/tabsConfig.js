import { View, Text } from 'react-native';
import { BookingScreenWrapper } from '../screens/BookingScreen';

export const tabsConfig = (props) => [
    {
      name: 'calendar',
      component: () => <BookingScreenWrapper {...props} />,
      icon: 'event'
    },
    {
      name: 'projects',
      component: () => <Text style={{ padding: 20 }}>Проекты - скоро появится</Text>,
      icon: 'work'
    },
    {
      name: 'add',
      component: View,
      icon: 'add-circle'
    },
    {
      name: 'chat',
      component: () => <Text style={{ padding: 20 }}>Чат - скоро появится</Text>,
      icon: 'chat'
    },
    {
      name: 'profile',
      component: () => <Text style={{ padding: 20 }}>Профиль - скоро появится</Text>,
      icon: 'person'
    }
];