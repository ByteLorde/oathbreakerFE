import {IframeVideo, Comment} from "@/stores/videos";

export class NewsfeedItem {
    comment?: Comment;
    video?: IframeVideo;

    public static mock() {
        if (false && Math.random() < 0.5) {
            return {
                comment: Comment.mock()
            }
        }
        return {
            video: IframeVideo.mock()
        }
    }

}