import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (

    <View      
      style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image source = {{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2u2RmEazdLCl_mUsLV8mOjYlzAH-VC2ThtGkD7aGIQ&s'}} style= {{width: 200, height: 200}}/>
      
      <Text style={{ marginVertical: 20 }}>
        Hola soy{"\n"}
        Rebeca{"\n"}
        estudio LCC
      </Text>

      <Pressable>
        {({pressed}) => (
          !pressed && <Text>Boton!</Text>
        )}
      </Pressable>


    </View>
  );
}
