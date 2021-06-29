import * as React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import db from './db';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      definition: '',
      lexicalCategory: '',
      text: '',
      text1: '',
    };
  }
  render() {
    return (
      <View style={style.a}>
        <SafeAreaProvider>
          <Header
            backgroundColor={'orange'}
            centerComponent={{
              text: 'My Dictionary',
              style: { color: 'black', fontWeight: 'bold' },
            }}
            leftComponent={{ icon: 'menu' }}
            rightComponent={{ icon: 'home' }}
          />
          <Text style={style.e}>Search For a Word!!!</Text>
          <View>
            <TextInput
              placeholder="Enter a Word"
              style={style.b}
              onChangeText={(text) => {
                this.setState({
                  text: text,
                });
              }}
              value={this.state.text}
            />

            <TouchableOpacity
              style={style.c}
              onPress={() => {
                this.setState({
                  definition: db[this.state.text].definition,
                  lexicalCategory: db[this.state.text].lexicalCategory,
                  text1: this.state.text,
                });
                console.log(db[this.state.text].definition);
              }}>
              <Text style={style.d}>Search</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 30, marginLeft: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>Word: {this.state.text1}</Text>
          </View>
          <View style={{ marginTop: 30, marginLeft: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>
              Type: {this.state.lexicalCategory}
            </Text>
          </View>
          <View style={{ marginTop: 30, marginLeft: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>
              Definition: {this.state.definition}
            </Text>
          </View>
        </SafeAreaProvider>
      </View>
    );
  }
}

const style = StyleSheet.create({
  a: {
    backgroundColor: 'rgb(32, 137, 220)',
    flex: 1,
  },

  b: {
    borderWidth: 3,
    backgroundColor: 'white',
    width: 230,
    height: 30,
    marginTop: 50,
    paddingHorizontal: 65,
    marginLeft: 12,
  },
  c: {
    backgroundColor: 'black',
    width: 50,
    marginLeft: 252,
    marginTop: -30,
    height: 30,
  },
  d: {
    color: 'white',
    marginTop: 5,
    marginLeft: 3,
  },
  e: {
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: -35,
    marginHorizontal: 99,
  },
});

// {this.state.lexicalCategory.map((i) => {
//             return(
//             <View
//               style={{
//                 marginTop: 50,
//                 height: 30,
//                 paddingTop: 5,
//                 paddingLeft: 5,
//                 flexDirection: 'row',
//               }}>
//               <Text style={{ fontWeight: 'bold' }}>Type:{i}</Text>
//             </View>
//             )
//           })}

// <View
//             style={{
//               marginTop: 50,
//               height: 30,
//               paddingTop: 5,
//               paddingLeft: 5,
//               flexDirection: 'row',
//             }}>
