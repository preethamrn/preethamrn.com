<template>
  <span>
    <FloatingPointBit
      v-for="(v, i) in 32"
      v-model:bit="val[i]"
      :key="`${v}-${i}`"
      :class="i == 0 ? 'sign' : i < 9 ? 'exp' : 'mantissa'"
    />
  </span>
</template>

<script setup>
import { getFloatingPointVals } from "./utils";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  signBit: String,
  expBits: String,
  mantissaBits: String,
});

const val = reactive(Array(32).fill(0));

watch(val, (val) => {
  var sb = val[0].toString();
  var eb = val.slice(1, 9).join("");
  var mb = val.slice(9, 32).join("");
  var [s, e, m] = getFloatingPointVals(sb, eb, mb);
  emit("update:modelValue", (s == "+" ? 1 : -1) * m * Math.pow(2, e));
});

watch(
  () => props.signBit,
  (signBit) => {
    var i = 0;
    for (var j = 0; j < signBit.length; j++) {
      val[i] = signBit[j].charCodeAt(0) - 48;
      i++;
    }
  },
  { immediate: true }
);

watch(
  () => props.expBits,
  (expBits) => {
    var i = 1;
    for (var j = 0; j < expBits.length; j++) {
      val[i] = expBits[j].charCodeAt(0) - 48;
      i++;
    }
  },
  { immediate: true }
);

watch(
  () => props.mantissaBits,
  (mantissaBits) => {
    var i = 9;
    for (var j = 0; j < mantissaBits.length; j++) {
      val[i] = mantissaBits[j].charCodeAt(0) - 48;
      i++;
    }
  },
  { immediate: true }
);
</script>
