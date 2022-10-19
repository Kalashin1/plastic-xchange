import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { color3, color4, color5, color2, retrieveData } from './helper';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './pages/Login';
import Register from './pages/Register';
import Signin from './pages/Signin';
import OTP from './pages/Otp';
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
    <tabNavigator.Screen 
      name="Dashboard"
      component={UserDashboard}
      options={{ 
        title: '',
        tabBarIcon: ({ color }) => (<Icon name='home' color={color} size={25} />),
        headerStyle: {
          backgroundColor: color5,
        },
        headerTitleStyle: {
          color: 'white'
        },
        tabBarInactiveTintColor: color3,
        tabBarActiveTintColor: color4,
      }}
    />
    <tabNavigator.Screen
      name="Profile"
      component={Profile}
      options={{ 
        title: '',
        tabBarIcon: ({ color }) => (<Icon name='user' color={color} size={25} />),
        headerStyle: {
          backgroundColor: color5,
        },
        headerTitleStyle: {
          color: 'white'
        },
        tabBarInactiveTintColor: color3,
        tabBarActiveTintColor: color4,
      }}
    />
    <tabNavigator.Screen 
      name="Withdraw" 
      component={Withdrawal}
      options={{ 
        title: '',
        tabBarIcon: ({ color }) => (<Icon name='credit-card' color={color} size={25} />),
        headerStyle: {
          backgroundColor: color5,
        },
        headerTitleStyle: {
          color: 'white'
        },
        tabBarInactiveTintColor: color3,
        tabBarActiveTintColor: color4,
      }}

    />
    <tabNavigator.Screen 
      name="UploadPlastic" 
      component={UploadPlastic}
      options={{
        title: '',
        tabBarIcon: ({ color }) => (<Icon name='recycle' color={color} size={25} />),
        headerStyle: {
          backgroundColor: color5,
        },
        headerTitleStyle: {
          color: 'white'
        },
        tabBarInactiveTintColor: color3,
        tabBarActiveTintColor: color4,
      }}
    />
    
  </tabNavigator.Navigator>
)

const AuthScreens = () => {
  let initialRoute;
  React.useEffect(() => {
    const isOpened = async () => {
      const [firstTime, _] = await retrieveData('firstTime')
      if (firstTime && firstTime == 'Y') {
        initialRoute = "Signin"
      } 
    }
  })
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen 
        name="Signin" 
        component={Signin}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      
      <Stack.Screen
       name="Login" 
       component={Login} 
       options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }} 
      />
      
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }} 
      />
      <Stack.Screen 
        name="otp" 
        component={OTP}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  )
}

const EditScreens = () => {
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Update-Address"
        component={UpdateAddress}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      <Stack.Screen
        name="Update-Bank"
        component={UpdateBankInfo}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      <Stack.Screen
        name="Update-Profile"
        component={UpdateProfile}
        options={{
          title: 'Update Your Profile',
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      <Stack.Screen
        name="View-Profile"
        component={ProfileView}
        initialParams={{ 
          id: 200,
        }}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      <Stack.Screen
        name="Plastic-Exchange"
        component={PlasticExchange}
        initialParams={{
          id: 200,
        }}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: color5,
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
    </Stack.Navigator>
)
}

const Stack = createNativeStackNavigator();

const App = () => {
  let [initialRoute, setInitialRoute] = React.useState('Auth-Screen');
  React.useEffect(() => {
    const isOpened = async () => {
      const [userToken, _] = await retrieveData('userToken')
      if (userToken) {
        setInitialRoute("Profile-Screen")
      } else {
        setInitialRoute("Auth-Screen")
      }
    }

    isOpened()
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen 
          name="Auth-Screen" 
          component={AuthScreens}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false
         }}
        />
        <Stack.Screen 
          name='Profile-Screen' 
          component={DashboardScreens}
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
