import {defineStore} from 'pinia'
import {ref} from "vue";
import {faker} from "@faker-js/faker";

export const useVideoStore = defineStore('videos', () => {
    const videos = ref([...defaultVideos])

    return {
        videos,
    }
})

export class IframeVideo {
    id ?: string;
    source ?: string;
    title ?: string;
    views ?: number | string;
    date ?: string;
    author ?: Author;
    numComments ?: number;
    description ?: string;
    topComment ?: Comment;
    comments ?: Comment[];

    public static mock(): IframeVideo {
        return {
            id: faker.number.int() + '',
            title: "I played the first ever version of WoW | Asmongold Reacts",
            date: "2 weeks ago",
            source: "https://www.youtube.com/embed/_SWTSPmGpq4",
            views: '321K',
            author: Author.mock(),
            description: faker.lorem.paragraph(10),
            numComments: faker.number.int({min: 1, max: 2132}),
            comments: [],
            topComment: {
                id: faker.number.int() + '',
                author: Author.mock(),
                content: faker.lorem.text(),
                date: faker.date.recent().toDateString(),
                childComments: [],
                numChildComments: 12
            }
        };
    }
}

export class Author {
    id ?: string;
    name ?: string;
    subscribers ?: number;
    icon ?: string;
    title ?: string;

    public static mock(): Author {
        return {
            id: faker.number.int() + '',
            name: faker.internet.userName(),
            subscribers: faker.number.int({max: 1200000}),
            icon: faker.image.avatar(),
            title: 'Attorney'
        }
    }
}

export class Comment {
    id ?: string;
    author ?: Author;
    content ?: string;
    date ?: string;
    childComments ?: Comment[];
    video ?: IframeVideo;
    numChildComments ?: number;

    public static mockArray(): Comment[] {
        let numComments = faker.number.int({min: 1, max: 15})
        let comments: Comment[] = [];

        for (let i = 0; i < numComments; i++) {
            comments.push(this.mock(0))
        }

        return comments;
    }


    public static mock(iterations=0): Comment {
        let numChildComments = iterations >= 5 ? 0 : faker.number.int({max: 5});
        let comments: Comment[] = []

        for (let i = 0; i < numChildComments; i++) {
            comments.push(this.mock(iterations += 1))
        }

        return {
            id: faker.number.int() + '',
            author: Author.mock(),
            content: faker.lorem.text(),
            date: faker.date.recent().toDateString(),
            childComments: comments,
            video: IframeVideo.mock(),
            numChildComments: 12
        }
    }
}

export const defaultVideos: IframeVideo[] = [
    {
        id: "1",
        title: "I played the first ever version of WoW | Asmongold Reacts",
        date: "2 weeks ago",
        source: "https://www.youtube.com/embed/_SWTSPmGpq4",
        views: 213787,
        comments: Comment.mockArray(),
        author: {
            id: "1",
            name: faker.internet.userName(),
            subscribers: 1213032,
            icon: faker.image.avatar()
        },
    },
    {
        id: "2",
        title: "I played the first ever version of WoW | Asmongold Reacts",
        date: "2 weeks ago",
        views: 213787,
        source: "https://www.youtube.com/embed/yS8nh4PrqXo",
        comments: Comment.mockArray(),

        author: {
            id: "2",
            name: faker.internet.userName(),
            subscribers: 1213032,
            icon: faker.image.avatar()

        }
    },
    {
        id: "3",
        title: "I played the first ever version of WoW | Asmongold Reacts",
        date: "2 weeks ago",
        views: 213787,
        source: "https://www.youtube.com/embed/k_0g1M5PcqM",
        comments: Comment.mockArray(),

        author: {
            id: "3",
            name: faker.internet.userName(),
            subscribers: 1213032,
            icon: faker.image.avatar()

        }
    },
    {
        id: "4",
        title: "I played the first ever version of WoW | Asmongold Reacts",
        date: "2 weeks ago",
        views: 213787,
        source: "https://www.youtube.com/embed/ftzFhEAbXUs",
        comments: Comment.mockArray(),

        author: {
            id: "4",
            name: faker.internet.userName(),
            subscribers: 1213032,
            icon: faker.image.avatar()

        }
    },
    {
        id: "5",
        title: "I played the first ever version of WoW | Asmongold Reacts",
        date: "2 weeks ago",
        views: 213787,
        source: "https://www.youtube.com/embed/3Q6ACl421XI",
        comments: Comment.mockArray(),

        author: {
            id: "5",
            name: faker.internet.userName(),
            subscribers: 1213032,
            icon: faker.image.avatar()

        }
    },
    {
        id: "6",
        title: "I played the first ever version of WoW | Asmongold Reacts",
        date: "2 weeks ago",
        views: 213787,
        source: "https://www.youtube.com/embed/95AqKRQE_24",
        comments: Comment.mockArray(),

        author: {
            id: "6",
            name: faker.internet.userName(),
            subscribers: 1213032,
            icon: faker.image.avatar()

        }
    }
]
