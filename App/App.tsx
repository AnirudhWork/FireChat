import React, {useState, useEffect} from 'react';
import SplashPage from './Splash';
import Welcome from './Welcome';
import {SafeAreaView, StyleSheet, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    <SafeAreaView
      style={[styles.container, {backgroundColor: getBackgroundColor()}]}>
      {showSplash ? (
        <View>
          <SplashPage />
        </View>
      ) : (
        <View style={{backgroundColor: getBackgroundColor()}}>
          <Welcome
            textColor={getTextColor()}
            backgroundColor={getBackgroundColor()}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
