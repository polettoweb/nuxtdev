<template>
  <div>
    <div class="container-inner mx-auto flex flex-row justify-center items-center flex-wrap">
      <div
        v-for="item in this.$store.state.portfolioItems"
        class="w-1/4 h-80 mx-2 my-2 px-5 py-5 bg-blue-800 hover:bg-blue-900"
        data-cy="portfolio__img"
        :key="item.id"
        @click="openModal"
      >
        <div class="border border-white flex flex-col justify-center items-center h-full relative">
          <img class="mx-auto" :src="`/images/${item.src}`" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal(e) {
      console.log(e.target)
    }
  }
}
</script>
