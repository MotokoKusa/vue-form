<template>
  <section class="px-2 pt-2 md:px-10 md:pt-5 xl:px-20">
    <AButton @btnClick="openPopup" class="bg-blue-500" :label="btnFirst.text" />
    <AButton @btnClick="openPopup" class="bg-teal-600" :label="btnSec.text" />
    <MPopup v-if="popupVisible" />
  </section>
</template>

<script>
import AButton from "@/components/atoms/a_button";
import MPopup from "@/components/molecules/m_popup";

export default {
  name: "SMain",
  data() {
    return {
      btnFirst: { text: "Заказать в Москву", value: "Москва" },
      btnSec: { text: "Заказать в Санкт-Петербург", value: "Москва" },
      popupVisible: false,
    };
  },
  components: {
    AButton,
    MPopup,
  },
  methods: {
    openPopup() {
      console.log(123);
      this.popupVisible = true;
    },
  },
};
</script>
