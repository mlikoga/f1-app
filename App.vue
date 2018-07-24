<template>
  <app-navigation></app-navigation>
</template>
 
<script>
import { StackNavigator } from "vue-native-router";
import LoginScreen from "./src/screens/LoginScreen";
import MainTabsScreen from "./src/screens/MainTabsScreen";

const AppNavigation = StackNavigator(
  {
    Login: LoginScreen,
    Main:  MainTabsScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'Bolão F1',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }
  }
);

export default {
  components: {
    AppNavigation
  }
}
</script>

