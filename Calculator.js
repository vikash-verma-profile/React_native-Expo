import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Calculator extends React.Component {
  state = {
    display: '',
  };
  _handleClick(btnval) {
    let result = this.state.display;
    if(btnval==='0')
    {
      result='';
    }
    if(btnval==='=')
    {
      result=eval(result);
    }
    else if(btnval=='DEL'){
      result='';
    }
    else{
      result+=btnval;
    }
    this.setState({
      display: result,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <View style={styles.row}>
          <MyButton val={7} handleclick={this._handleClick.bind(this)} />
          <MyButton val={8} handleclick={this._handleClick.bind(this)} />
          <MyButton val={9} handleclick={this._handleClick.bind(this)} />
          <MyButton val={'/'} handleclick={this._handleClick.bind(this)} />
        </View>
        <View style={styles.row}>
          <MyButton val={4} handleclick={this._handleClick.bind(this)} />
          <MyButton val={5} handleclick={this._handleClick.bind(this)} />
          <MyButton val={6} handleclick={this._handleClick.bind(this)} />
          <MyButton val={'*'} />
        </View>
        <View style={styles.row}>
          <MyButton val={1} handleclick={this._handleClick.bind(this)} />
          <MyButton val={2} handleclick={this._handleClick.bind(this)} />
          <MyButton val={3} handleclick={this._handleClick.bind(this)} />
          <MyButton val={'-'} handleclick={this._handleClick.bind(this)} />
        </View>
        <View style={styles.row}>
          <MyButton val={'DEL'} handleclick={this._handleClick.bind(this)} />
          <MyButton val={0} handleclick={this._handleClick.bind(this)} />
          <MyButton val={'='} handleclick={this._handleClick.bind(this)} />
          <MyButton val={'+'} handleclick={this._handleClick.bind(this)} />
        </View>
      </View>
    );
  }
}
const MyButton = ({ val, handleclick }) => (
  <TouchableOpacity
    style={styles.btn}
    onPress={() => {
      handleclick(val);
    }}>
    <Text style={styles.btnText}>{val}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#5086f8',
    flex: 1,
    padding: 20,
  },
  display: {
    fontSize: 70,
    padding: 20,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
export default Calculator;
