import React from 'react'

export default function CreateActivity () {
    return (
        <div className="main-wraper">
            <span className="new-title">Create New Post</span>
            <div className="new-post">
                <form method="post">
                    <i className="icofont-pen-alt-1" />
                    <input type="text" placeholder="Create New Post" />
                </form>
                <ul className="upload-media">
                    <li>
                        <a href="#" title>
                            <i><img src="images/image.png" alt /></i>
                            <span>Photo/Video</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" title>
                            <i><img src="images/activity.png" alt /></i>
                            <span>Feeling/Activity</span>
                        </a>
                    </li>
                    <li>
                        <a href="live-stream.html" title>
                            <i><img src="images/live-stream.png" alt /></i>
                            <span>Live Stream</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
