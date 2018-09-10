import { createStackNavigator } from 'react-navigation'
import LibraryScreen from './Library'
import SongScreen from './Song'

export default createStackNavigator(
  {
    LibraryScreen,
    SongScreen,
  },
  {
    mode: 'modal',
  }
)
