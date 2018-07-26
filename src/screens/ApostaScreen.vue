<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-form>
        <text>Pole position:</text>
        <nb-picker
          note
          mode="dropdown"
          placeholder="Select Pole Position"
          :style="{ width: 220 }"
          :selectedValue="pole"
          :onValueChange="onPoleChanged"
        >
          <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
        </nb-picker>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
 
<script>
import store from '../store';
import { drivers } from '../js/drivers'
import { Picker } from "native-base";

export default {
  components: {
    Item: Picker.Item
  },
  data: () => ({
    pole: '',
  }),
  methods: {
    onPoleChanged(driver) {
      this.pole = driver;
    }
  },
  computed: {
    drivers() {
      return drivers;
    }
  }
}
</script>
