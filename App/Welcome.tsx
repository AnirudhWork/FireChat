import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

interface WelcomeProps {
  textColor: string;
}

const Welcome = ({textColor}: WelcomeProps) => {
  const handlePrivacyPolicyPress = () => {
    // Open the privacy policy URL in the device's default browser
    Linking.openURL('https://www.google.com/');
  };

  const handleTermsOfServicePress = () => {
    // Open the terms of service URL in the device's default browser
    Linking.openURL('https://www.google.com/');
  };

  const handleLongPress = (url: string) => {
    // Copy the URL to the clipboard
    Clipboard.setString(url);
    Alert.alert(url, "url copied")
  };

  const WelcomeImage = require('../images/barcode.jpg');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={WelcomeImage} />
      <Text style={styles.title}>Welcome to WhatsApp</Text>
      <Text style={styles.text}>
        Read our{' '}
        <TouchableOpacity
          activeOpacity={1}
          onPress={handlePrivacyPolicyPress}
          onLongPress={() => handleLongPress('https://www.google.com/')}
          style={styles.linkContainer}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>{' '}
        Tap "Agree and continue" to accept the{' '}
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleTermsOfServicePress}
          onLongPress={() => handleLongPress('https://www.google.com/')}
          style={styles.linkContainer}>
          <Text style={styles.link}>Terms of Service</Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.button}>Agree and Continue!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    maxWidth: 300,
    margin: 25,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkContainer: {
    alignSelf: 'flex-start',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: '#25D366',
    textAlign: 'center',
    borderRadius: 50,
    color: 'black',
  },
});

export default Welcome;
