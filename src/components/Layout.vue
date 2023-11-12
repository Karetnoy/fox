<script setup lang="ts">
import Repo from './slots/Repo.vue';
import { useRepoStore } from '../state/manager.ts';
import { computed, ref, watch } from 'vue';
import { FwbPagination } from 'flowbite-vue';




const RepoStore = useRepoStore();
const currentPage = ref(1);
const searchElem = ref('')
const perPageBlocks = ref(10)

let xpeH: number;


function getRepositories() {
  RepoStore.getRepositories(searchElem.value, perPageBlocks.value, currentPage.value)
}


function send(event: any) { searchElem.value = event.target.value }

function awaitActive() {
  clearTimeout(xpeH);
  xpeH = setTimeout(getRepositories, 300);

}
const checkSearchElem = computed(() => searchElem.value === '' ? 'Введите название' : false)
const definedTotalPage = computed(() => searchElem.value === '' ? 1 : Math.ceil(RepoStore.totalCount / perPageBlocks.value))



watch(searchElem, awaitActive)
watch(currentPage, getRepositories)

</script>

<template>
  <div class="md:container md:mx-auto flex flex-col justify-items-center  my-12  ">
    <input type="text" placeholder="Критерий поиска"
      class=" max-w-prose  px-10 hover:bg-sky-50 border-2 border-black rounded self-center text-center"
      @keypress.enter="getRepositories" @input="send">

    <div v-if="RepoStore.isLoading" class="self-center">
      <img src="https://i.gifer.com/ZKZg.gif">
    </div>
    <div v-else class="self-center">
      <div v-if="!checkSearchElem" class=" min-w-full mt-6 grid grid-cols-1 gap-4 justify-items-center content-around">
        <Repo v-for="item in RepoStore.items" :item="item" :key="item.id"></Repo>
      </div>

      <h1 v-else>
        {{ checkSearchElem }}
      </h1>
    </div>

    <div class="flex items-center justify-center text-center">
      <fwb-pagination v-model="currentPage" :total-pages="definedTotalPage" :enableFirstAndLastButtons="true"
        previous-label="<<<" next-label=">>>">
      </fwb-pagination>


    </div>
  </div>
</template>

<style scoped></style>
