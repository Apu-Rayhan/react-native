import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View , ImageBackground, ImageBackgroundComponent } from 'react-native';
import LiginTextInput from './component/Login';

export default function App() {
  return (
    <View style={styles.container} source={{uri:'https://narayanganjclubltd.com/images/new/NCL.jpg'} }>
    <ImageBackground   style={styles.image}>
    
    <LiginTextInput/>
    <Text>Open first react native appp</Text>
    <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
    <StatusBar style="auto" />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: `#b0c4de`,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  image:{
  
    justifyContent:'center',
    width:350,
    height:600,
    // opacity:0.2,
    
    
  },
  
});
