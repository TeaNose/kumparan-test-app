import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Color from '../utils/Color';

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: Color.EASTERN_BLUE,
    flexDirection: 'row',
  },
  headerFont: {
    fontSize: 18,
    color: Color.WHITE,
  },
});

export default class StackHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={{alignItems: 'center', justifyContent: 'center', paddingLeft:10, paddingRight: 10}}>
          <TouchableOpacity onPress={() => this.props.onPressLeft()}>
            <Icon name='arrow-circle-left' style={{fontSize: 30, color: Color.WHITE}}/>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', width: Dimensions.get('window').width - 70}}>
          <Text style={styles.headerFont}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
