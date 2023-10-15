import { defineStore } from 'pinia'
import {ref} from "vue";
import {faker} from "@faker-js/faker";
import {NewsfeedItem} from "@/model/newsfeed/model";

export const useActivityStore = defineStore('activity', () => {
    const activityFeed = ref([...defaultFeed])

    return {
        activityFeed,
    }
})

export const defaultFeed: NewsfeedItem[] = [
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
    NewsfeedItem.mock(),
]
