<template>
  <app-navigation></app-navigation>
</template>
 
<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { StackNavigator } from "vue-native-router";
import LoginScreen from "./src/screens/LoginScreen";
import MainTabsScreen from "./src/screens/MainTabsScreen";
import ApostaScreen from "./src/screens/ApostaScreen";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

const AppNavigation = StackNavigator(
  {
    Login: LoginScreen,
    Main:  MainTabsScreen,
    Aposta: ApostaScreen,
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

