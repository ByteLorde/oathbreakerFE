import { defineStore } from 'pinia'
import {Author, Comment} from './videos.ts'

export const useUserStore = defineStore('user', () => {

    return {
        user: Author.mock()
    }
})

export class User {

}

