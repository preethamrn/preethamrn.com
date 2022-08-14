export function getFloatingPointVals(signBit, expBits, mantissaBits) {

  console.log(signBit, expBits, mantissaBits)
  // TODO: handle special cases like 0, Infinity, NaN
  var signVal = signBit == '0' ? '+' : '-'
  var expVal = parseInt(expBits, 2) - 127

  // NOTE: We can't simply do parseInt(mantissaBits, 2) because everything after the decimal point is fractional and there's an infinite number of zeros after the decimal point that we can't account for in parseInt.
  let curr = 0.5
  var mantissaVal = 1
  for (var i = 0; i < mantissaBits.length; i++) {
    if (mantissaBits[i] == 1) {
      mantissaVal += curr
    }
    curr /= 2
  }

  return [signVal, expVal, mantissaVal]
}