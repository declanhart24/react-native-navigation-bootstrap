
import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native'

class MyProfile extends Component {

    state = { loading: false, profile: {"firstName":"John","lastName":"Smith","email":"johnsmith@gmail.com","Known":"Johny"} }

    render() {
        return (
          <View>
              <Text> *** Loaded Profile *** </Text>
              <Text>FirstName: {this.state.profile.firstName} </Text>
              <Text>LastName: {this.state.profile.lastName} </Text>
              <Text>KnownAs: {this.state.profile.knownAs}  </Text>
              <Text>Email: {this.state.profile.email}  </Text>
          </View>
        )
    }
}


export default MyProfile
