import "./video.scss"
import { TextControl, TextareaControl, Button } from "@wordpress/components"

wp.blocks.registerBlockType("rgblocktheme/article-link", {
    title: "RG Article Link",
    icon: "clipboard",
    attributes: {
        article_title: { type: "string" },
        article_url: { type: "string" },
        article_image_url: { type: "string" },
        artcile_text: { type: "string" }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {

    function updateProductTitle(value) {
        props.setAttributes({ article_title: value })
    }

    function updateProductURL(value) {
        props.setAttributes({ article_url: value })
    }

    function updateProductImageURL(value) {
        props.setAttributes({ article_image_url: value })
    }

    function updateProductText(value) {
        props.setAttributes({ artcile_text: value })
    }

    return (
        <div className="paying-attention-edit-block">
            <h2>Article Link</h2>
            <TextControl label="Article Title:" value={props.attributes.article_title} onChange={updateProductTitle} style={{ fontSize: "20px" }} />
            <TextControl label="Article URL:" value={props.attributes.article_url} onChange={updateProductURL} />
            <TextControl label="Article Image URL:" value={props.attributes.article_image_url} onChange={updateProductImageURL} />
            <TextareaControl label="Article Text" value={props.attributes.artcile_text} onChange={updateProductText}></TextareaControl>
        </div>
    )
}

function SaveComponent() {
    return null
}