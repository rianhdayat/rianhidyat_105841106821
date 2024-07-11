// Rest of the import statements
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';


export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });
  if (!dapatFont) {
    return <Text>Font Tidak Ditemukan..</Text>
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'MetroBlack', fontSize: 24 }}>Font Metropolis Black</Text>
      <Text style={{ fontFamily: 'MetroBold', fontSize: 24 }}>Font Metropolis Bold</Text>
      <Text style={{ fontFamily: 'MetroLight', fontSize: 24 }}>Font Metropolis Light</Text>
      <Text style={{ fontFamily: 'MetroMedium', fontSize: 24 }}>Font Metropolis Medium</Text>
      <Text style={{ fontFamily: 'MetroSemibold', fontSize: 24 }}>Font Metropolis SemiBold</Text>
      <Text>Font Biasa</Text>
    </View>
  )
}
