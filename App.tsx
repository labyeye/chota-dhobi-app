import React from "react";
import LoginScreen from "./src/Pages/LoginScreen/loginscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreem from "./src/Pages/RegisterScreen";
import Dashboard from "./src/Pages/Dashboard";
import Give from "./src/Pages/Give";
import Take from "./src/Pages/Take";
import ResetPassword from "./src/Pages/ResetPassword";
import ConfirmCode from "./src/Pages/ResetPassword/confirmcode";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreem} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Give" component={Give} />
        <Stack.Screen name="Take" component={Take} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;