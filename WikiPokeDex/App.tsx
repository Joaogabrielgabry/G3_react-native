
import { View } from 'react-native';
import { Home } from './src/Pages/Home';

export default function App() {
  return (
    <View style={{width:'100%', height:'100%', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:0, padding:0}}>
      <Home />
    </View>
  );
}
