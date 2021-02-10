<template lang='pug'>
.ui.list
  .item.flex(v-for='(mount, price) in state.order')
    p.flex-item(@click='state.order[price]+=1') {{ mount }} x ${{ price }}
    button.ui.large.button.flex-item(@click='state.order[price]=0') 清除
  .item.flex
    input.flex-item(@click='state.addition=""', pattern='[0-9]*', v-model='state.addition')
    button.ui.button.flex-item(@click='state.addition=0') 清除
.-footer
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
.list
  width: 100%
  position: absolute
  top: 0
  bottom: 10vh
  overflow: auto
  margin: 0 !important
  margin-top: .5em !important
  .item
    padding: 0 !important
.flex
  display: flex !important
  justify-content: center
  .flex-item
    margin: auto

input
  margin-bottom: 10px !important
  margin-top: 10px !important
  width: 3em
  height: 1.5em

.-footer
  height: 10vh
  background-color: lightgray
  position: fixed
  bottom: 0
  width: 100%
  p
    display: inline
    padding: 0em 1em
  button
    position: absolute
    right: 25px
    top: 5vh
    transform: translateY(-50%)

</style>
