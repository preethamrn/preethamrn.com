export function getFloatingPointVals(signBit, expBits, mantissaBits) {
  // TODO: handle special cases like 0, Infinity, NaN
  var signVal = signBit == '0' ? '+' : '-'
  var denormalized = false
  var expVal = parseInt(expBits, 2) - 127
  if (expVal == -127) {
    expVal = -126
    denormalized = true
  }

  // NOTE: We can't simply do parseInt(mantissaBits, 2) because everything after
  // the decimal point is fractional and there's an infinite number of zeros after
  // the decimal point that we can't account for in parseInt.
  let curr = 0.5
  var mantissaVal = denormalized ? 0 : 1 // If expBits is all 0s then we start mantissa from 0.0
  for (var i = 0; i < mantissaBits.length; i++) {
    if (mantissaBits[i] == 1) {
      mantissaVal += curr
    }
    curr /= 2
  }

  if (expVal == 128) {
    if (mantissaVal == 1.0) {
      return [signVal, 128, Infinity]
    } else {
      return [signVal, 128, NaN]
    }
  }

  return [signVal, expVal, mantissaVal]
}