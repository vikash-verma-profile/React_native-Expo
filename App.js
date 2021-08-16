import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Constants} from 'expo';

import Calculator from './src/components/Calculator';

class App extends React.Component
{
  render()
  {
    return(
     <View style={style.container}>
       <Calculator/>
     </View>
    )
  }
}

const style=StyleSheet.create({
container:{
  flex:1,
  //paddingTop:Constants.statusBarHeight,
}

});
export default App;