<template>
  <div class="m_popup absolute left-0 top-0">
    <div class="bg-gray-500 opacity-75 w-screen h-screen"></div>

    <div
      class="m_popup-form__box rounded w-[20rem] md:w-[42rem] lg:w-[49.5rem] absolute bg-white translate-y-[-50%] translate-x-[-50%] left-[50%] top-[50%] p-6"
    >
      <AButton
        @btnClick="closePopups"
        class="absolute w-[2rem] h-[2rem] py-0 px-0 text-black right-0 top-0 z-10"
        :label="closeBtn"
      />
      <div v-html="this.$store.state.message"></div>
    </div>
  </div>
</template>

<script>
import AButton from "@/components/atoms/a_button/a_button";
export default {
  name: "MPopupMessage",
  components: {
    AButton,
  },
  data() {
    return {
      closeBtn: "&#10006;",
    };
  },
  methods: {
    closePopups() {
      this.$store.state.popupMessage = false;
    },
  },
};
</script>

<style scoped></style>
