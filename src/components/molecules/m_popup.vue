<template>
  <div class="m_popup absolute left-0 top-0">
    <div class="bg-gray-500 opacity-75 w-screen h-screen"></div>
    <div
      class="m_popup__box rounded w-[20rem] md:w-[42rem] lg:w-[49.5rem] absolute bg-white translate-y-[-50%] translate-x-[-50%] left-[50%] top-[50%] p-6"
    >
      <h2 class="text-2xl mb-9">Заказать звонок</h2>
      <form
        type="submit"
        method="post"
        class="flex flex-wrap gap-5 justify-between items-end"
      >
        <label class="block w-full md:w-[12rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Телефон*</span>
          <input
            type="number"
            class="peer px-3 h w-full border shadow-sm border-gray-300 rounded"
          />
          <p class="mt-2 hidden peer-invalid:block text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <label class="block w-full md:w-[12rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Имя*</span>
          <input
            type="text"
            class="peer px-3 h w-full border shadow-sm border-gray-300 rounded"
          />
          <p class="mt-2 hidden peer-invalid:block text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <label class="block w-full md:w-[12rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Email*</span>
          <input
            type="email"
            class="peer px-3 h w-full border shadow-sm border-gray-300 rounded"
          />
          <p class="mt-2 hidden peer-invalid:block text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <label class="block w-full md:w-[25rem] lg:w-[10.6rem]">
          <span class="block mb-1 text-base">Город*</span>
          <select
            class="px-3 h w-full border shadow-sm border-gray-300 rounded"
          >
            <option selected>Выберите город</option>
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </label>
        <button
          class="bg-green-600 w-full md:w-[11.7rem] md:h-10 lg:w-[10.6rem] lg:ml-auto px-4 py-2 rounded-md text-white"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MPopup",
};
</script>
