<template>
  <view class="container">
    <text class="text-color-primary">Bolão F1</text>
    <view>
      <text>Username:</text>
      <text-input class="text-input" v-model="username"></text-input>
    </view>
    <button title="START" :on-press="login" />
  </view>
</template>
 
<style>
.container {
  background-color: darkslategray;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: red;
} 
.text-input {
  height: 30;
  width: 200;
  background-color: lightgrey;
}

</style>

<script>
import store from '../store';

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => ({
    username: '',
  }),
  methods: {
    login() {
      store.commit('login', this.username);
      this.navigation.navigate('Aposta');
    }
  },
}
</script>
