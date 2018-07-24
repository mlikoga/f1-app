<template>
  <view>
    <text>{{ username }}</text>
    <tab-nav></tab-nav>
  </view>
</template>

<script>
import { TabNavigator, TabBarBottom } from "vue-native-router";
import RankingScreen from "./RankingScreen";
import CurrentGPScreen from "./CurrentGPScreen";
import store from '../store';
  
const tabNav = TabNavigator(
  {
    Ranking: { screen: RankingScreen },
    CurrentGP: { screen: CurrentGPScreen }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: TabBarBottom,
    swipeEnabled: false,
    tabBarOptions: {
      initialRouteName: 'Ranking',
      style: {
        backgroundColor: 'blue',
      },
    }
  }
);
export default {

  components: {
    tabNav,
  },
  computed: {
    username() {
      return store.state.username;
    }
  }
}
</script>
