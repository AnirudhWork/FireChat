import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const MyComponent = () => {
  const [logo, setLogo] = useState(null);
  const colorScheme = useColorScheme();

  const textColor = () => {
    return colorScheme === 'dark' ? Colors.white : "#25D366";
  };

  useEffect(() => {
    const logoSource =
      colorScheme === 'dark'
        ? require('../images/whatsapp-logo-darkmode.png')
        : require('../images/WhatsApp.svg.webp');

    setLogo(logoSource);
  }, [colorScheme]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {logo && <Image source={logo} style={styles.image} />}
      </View>
      <View style={styles.titleContainer}>
        <Text style={{textAlign: 'center'}}>from</Text>
        <Text style={[styles.title, {color: textColor()}]}>FACEBOOK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 65,
    height: 65,
  },
  titleContainer: {
    position: 'relative',
    bottom: 0,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    bottom: '50%',
  },
});

export default MyComponent;
