import { View, Text } from 'react-native'
import React from 'react'

interface SignupProps {
  textColor: string;
}

const Signup = ({ textColor }: SignupProps) => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: textColor}}>Singup</Text>
    </View>
  )
}

export default Signup;