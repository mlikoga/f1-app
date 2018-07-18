<template>
  <app-navigation></app-navigation>
</template>
 
<script>
import { StackNavigator } from "vue-native-router";
import LoginScreen from "./src/screens/LoginScreen.vue";
import RankingScreen from "./src/screens/RankingScreen.vue";

const AppNavigation = StackNavigator(
  {
    Login: LoginScreen,
    Ranking: RankingScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default {
  components: {
    AppNavigation
  }
}
</script>

