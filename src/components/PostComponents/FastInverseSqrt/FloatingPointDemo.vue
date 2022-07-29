<template>
  <div>
    <div>Num: <input v-model='num' @keypress='validate' /></div>
    <div>Bits: {{signBit}}{{expBits}}{{mantissaBits}}</div>
    <div>Val: {{signVal}}{{mantissaVal}}*2^{{expVal}}</div>
    <!-- TODO: add a note to try plugging in the "weird" floating point number into a calculator or DDG search. You'll find that it shows the right value -->

    <!-- TODO: pretty print the binaryRepresentation to distinguish the sign, exponent, mantissa fields. Also show the S, M, E values on their own lines (and allow users to manually modify them either bit by bit or by value) -->

    <!-- TODO: show a inc/dec button and show examples of how when you get to large numbers, incrementing by one doesn't actually change the float representation => you lose precision -->
  </div>
</template>

<script>
export default {
  name: 'FloatingPointDemo',
  data: () => ({
    num: 0,
    signBit: '0',
    expBits: '00000000',
    mantissaBits: '00000000000000000000000',
    signVal: '+',
    expVal: '0',
    mantissaVal: '1.0',
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

      // TODO: handle special cases like 0, Infinity, NaN
      this.signVal = num >= 0 ? '+' : '-'
      this.expVal = parseInt(this.expBits, 2) - 127

      // NOTE: We can't simply do parseInt(this.mantissaBits, 2) because everything after the decimal point is fractional and there's an infinite number of zeros after the decimal point that we can't account for in parseInt.
      let curr = 0.5
      this.mantissaVal = 1
      for (var i = 0; i < this.mantissaBits.length; i++) {
        if (this.mantissaBits[i] == 1) {
          this.mantissaVal += curr
        }
        curr /= 2
      }
    },
  },
  watch: {
    num() {
      let num = parseFloat(this.num)
      this.computeVals(num)
    },
    // TODO: include methods/watchers for parsing other numbers as well,
    //       eg. if mantissaVal/expVal/sign or binary representation changes.
  }
}
</script>

<style>

</style>