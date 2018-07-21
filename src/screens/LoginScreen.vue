<template>
  <view class="container">
    <text class="text-color-primary">Bolão F1</text>
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
</style>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    login() {
      this.navigation.navigate("Ranking");
    }
  },
}
</script>
