<template>
  <div>
    <div>Number: <input v-model='num' @keypress='validate' style="width: 50%"/></div>
    <div>Bits: <FloatingPointBits v-model='num' :signBit='signBit' :expBits='expBits' :mantissaBits='mantissaBits' /></div>
    <div>
      <span v-if='isFinite(num)'>
        <a :href="`https://www.wolframalpha.com/input?i=${signVal}${mantissaVal}*2^${expVal}`" target="_blank">
          Scientific notation: 
          <span class='sign'>{{signVal}}</span>
          <span class='mantissa'>{{mantissaVal}}</span>
          *2^<span class='exp'>{{expVal}}</span>
        </a>
      </span>
      <span v-else>
        Scientific notation: {{num}}
      </span>
    </div>
    <!-- TODO: add a note to try plugging in the "weird" floating point number into a calculator or DDG search. You'll find that it shows the right value -->
    <!-- TODO: show a inc/dec button and show examples of how when you get to large numbers, incrementing by one doesn't actually change the float representation => you lose precision -->
    <!-- TOOD: add a copy button to the bits data -->
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
    num: 127,
    signBit: '0',
    expBits: '10000101',
    mantissaBits: '11111100000000000000000',
    signVal: '+',
    expVal: '6',
    mantissaVal: '1.984375',
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
  color: rgb(0, 141, 0)
}
::v-deep .exp {
  color: rgb(255, 70, 70);
}
::v-deep .mantissa {
  color: rgb(94, 94, 255);
}
a {
  color: unset;
}
</style>