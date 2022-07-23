<template>
  <section class="px-2 pt-2 md:px-10 md:pt-5 xl:px-20">
    <template v-for="el in listBtns">
      <AButton
        @btnClick="openPopup(el)"
        :key="el.id"
        :class="el.color"
        :label="el.text"
      />
    </template>
    <MPopupForm
      v-if="this.$store.state.popupForm.visible"
      :select="this.$store.state.popupForm.value"
    />
    <MPopupMessage v-if="this.$store.state.popupMessage" />
  </section>
</template>

<script>
import AButton from "@/components/atoms/a_button/a_button";
import MPopupForm from "@/components/molecules/m_popup-form/m_popup-form";
import MPopupMessage from "@/components/molecules/m_popup-message/m_popup-message";

export default {
  name: "SMain",
  data() {
    return {
      listBtns: [
        {
          id: 1,
          text: "Заказать в Москву",
          value: "Москва",
          color: "bg-blue-500",
        },
        {
          id: 2,
          text: "Заказать в Санкт-Петербург",
          value: "Санкт-Петербург",
          color: "bg-teal-600",
        },
      ],
    };
  },
  components: {
    AButton,
    MPopupForm,
    MPopupMessage,
  },
  methods: {
    openPopup(el) {
      this.$store.state.popupForm.visible = true;
      this.$store.state.popupForm.value = el.value;
    },
  },
};
</script>
