import { View, Text } from 'react-native';
import { BookingScreenWrapper } from '../screens/BookingScreen';
import { Icon } from '../utils/Icon';

export const tabsConfig = (props) => [
    {
      name: 'calendar',
      component: () => <BookingScreenWrapper {...props} />,
      icon: 'event'
    },
    {
      name: 'projects',
      component: () =>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
        <Text style={{ padding: 20, alignSelf: 'center' }}>Проекты - скоро появятся</Text>
        <Icon name={'projects'} size={140} color={'grey'} />
      </View>,
      icon: 'work'
    },
    {
      name: 'add',
      component: View,
      icon: 'add-circle'
    },
    {
      name: 'chat',
      component: () =>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
        <Text style={{ padding: 20, alignSelf: 'center' }}>Чаты - скоро появятся</Text>
        <Icon name={'chat'} size={140} color={'grey'} />
      </View>,
      icon: 'chat'
    },
    {
      name: 'profile',
      component: () =>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
        <Text style={{ padding: 20, alignSelf: 'center' }}>Профиль - скоро появится</Text>
        <Icon name={'profile'} size={140} color={'grey'} />
      </View>,
      icon: 'person'
    }
];