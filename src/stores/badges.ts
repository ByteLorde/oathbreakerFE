import { defineStore } from 'pinia'
import type {MenuItem} from "primevue/menuitem";
import {ref} from "vue";

export const useBadgeStore = defineStore('badges', () => {
    const badges = ref([...defaultBadges])

    return {
        badges,
    }
})

export const defaultBadges: MenuItem[] = [
    {
        label: "All",
        to: "all"
    },
    {
        label: "Audits",
        to: "audits"
    },
    {
        label: "Brutality",
        to: "brutality"
    },
    {
        label: "Karma",
        to: "karma"
    }
]