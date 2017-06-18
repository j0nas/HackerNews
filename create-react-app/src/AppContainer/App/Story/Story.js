import React, {PureComponent} from "react";
import "./Story.css";

class Story extends PureComponent {
    render() {
        const {story} = this.props;

        return (
            <div className="story">
                <div className="story-title">
                    <a className="story-link" href={story.url}>{story.title}</a>
                    <a className="story-domain" href={story.domain}> ({story.domain})</a>
                </div>
                <div className="story-meta">
                    {story.points} points by {story.user} {story.time_ago} |&nbsp;
                    {story.comments_count} comments
                </div>
            </div>
        );
    }
}

export default Story;