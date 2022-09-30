import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Splash from './pages/Splash';
import ForgotPassword from './pages/Forgot-Password';
import UserDashboard from './pages/User-Dashboard';
import UpdateProfile from './pages/Update-Profile';
import UpdateAddress from './pages/Update-Address';
import UpdateBankInfo from './pages/Update-BankInfo';
import UploadPlastic from './pages/UploadPlastic';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: 'Forgot Password'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={UserDashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="Update-Address"
          component={UpdateAddress}
          options={{title: 'Update Your Address'}}
        />
        <Stack.Screen
          name="Update-Bank"
          component={UpdateBankInfo}
          options={{title: 'Update Bank info'}}
        />
        <Stack.Screen
          name="Update-Profile"
          component={UpdateProfile}
          options={{title: 'Update Your Profile'}}
        />
        <Stack.Screen
          name="Upload-Plastic"
          component={UploadPlastic}
          options={{title: 'Upload Plastic'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
