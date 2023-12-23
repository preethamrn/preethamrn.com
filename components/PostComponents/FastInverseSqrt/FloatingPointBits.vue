<template>
  <span>
    <FloatingPointBit 
      v-for='(v, i) in 32'
      v-model='val[i]'
      :key='`${v}-${i}`'
      :class='i == 0 ? "sign" : i < 9 ? "exp" : "mantissa"'
    />
  </span>
</template>

<script>
import FloatingPointBit from './FloatingPointBit.vue'
import {getFloatingPointVals} from './utils'

export default {
  name: "FloatingPointBits",
  components: {
    FloatingPointBit,
  },
  props: {
    signBit: String,
    expBits: String,
    mantissaBits: String,
  },
  data: () => ({
    val: Array(32).fill(0),
  }),
  watch: {
    val() {
      var sb = this.val[0].toString()
      var eb = this.val.slice(1, 9).join("")
      var mb = this.val.slice(9, 32).join("")
      var [s, e, m] = getFloatingPointVals(sb, eb, mb)
      this.$emit('input', (s == '+' ? 1 : -1) * m * Math.pow(2, e))
    },
    signBit: {
      handler() {
        var i = 0
        for(var j=0; j < this.signBit.length; j++) {
          this.val[i] = this.signBit[j].charCodeAt(0) - 48
          i++
        }
        this.$forceUpdate() // NOTE: required to re-render when array data is modified.
      },
      immediate: true
    },
    expBits: {
      handler() {
        var i = 1
        for(var j=0; j < this.expBits.length; j++) {
          this.val[i] = this.expBits[j].charCodeAt(0) - 48
          i++
        }
        this.$forceUpdate() // NOTE: required to re-render when array data is modified.
      },
      immediate: true
    },
    mantissaBits: {
      handler() {
        var i = 9
        for(var j=0; j < this.mantissaBits.length; j++) {
          this.val[i] = this.mantissaBits[j].charCodeAt(0) - 48
          i++
        }
        this.$forceUpdate() // NOTE: required to re-render when array data is modified.
      },
      immediate: true
    },
  },
}
</script>
