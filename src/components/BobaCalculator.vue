<template lang='pug'>
ul
  li(v-for='(mount, price) in state.order')
    p(@click='state.order[price]+=1') {{ price}} x {{ mount }}
    p(@click='state.order[price]=0') 清除
  li
    p + 
    input(pattern='[0-9]*', v-model='state.addition')
    p(@click='state.addition=0') 清除
p {{ state.total_price }}
p(@click='refresh') 清除
</template>

<script setup>
import { reactive, computed } from 'vue'
const state = reactive({
  order: {
    '25': 0,
    '30': 0,
    '35': 0,
    '40': 0,
    '45': 0,
    '50': 0,
    '55': 0,
    '60': 0,
    '65': 0,
    '70': 0,
    '75': 0,
  },

  addition: 0,

  total_price: computed(()=>{
    let total_price = Number(state.addition)
    for(let price in state.order)
      total_price += price * state.order[price]
    return total_price
  })
})

const refresh = () => {
  for(let price in state.order)
    state.order[price] =0
  state.addition = 0
}
</script>

<style lang='sass' scoped>
a
  color: #42b983
li p
  display: inline
</style>
