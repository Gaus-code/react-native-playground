import { View, Text } from 'react-native';
import { BookingScreenWrapper } from '../screens/BookingScreen';
import { ComingSoonScreen } from '../screens/CommingSoonScreen';

export const tabsConfig = (props) => [
    {
      name: 'calendar',
      component: () => <BookingScreenWrapper {...props} />,
      icon: 'event'
    },
    {
      name: 'projects',
      component: () => <ComingSoonScreen featureName="Проекты" iconName="projects" />,
      icon: 'work'
    },
    {
      name: 'add',
      component: View,
      icon: 'add-circle'
    },
    {
      name: 'chat',
      component: () => <ComingSoonScreen featureName="Чат" iconName="chat" />,
      icon: 'chat'
    },
    {
      name: 'profile',
      component: () => <ComingSoonScreen featureName="Профиль" iconName="profile" />,
      icon: 'person'
    }
];