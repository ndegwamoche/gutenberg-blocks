import "./video.scss"
import { TextControl, Flex, FlexBlock, FlexItem, Button } from "@wordpress/components"

wp.blocks.registerBlockType("rgblocktheme/single-product", {
    title: "RG Single Product",
    icon: "format-image",
    attributes: {
        product_title: { type: "string" },
        product_url: { type: "string" },
        product_image_url: { type: "string" },
        product_features: {
            type: "array", default: [""]
        },

    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {

    function updateProductTitle(value) {
        props.setAttributes({ product_title: value })
    }

    function updateProductURL(value) {
        props.setAttributes({ product_url: value })
    }

    function updateProductImageURL(value) {
        props.setAttributes({ product_image_url: value })
    }

    function deleteFeature(indexToDelete) {
        const newFeatures = props.attributes.product_features.filter(function (x, index) {
            return index != indexToDelete
        })
        props.setAttributes({ product_features: newFeatures })
    }

    return (
        <div className="paying-attention-edit-block">
            <h2>Single Product</h2>
            <TextControl label="Insert Product Title:" value={props.attributes.product_title} onChange={updateProductTitle} style={{ fontSize: "20px" }} />
            <TextControl label="Insert Product URL:" value={props.attributes.product_url} onChange={updateProductURL} />
            <TextControl label="Insert Product Image URL:" value={props.attributes.product_image_url} onChange={updateProductImageURL} />
            <p style={{ fontSize: "13px", margin: "20px 0 8px 0" }}>Features:</p>
            {props.attributes.product_features.map(function (feature, index) {
                return (
                    <Flex>
                        <FlexBlock>
                            <TextControl placeholder="add feature.." value={feature} onChange={newValue => {
                                const newFeatures = props.attributes.product_features.concat([])
                                newFeatures[index] = newValue
                                props.setAttributes({ product_features: newFeatures })
                            }} />
                        </FlexBlock>
                        <FlexItem>
                            <Button isLink className="attention-delete" onClick={() => deleteFeature(index)}>Delete</Button>
                        </FlexItem>
                    </Flex>
                )
            })}

            <Button isPrimary onClick={() => {
                props.setAttributes({ product_features: props.attributes.product_features.concat([""]) })
            }}>Add another feature</Button>
        </div>
    )
}

function SaveComponent() {
    return null
}