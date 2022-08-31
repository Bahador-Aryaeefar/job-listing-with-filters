<script setup>
import data from '@/assets/data.json'

import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import CardComponent from './CardComponent.vue';

const input = ref("")
const isOpen = ref(false)

const categories = ref(["Frontend", "Backend", "Fullstack", "Junior", "Midweight", "Senior", "Python", "Ruby", "JavaScript", "HTML", "CSS", "React", "Sass", "Vue", "Django", "RoR"])
const showCategories = computed(() => categories.value.filter(cat => cat.toLowerCase().includes(input.value.toLowerCase())))

const picked = ref(new Set)

function inputBlur(event)
{
    if (event.relatedTarget?.id != "drop") isOpen.value = false;
}
// eslint-disable-next-line
const filters = computed(() => data.filter(card =>
{
    let temp = []
    temp.push(card.role)
    temp.push(card.level)
    temp = temp.concat(card.languages)
    temp = temp.concat(card.tools)
    for (let i of picked.value)
    {
        if (!temp.includes(i)) return false
    }
    return true
}))

</script>

<template>
    <div class="z-10 relative">
        <div
            class="relative w-4/5 mx-auto mt-[7.6rem]  text-lg font-medium text-job-darkCyan bg-white blueShadow rounded-[0.25rem]">
            <span @click="picked.clear(); input = ''"
                class="absolute top-[1.125rem] right-8 border-b-[2px] border-transparent hover:border-job-darkCyan cursor-pointer">clear</span>
            <input class="w-full bg-transparent h-[4rem] focus:outline-none pl-8" type="text" v-model="input"
                placeholder="Add filter" @focus="isOpen = true" @blur="inputBlur">
            <hr class="mx-8">
            <ul class="flex min-h-[4rem] gap-6 px-8 py-4 flex-wrap">
                <li v-for="(item, index) in picked" :key="index"
                    class="flex items-center h-[2rem] pl-2 bg-job-lightGrayishCyan rounded-[0.25rem] overflow-hidden">
                    {{ item }}
                    <div @click="picked.delete(item)"
                        class="h-full w-[2rem] bg-job-darkCyan ml-2 hover:bg-[#2d3937] cursor-pointer flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                            <path fill="#FFF" fill-rule="evenodd"
                                d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
                        </svg>
                    </div>
                </li>
            </ul>
        </div>
        <div id="drop"
            class="absolute -bottom-[22rem] left-0 right-0 w-4/5 mx-auto mt-4 z-10 bg-white rounded-[0.25rem] p-2 blueShadow"
            v-if="isOpen" tabindex="0">
            <div class="w-full h-[20rem] overflow-scroll FirefoxScroll rtl">
                <ul class="text-lg w-full font-medium text-job-darkCyan p-2 ltr">
                    <li v-for="(item, index) in showCategories" :key="index"
                        @click.prevent="picked.add(item); isOpen = false; input = ''"
                        class="px-8 py-2 hover:bg-job-lightGrayishCyan rounded-[0.25rem] cursor-pointer">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="pt-6 mb-10">
        <CardComponent v-for="item in filters" :key="item.id" :info="item" @filter="filter => picked.add(filter)">
        </CardComponent>
    </div>
</template>

<style scoped>
.FirefoxScroll {
    scrollbar-color: #B8B8B8 transparent;
    scrollbar-width: thin;
}

/* width */
::-webkit-scrollbar {
    width: 0.3rem;
    height: 0;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #B8B8B8;
    border-radius: 300px;
}
</style>