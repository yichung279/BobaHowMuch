<template lang='pug'>
.ui.list
  .item(v-for='(mount, price) in state.order')
    .right.floated.content
      button.ui.button(@click='state.order[price]=0') 清除
    .middle.aligned.content
      p(@click='state.order[price]+=1') {{ price}} x {{ mount }}
  li.item
    .right.floated.content
      button.ui.button(@click='state.addition=0') 清除
    .middle.aligned.content
      input(@click='state.addition=""', pattern='[0-9]*', v-model='state.addition')
.footer
  p {{ state.total_price }}
  button.ui.button(@click='refresh') 清除
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
.list p
  display: inline
.list
  height: 90vh
  overflow: auto
  margin: 0 !important
.item
  padding: 0em 1em !important
input
  margin: 10px 0px
  width:50%
  height: 50px
  font-size: 40px
.footer
  height: 10.1vh
  background-color: lightgray
  position: relative
  p
    display: inline
    padding: 0em 1em
  button
    position: absolute
    right: 50px
    top: 5vh
    transform: translateY(-50%)

</style>
