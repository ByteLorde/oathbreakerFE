import { defineStore } from 'pinia'
import {ref} from "vue";
import {faker} from "@faker-js/faker";
import {NewsfeedItem} from "@/model/newsfeed/model";

export const useFeaturedItems = defineStore('featured', () => {
    const featuredItems = ref([
        FeaturedItem.mock(),
        FeaturedItem.mock(),
        FeaturedItem.mock()
    ])

    return {
        featuredItems,
    }
})

export class FeaturedItem {
    ctaText?: string;
    ctaLink?: string;
    image?: string;
    title?:string;
    description?:string;

    public static mock(): FeaturedItem {
        return {
            ctaText: 'Learn more!',
            ctaLink: '',
            image: 'https://media.giphy.com/media/13ln9K5TWkNTLa/giphy.gif',
            title: 'Capture Crime? Get Paid.',
            description: 'Get police off the streets with Community driven crime stopping.\n' +
                'Cities issue tickets from user-submitted videos, with the owners getting a portion of each citation!'
        }
    }
}
