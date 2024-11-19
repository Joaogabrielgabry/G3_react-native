
// import { View } from 'react-native';
// import { Home } from './src/Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/Components/MyTabs';

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}
