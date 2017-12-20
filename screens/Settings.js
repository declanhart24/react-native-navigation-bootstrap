import React, { Component } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

class Settings extends Component {
    constructor(props)
    {
        super(props)
        this.showModal = this.showModal.bind(this)
    }

    render() {
        return (
            <View >
                <Text> hello </Text>
                <Button
                  title='Show modal'
                  onPress={this.showModal}
                 />
            </View>
        );
    }

    showModal() {
      this.props.navigator.showModal({
      screen: "Modal", // unique ID registered with Navigation.registerScreen
      title: "Modal", // title of the screen as appears in the nav bar (optional)
      passProps: {}, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
    }
}


export default Settings;
