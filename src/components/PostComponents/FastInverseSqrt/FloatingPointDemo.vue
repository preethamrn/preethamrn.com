<template>
  <div>
    <div>Number: <input v-model='num' @keypress='validate' /></div>
    <div>Bits: <FloatingPointBits v-model='num' :signBit='signBit' :expBits='expBits' :mantissaBits='mantissaBits' /></div>
    <div>Scientific notation: 
      <span v-if='isFinite(num)'>
        <span class='sign'>{{signVal}}</span>
        <span class='mantissa'>{{mantissaVal}}</span>
        *2^<span class='exp'>{{expVal}}</span>
      </span>
      <span v-else>
        {{num}}
      </span>
    </div>
    <!-- TODO: add a note to try plugging in the "weird" floating point number into a calculator or DDG search. You'll find that it shows the right value -->
    <!-- TODO: show a inc/dec button and show examples of how when you get to large numbers, incrementing by one doesn't actually change the float representation => you lose precision -->
  </div>
</template>

<script>
import FloatingPointBits from './FloatingPointBits.vue'
import {getFloatingPointVals} from './utils'

export default {
  name: 'FloatingPointDemo',
  components: {
    FloatingPointBits,
  },
  data: () => ({
    num: 1.5,
    signBit: '0',
    expBits: '01111111',
    mantissaBits: '10000000000000000000000',
    signVal: '+',
    expVal: '0',
    mantissaVal: '1.5',
  }),
  methods: {
    validate(e) {
      // TODO: Improve this validation to allow negative, Infinity and NaN inputs
      if ((e.key < '0' || e.key > '9') && e.key != '.' && e.key != '-') e.preventDefault()
    },
    computeVals(num) {
      // source: https://stackoverflow.com/questions/4414077/read-write-bytes-of-float-in-js/10564792#10564792
      let buffer = new ArrayBuffer(4)
      let intView = new Int32Array(buffer)
      let floatView = new Float32Array(buffer)

      // This doesn't work with negative numbers so we use abs and compute sign bit manually
      this.signBit = num >= 0 ? '0' : '1'
      floatView[0] = Math.abs(num)
      let bits = intView[0].toString(2).padStart(31, '0')
      this.expBits = bits.substring(0, 8)
      this.mantissaBits = bits.substring(8)

      let vals = getFloatingPointVals(this.signBit, this.expBits, this.mantissaBits)
      this.signVal = vals[0]
      this.expVal = vals[1]
      this.mantissaVal = vals[2]
    },
  },
  watch: {
    num() {
      // TODO: support representing negative zero
      let num = parseFloat(this.num)
      this.computeVals(num)
    },
  }
}
</script>

<style scoped>
::v-deep .sign {
  color: green
}
::v-deep .exp {
  color: red;
}
::v-deep .mantissa {
  color: blue;
}
</style>