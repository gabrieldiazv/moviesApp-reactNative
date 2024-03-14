import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { Navitagion } from './presentation/navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navitagion/>
    </NavigationContainer>
  );
};
