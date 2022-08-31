<script setup>
import { ref } from 'vue';


// eslint-disable-next-line
const props = defineProps({
    info: Object
})

const categories = ref([])

categories.value.push(props.info.role)
categories.value.push(props.info.level)
categories.value = categories.value.concat(props.info.languages)
categories.value = categories.value.concat(props.info.tools)




</script>

<template>

    <div
        class="relative overflow-hidden w-4/5 bg-white mt-6 mx-auto blueShadow rounded-[0.25rem] px-10 py-8 flex justify-between gap-4 after:h-full after:w-1.5 after:bg-job-darkCyan after:absolute after:left-0 after:top-0 after:scale-y-0 hover:after:scale-y-100 after:transition-all">
        <div class="flex items-center gap-6 text-lg font-medium text-job-darkCyan shrink-0">
            <img :src="require(`@/assets/${info.logo}`)" alt="">
            <div class="space-y-2">
                <div class="flex items-center">
                    {{ info.company }}
                    <span v-if="info.new"
                        class="text-white bg-job-darkCyan rounded-full pt-1 px-2 text-sm ml-4">NEW!</span>
                    <span v-if="info.featured"
                        class="text-white bg-job-gray rounded-full pt-1 px-2 text-sm ml-2">FEATURED</span>
                </div>
                <div class="text-2xl font-bold">{{ info.position }}</div>
                <div class="text-[#868e8e] flex gap-4 items-center">
                    {{ info.postedAt }}
                    <span class="w-1 h-1 rounded-full bg-[#c9c9c9] mb-1"></span>
                    {{ info.contract }}
                    <span class="w-1 h-1 rounded-full bg-[#c9c9c9] mb-1"></span>
                    {{ info.location }}
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-center gap-4 text-lg font-medium text-job-darkCyan">
            <span v-for="(item, index) in categories" :key="index" @click="$emit('filter', item)"
                class="h-[2rem] bg-job-lightGrayishCyan px-2 pt-0.5 rounded-[0.25rem] hover:text-white hover:bg-job-darkCyan cursor-pointer">{{
                        item
                }}</span>
        </div>
    </div>

</template>