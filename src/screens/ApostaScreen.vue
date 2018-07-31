<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-form>
        <nb-item picker>
          <nb-label>Pole Position</nb-label>
          <nb-picker
            note
            mode="dropdown"
            placeholder="Select Pole Position"
            :textStyle="{ color: '#FF0000' }"
            :itemStyle="{
              backgroundColor: '#00FF00',
              marginLeft: 0,
              paddingLeft: 10
            }"
            :itemTextStyle="{ color: '#0000FF' }"
            :selectedValue="pole"
            :onValueChange="onPoleChanged"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>1</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet1"
            :onValueChange="onBetChanged1"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>2</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet2"
            :onValueChange="onBetChanged2"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>3</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet3"
            :onValueChange="onBetChanged3"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>4</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet4"
            :onValueChange="onBetChanged4"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>5</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet5"
            :onValueChange="onBetChanged5"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>6</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet6"
            :onValueChange="onBetChanged6"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>7</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet7"
            :onValueChange="onBetChanged7"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>8</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet8"
            :onValueChange="onBetChanged8"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>9</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet9"
            :onValueChange="onBetChanged9"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
        <nb-item picker>
          <nb-label>10</nb-label>
          <nb-picker
            mode="dropdown"
            placeholder="Select driver"
            :selectedValue="bet10"
            :onValueChange="onBetChanged10"
          >
            <item v-for="driver in drivers" :key="driver" :label="driver" :value="driver" />
          </nb-picker>
        </nb-item>
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
    bet1: '',
    bet2: '',
    bet3: '',
    bet4: '',
    bet5: '',
    bet6: '',
    bet7: '',
    bet8: '',
    bet9: '',
    bet10: '',
  }),
  methods: {
    onPoleChanged(driver) {
      this.pole = driver;
    },
    onBetChanged1(driver) { this.bet1 = driver },
    onBetChanged2(driver) { this.bet2 = driver },
    onBetChanged3(driver) { this.bet3 = driver },
    onBetChanged4(driver) { this.bet4 = driver },
    onBetChanged5(driver) { this.bet5 = driver },
    onBetChanged6(driver) { this.bet6 = driver },
    onBetChanged7(driver) { this.bet7 = driver },
    onBetChanged8(driver) { this.bet8 = driver },
    onBetChanged9(driver) { this.bet9 = driver },
    onBetChanged10(driver) { this.bet10 = driver },
  },
  computed: {
    drivers() {
      return ['Select driver'].concat(drivers);
    }
  }
}
</script>
