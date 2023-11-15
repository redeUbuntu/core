import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../theme';

export default function Home() {
  return (
    <SafeAreaView className='flex-1' style={{ backgroundColor: themeColors.bg }}>
      <View className='flex-1 flex justify-around my-4'>
        <Text className='text-white font-bold text-4xl text-center'>
          Rede Ubuntu
        </Text>
        <View className='flex-row justify-center'>
          <Image source={require('../../assets/images/welcome.png')}
            style={{ width: 350, height: 350 }} />
        </View>
        <View className='space-y-4'>
          <TouchableOpacity className='py-3 bg-orange-400 mx-7 rounded-xl'>
            <Text className='text-xl font-bold text-center text-gray-700'>
              Entrar
            </Text>
          </TouchableOpacity>
          <View className='flex-row justify-center'>
            <Text className='text-white font-semibold'>
              Primeiro acesso?
            </Text>
            <TouchableOpacity>
              <Text className='font-semibold text-orange-400'> Cadastre-se </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   }
// });
