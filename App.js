import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/Forgot-Password';

import LoginAgent from './pages/Login-Agent';
import RegisterAgent from './pages/Register-Agent';

import Splash from './pages/Splash';

import UserDashboard from './pages/User-Dashboard';
import Profile from './pages/Profile';
import ProfileView from './pages/Profile_View';
import Withdrawal from './pages/Withdraw';

import UpdateProfile from './pages/Update-Profile';
import UpdateAddress from './pages/Update-Address';
import UpdateBankInfo from './pages/Update-BankInfo';

import UploadPlastic from './pages/UploadPlastic';
import PlasticExchange from './pages/Exchange';


const tabNavigator = createBottomTabNavigator()

const DashboardScreens = () => (
  <tabNavigator.Navigator>
    <tabNavigator.Screen name="Dashboard" component={UserDashboard} />
    <tabNavigator.Screen name="Profile" component={Profile} />
    <tabNavigator.Screen name="Withdraw" component={Withdrawal} />
    <tabNavigator.Screen name="UploadPlastic" component={UploadPlastic} />
    
  </tabNavigator.Navigator>
)

const AuthScreens = () => {
  let initialRoute;
  React.useEffect(() => {
    const isOpened = async () => {
      const [firstTime, _] = await retrieveData('firstTime')
      if (firstTime && firstTime == 'Y') {
        initialRoute = "Login"
      } 
    }
  })
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="Login"component={Login} options={{title: 'Login'}} />
      <Stack.Screen name="Agent-Login" component={LoginAgent} />
      <Stack.Screen name="Register" component={Register} options={{title: 'Register'}} />
      <Stack.Screen name="Agent-Register" component={RegisterAgent} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{title: 'Forgot Password'}}
      />
    </Stack.Navigator>
  )
}

const EditScreens = () => {
 
  return (
    <Stack.Navigator>
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
        name="View-Profile"
        component={ProfileView}
        initialParams={{ id: 200 }}
      />
      <Stack.Screen
        name="Plastic-Exchange"
        component={PlasticExchange}
        initialParams={{ id: 200 }}
      />
    </Stack.Navigator>
)
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="auth">
        <Stack.Screen 
          name='Profile-Screen' 
          component={DashboardScreens}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false
         }}
        />
        <Stack.Screen 
          name="Auth-Screen" 
          component={AuthScreens}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false
         }}
        />
        <Stack.Screen 
          name='Edit-Screen' 
          component={EditScreens}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
