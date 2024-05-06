import "./video.scss"
import { TextControl } from "@wordpress/components"

wp.blocks.registerBlockType("rgblocktheme/video", {
    title: "RG Youtube Video",
    icon: "video-alt3",
    attributes: {
        video_url: { type: "string" },
        video_title: { type: "string" }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {

    function updateVideoURL(value) {
        props.setAttributes({ video_url: value })
    }

    function updateVideoTitle(value) {
        props.setAttributes({ video_title: value })
    }

    return (
        <div className="video-editor-block">
            <h2>Youtube Video</h2>
            <TextControl label="Insert Video URL:" value={props.attributes.video_url} onChange={updateVideoURL} />
            <TextControl label="Insert Video Title:" value={props.attributes.video_title} onChange={updateVideoTitle} />
        </div>
    )
}

function SaveComponent() {
    return null
}