<template>
  <app-navigation></app-navigation>
</template>
 
<script>
import { StackNavigator } from "vue-native-router";
import LoginScreen from "./src/screens/LoginScreen";
import RankingScreen from "./src/screens/RankingScreen";

const AppNavigation = StackNavigator(
  {
    Login: { screen: LoginScreen},
    Ranking: { screen: RankingScreen},
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

