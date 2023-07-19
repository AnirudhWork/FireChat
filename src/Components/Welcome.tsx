import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

interface WelcomeProps {
  textColor: string;
  backgroundColor: string;
}

const Welcome = ({textColor, backgroundColor}: WelcomeProps) => {
  const handlePrivacyPolicyPress = () => {
    // Open the privacy policy URL in the device's default browser
    Linking.openURL(
      'https://www.whatsapp.com/legal/privacy-policy?lg=en&lc=GB&eea=0',
    );
  };

  const handleTermsOfServicePress = () => {
    // Open the terms of service URL in the device's default browser
    Linking.openURL(
      'https://www.whatsapp.com/legal/terms-of-service?lg=en&lc=GB&eea=0',
    );
  };

  const handleLongPress = (url: string) => {
    // Copy the URL to the clipboard
    Clipboard.setString(url);
    ToastAndroid.show('Link copied to clipboard!', ToastAndroid.SHORT);
  };

  const WelcomeImage = require('../images/barcode.jpg');

  return (
    <View style={[styles.container]}>
      <Image style={styles.image} source={WelcomeImage} />
      <Text style={[styles.title, {color: textColor}]}>
        Welcome to WhatsApp
      </Text>
      <View style={styles.policies_container}>
        <View style={styles.policies}>
          <Text style={[styles.text, {color: textColor}]}>Read our </Text>

          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="lightblue"
            onPress={handlePrivacyPolicyPress}
            onLongPress={() =>
              handleLongPress(
                'https://www.whatsapp.com/legal/privacy-policy?lg=en&lc=GB&eea=0',
              )
            }>
            <Text style={[styles.link]}>Privacy Policy</Text>
          </TouchableHighlight>

          <Text style={[styles.text, {color: textColor}]}> Tap "Agree and</Text>
        </View>

        <View style={styles.policies}>
          <Text>continue" to accept the</Text>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="red"
            onPress={handleTermsOfServicePress}
            onLongPress={() =>
              handleLongPress(
                'https://www.whatsapp.com/legal/terms-of-service?lg=en&lc=GB&eea=0',
              )
            }>
            <Text style={styles.link}>Terms of Service</Text>
          </TouchableHighlight>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.button}>Agree and Continue</Text>
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
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  text:{
    maxWidth: 300,
    alignItems: 'center',
  },
  link: {
    color: '#65D0D4',
  },
  policies_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 15,
  },
  policies: {
    flexDirection: 'row',
    margin: 1.5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: '#25D366',
    textAlign: 'center',
    borderRadius: 50,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Welcome;
