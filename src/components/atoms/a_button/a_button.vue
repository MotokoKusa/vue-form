<template>
  <button
    @click="btnClick"
    class="w-full mb-2 md:w-auto md:mr-4 px-4 py-2 rounded-md text-white"
    v-html="label"
  ></button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    label: String,
  },
  methods: {
    btnClick() {
      this.$emit("btnClick");
    },
  },
};
</script>
