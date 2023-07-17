import React, { useState, useEffect } from 'react';
import SplashPage from './Splash';
import Signup from './Signup';
import {
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  const colorScheme = useColorScheme();

  const getBackgroundColor = () => {
    return colorScheme === 'dark' ? Colors.dark : Colors.white;
  };

  const getTextColor = () => {
    return colorScheme === 'dark' ? Colors.white : Colors.dark;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      {showSplash ? (
        <View>
          <SplashPage />
        </View>
      ) : (
        <View style={[styles.content, { backgroundColor: getBackgroundColor() }]}>
          <Signup textColor={getTextColor()} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
