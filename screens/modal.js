import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';

class Modal extends Component {
    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <View style={styles.view}>
                <Text> This is a modal </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column'
  }
})


export default Modal;
