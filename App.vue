<template>
  <view class="container">
    <text class="text-color-primary">Bolão F1 app 2</text>
    <text>Bem-vindo {{ name }} </text>
    <button :title="btnName" :on-press="init" />
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
  
  data: () => ({
    name: 'Marcelo',
    btnName: 'Iniciar',
  }),
  methods: {
    init() {
      this.btnName = 'Fechar';  
    }
  },

}
</script>

