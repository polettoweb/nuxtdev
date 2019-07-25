<template>
  <div>
    <div class="container-inner mx-auto flex flex-row justify-center items-center flex-wrap">
      <div
        v-for="item in $page.projects.edges"
        class="w-1/4 h-80 mx-2 my-2 px-5 py-5 bg-blue-800 hover:bg-blue-900"
        data-cy="portfolio__img"
        :key="item.node.id"
        @click="openModal"
      >
        <div class="border border-white flex flex-col justify-center items-center h-full relative">
          <!-- <div class="absolute w-full h-full top-0 left-0 bg-white filter-blur"></div> -->
          <img class="mx-auto" :src="'/images/'+item.node.src" :alt="item.node.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<page-query>
query port {
	projects: allPortfolioItem {
    totalCount
    edges {
      node {
				id
        description
        link
        src
        path
        alt
        srcDevices
        tags
        linkTitle
        websites {
          link
          title
        }
        role
      }
    }
  }
}
</page-query>
<script>
export default {
  methods: {
    openModal(e) {
      console.log(e.target)
    }
  }
}
</script>

<style>
/* .filter-blur {
  background-color: rgba(255,255,255,0.3);
  filter: blur(80px);
}

.filter-blur:hover {
  background-color: transparent;
  filter: none;
} */
</style>
