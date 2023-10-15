import { defineStore } from 'pinia'
import type {MenuItem} from "primevue/menuitem";
import {ref} from "vue";

export const useSidebarStore = defineStore('sidebar', () => {
    const groups = ref([...defaultGroups])

    return {
        groups,
    }
})

export const defaultGroups: MenuItem[] = [
    {
      items: [
          {
              icon: "pi pi-home",
              label: "Home"
          },
          {
              icon: "pi pi-home",
              label: "Home"
          },
          {
              icon: "pi pi-home",
              label: "Home"
          }
      ]
    },

    {
        items: [
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            }
        ]
    },

    {
        label: "Subscriptions",
        items: [
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Audits"
            },
            {
                icon: "pi pi-home",
                label: "Oathbreakers"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            }
        ]
    },

    {
        label: "Explore",
        items: [
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            },
            {
                icon: "pi pi-home",
                label: "Home"
            }
        ]
    },
]