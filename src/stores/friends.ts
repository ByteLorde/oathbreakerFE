import { defineStore } from 'pinia'
import {Author} from './videos.ts'

export const useFriendStore = defineStore('friends', () => {

    return {
        fetchFriends() {
            const friends = [
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
                Author.mock(),
            ];

            for (const friend of friends) {
                friend.online = Math.random() < .5;
            }

            return friends;
        }
    }
})

export class FriendListItem extends Author {
    online ?: boolean;
}

