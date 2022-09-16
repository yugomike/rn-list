import React from 'react';
import { SafeAreaView } from 'react-native';
import SignIn from './src/screens/auth/SignIn';
import Signup from './src/screens/auth/Signup';

import Splash from './src/screens/auth/Splash';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <SignIn />
    </SafeAreaView>
  );
};

export default App;


// adb reverse tcp:8081 tcp:8081