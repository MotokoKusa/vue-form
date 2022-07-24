<template>
  <div class="m_popup-form absolute left-0 top-0">
    <div class="bg-gray-500 opacity-75 w-screen h-screen"></div>
    <div
      class="m_popup-form__box rounded w-[20rem] md:w-[42rem] lg:w-[49.5rem] absolute bg-white translate-y-[-50%] translate-x-[-50%] left-[50%] top-[50%] p-6"
      :class="{ hidden: this.$store.state.popupMessage }"
    >
      <h2 class="text-2xl mb-9">Заказать звонок</h2>
      <AButton
        @btnClick="closePopups"
        class="absolute w-[2rem] h-[2rem] py-0 px-0 text-black right-0 top-0 z-10"
        :label="closeBtn"
      />
      <form
        @submit.prevent="sendValuesForm"
        type="submit"
        method="post"
        class="flex flex-wrap gap-5 justify-between"
      >
        <label class="block w-full md:w-[12rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Телефон*</span>
          <input
            type="text"
            v-model.trim="phone"
            placeholder="+7 (___) ___-__-__"
            class="px-3 h w-full border shadow-sm border-gray-300 rounded"
          />
          <p
            v-if="!this.formValues.phone.valid"
            class="mt-2 text-pink-600 text-sm"
          >
            Обязательное поле
          </p>
        </label>
        <label class="block w-full md:w-[12rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Имя*</span>
          <input
            v-model.trim="name"
            type="text"
            class="px-3 h w-full border shadow-sm border-gray-300 rounded"
          />
          <p
            v-if="!this.formValues.name.valid"
            class="mt-2 text-pink-600 text-sm"
          >
            Обязательное поле
          </p>
        </label>
        <label class="block w-full md:w-[12rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Email*</span>
          <input
            v-model.trim="email"
            type="email"
            class="px-3 h w-full border shadow-sm border-gray-300 rounded"
          />
          <p
            v-if="!this.formValues.email.valid"
            class="mt-2 text-pink-600 text-sm"
          >
            Обязательное поле
          </p>
        </label>
        <label class="block w-full md:w-[25rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Город*</span>
          <select
            class="px-3 h w-full border shadow-sm border-gray-300 rounded"
            v-model="select"
          >
            <option disabled>Выберите город</option>
            <option
              v-for="el in getListTowns"
              :key="el.id"
              v-html="el.name"
            ></option>
          </select>
        </label>
        <button
          @submit.prevent="sendValuesForm"
          class="self-end bg-green-600 w-full md:w-[11.7rem] md:h-10 lg:w-[10.6rem] lg:ml-auto px-4 py-2 rounded-md text-white"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AButton from "@/components/atoms/a_button/a_button";

export default {
  name: "MPopupForm",
  components: {
    AButton,
  },
  data() {
    return {
      formValues: {
        name: { value: "", valid: true },
        phone: { value: "", valid: true },
        email: { value: "", valid: true },
        city: { id: null, value: "", valid: true },
      },
      closeBtn: "&#10006;",
      name: "",
      phone: "",
      phoneValue: "",
      email: "",
      select: "Выберите город",
    };
  },
  computed: {
    ...mapGetters(["getListTowns"]),
    validateEmail() {
      let check = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      return check.test(this.email);
    },
    validatePhone() {
      return this.phoneValue.length === 12;
    },
    isNotValidForm() {
      for (let key in this.formValues) {
        if (this.formValues[key].valid === false) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["sendInfoFromForm"]),
    checkValidPhone() {
      if (this.validatePhone) {
        this.formValues.phone.valid = true;
        this.formValues.phone.value = this.phoneValue;
      } else {
        this.formValues.phone.valid = false;
      }
    },
    checkValidEmail() {
      if (this.validateEmail) {
        this.formValues.email.valid = true;
        this.formValues.email.value = this.email;
      } else {
        this.formValues.email.valid = false;
      }
    },
    checkValidName() {
      if (this.name) {
        this.formValues.name.valid = true;
        this.formValues.name.value = this.name;
      } else {
        this.formValues.name.valid = false;
      }
    },
    closePopups() {
      this.$store.state.popupForm.visible = false;
    },
    sendValuesForm() {
      this.checkValidPhone();
      this.checkValidEmail();
      this.checkValidName();

      this.formValues.city = this.getListTowns.find((el) => {
        return el.name === this.select;
      });

      this.sendInfoFromForm({
        name: this.formValues.name.value,
        phone: this.formValues.phone.value,
        email: this.formValues.email.value,
        city_id: this.formValues.city?.id,
      });

      console.log(this.isNotValidForm);
      if (this.isNotValidForm) {
        this.$store.state.popupForm.visible = false;
        this.$store.state.popupMessage = true;
        this.name = "";
        this.phone = "";
        this.email = "";
        this.select = "Выберите город";
      } else {
        this.$store.state.popupMessage = true;
      }
    },
  },
  watch: {
    phone: function (val) {
      const x = val
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      x[1] = "+7";
      let newVal = !x[3]
        ? x[1] + "" + x[2]
        : x[1] +
          " (" +
          x[2] +
          ") " +
          x[3] +
          (x[4] ? "-" + x[4] : "") +
          (x[5] ? "-" + x[5] : "");
      this.phoneValue = "+" + x[0];
      this.phone = newVal;
    },
  },
  mounted() {
    if (this.$store.state.popupForm.value) {
      this.select = this.$store.state.popupForm.value;
    }
  },
};
</script>
