import { defineStore } from "pinia";
import { ref } from "vue";
import { Octokit } from "@octokit/core"



export  const useRepoStore = defineStore("RepoStore", ()=>{
   
  const activeRepositories = ref<any>([])
  const totalCount = ref<any>([])
  const items = ref<any>([])
  const isLoading = ref(false)
  

  const octokit = new Octokit({
        auth: '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'
      })
  async function getRepositories(text: string, perPageNum: number, pageNumber: number) {
    isLoading.value = true
    if (text) {
      const params = new URLSearchParams({ q: text, per_page: perPageNum.toString(), page: pageNumber.toString() })
      let result = await octokit.request(`GET /search/repositories?${params.toString()}`, {
        headers: {'X-GitHub-Api-Version': '2022-11-28'}
      })
      
      activeRepositories.value = result.data
      totalCount.value = result.data.total_count
      items.value = result.data.items
    } 
    isLoading.value = false
    
  }
       
  




    return {activeRepositories, getRepositories, totalCount, items, isLoading }
})


