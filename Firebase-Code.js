import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

import fire from './src/components/LiveDoc';

var database=fire.database();

class App extends React.Component {
  state={
    text:'',
  }
  _sendChanges(newText)
  {
    this.setState({text:newText});
    database.ref('text').set(newText);
  }
  render() {
    return (
      <View style={styles.container}>
       <TextInput  style={styles.text} multiline={true}
       placeholder={'Type Here'}
       value={this.state.text}
       onChangeText={newText=>this._sendChanges(newText)}
       />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex:1,
    fontSize: 20,
    padding:20,
    textAlignVertical:'top'
  },
});
export default App;
