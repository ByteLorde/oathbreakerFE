import { defineStore } from 'pinia'
import {Comment} from './videos.ts'

export const useCommentStore = defineStore('comments', () => {

    return {
        fetchComments: (videoId: string) => {
            return Comment.mockArray()
        },

        fetchChildComments: (parentCommentId: string, startIndex:number = 0) => {
            return Comment.mockArray();
        }
    }
})

