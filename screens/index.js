import { Navigation } from 'react-native-navigation';

import Profile from './Profile';
import Settings from './Settings';
import Modal from './modal'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Profile', () => Profile);
  Navigation.registerComponent('Settings', () => Settings);
  Navigation.registerComponent('Modal', () => Modal);
}
