<script lang="ts">
import { PropType } from "vue"

export default {
  name: "JpsBtn",
  props: {
    label: {
      type: String as PropType<string>,
      required: true,
    },
    btnClass: {
      type: String as PropType<string>,
      required: false,
      default: "btn-primary",
    },
  },
}
</script>

<template>
  <button class="jps-button" :class="btnClass">{{ label }}</button>
</template>

<style scoped>
.jps-button {
  background-color: rgb(221, 159, 154);
  width: 120px;
  height: 90px;
  border-radius: 8px;
  border: none !important;
}
</style>
