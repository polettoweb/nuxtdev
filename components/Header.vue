<template>
  <header>
    <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
      <div>
        <div>
          <slot name="logo" />
        </div>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <slot name="switcher" />
        <!-- Added theme switcher as slot to avoid emit event from child-->
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/projects" class="text-copy-primary hover:text-blue-600">Projects</nuxt-link>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/resume" class="text-copy-primary hover:text-blue-600">Resume</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" class="text-copy-primary hover:text-blue-600">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>

</style>
