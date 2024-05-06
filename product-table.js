/**
 * ### 3. Product Table Block

**File**: `product-table.js`

**Description**: This block creates an Amazon product table.

**Usage**:
1. Add the Product Table block to your post or page.
2. Input the product ASIN (Amazon Standard Identification Number) in the provided field.
3. The block will automatically fetch and display information about the product in a table format.
 */
import { Flex, FlexBlock, TextControl } from "@wordpress/components";

wp.blocks.registerBlockType("rgblocktheme/product-table", {
  title: "RG Product Table",
  icon: "editor-table",
  attributes: {
    column1Text1: {
      type: "string",
      default: ""
    },
    column1Text2: {
      type: "string",
      default: ""
    },
    column1Text3: {
      type: "string",
      default: ""
    },
    column1Text4: {
      type: "string",
      default: ""
    },
    column2Text1: {
      type: "string",
      default: ""
    },
    column2Text2: {
      type: "string",
      default: ""
    },
    column2Text3: {
      type: "string",
      default: ""
    },
    column2Text4: {
      type: "string",
      default: ""
    },
    column3Text1: {
      type: "string",
      default: ""
    },
    column3Text2: {
      type: "string",
      default: ""
    },
    column3Text3: {
      type: "string",
      default: ""
    },
    column3Text4: {
      type: "string",
      default: ""
    },
    column4Text1: {
      type: "string",
      default: ""
    },
    column4Text2: {
      type: "string",
      default: ""
    },
    column4Text3: {
      type: "string",
      default: ""
    },
    column4Text4: {
      type: "string",
      default: ""
    }
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;

  const {
    column1Text1,
    column1Text2,
    column1Text3,
    column1Text4,
    column2Text1,
    column2Text2,
    column2Text3,
    column2Text4,
    column3Text1,
    column3Text2,
    column3Text3,
    column3Text4,
    column4Text1,
    column4Text2,
    column4Text3,
    column4Text4
  } = attributes;

  const onChangeText = (column, textNumber, newText) => {
    const attributeName = `column${column}Text${textNumber}`;
    setAttributes({ [attributeName]: newText });
  };

  return (
    <div className="paying-attention-edit-block">
      <div>
        <h2>Products Table</h2>
      </div>
      <Flex>
        <FlexBlock>
          <TextControl
            label="Product Title 1"
            value={column1Text1}
            onChange={newText => onChangeText(1, 1, newText)}
          />
          <TextControl
            label="Product SubTitle 1"
            value={column1Text2}
            onChange={newText => onChangeText(1, 2, newText)}
          />
          <TextControl
            label="Product Amazon URL 1"
            value={column1Text3}
            onChange={newText => onChangeText(1, 3, newText)}
          />
          <TextControl
            label="Product Image URL 1"
            value={column1Text4}
            onChange={newText => onChangeText(1, 4, newText)}
          />
        </FlexBlock>
        <FlexBlock>
          <TextControl
            label="Product Title 2"
            value={column2Text1}
            onChange={newText => onChangeText(2, 1, newText)}
          />
          <TextControl
            label="Product SubTitle 2"
            value={column2Text2}
            onChange={newText => onChangeText(2, 2, newText)}
          />
          <TextControl
            label="Product Amazon URL 2"
            value={column2Text3}
            onChange={newText => onChangeText(2, 3, newText)}
          />
          <TextControl
            label="Product Image URL 2"
            value={column2Text4}
            onChange={newText => onChangeText(2, 4, newText)}
          />
        </FlexBlock>
        <FlexBlock>
          <TextControl
            label="Product Title 3"
            value={column3Text1}
            onChange={newText => onChangeText(3, 1, newText)}
          />
          <TextControl
            label="Product SubTitle 3"
            value={column3Text2}
            onChange={newText => onChangeText(3, 2, newText)}
          />
          <TextControl
            label="Product Amazon URL 3"
            value={column3Text3}
            onChange={newText => onChangeText(3, 3, newText)}
          />
          <TextControl
            label="Product Image URL 3"
            value={column3Text4}
            onChange={newText => onChangeText(3, 4, newText)}
          />
        </FlexBlock>
        <FlexBlock>
          <TextControl
            label="Product Title 4"
            value={column4Text1}
            onChange={newText => onChangeText(4, 1, newText)}
          />
          <TextControl
            label="Product SubTitle 4"
            value={column4Text2}
            onChange={newText => onChangeText(4, 2, newText)}
          />
          <TextControl
            label="Product Amazon URL 4"
            value={column4Text3}
            onChange={newText => onChangeText(4, 3, newText)}
          />
          <TextControl
            label="Product Image URL 4"
            value={column4Text4}
            onChange={newText => onChangeText(4, 4, newText)}
          />
        </FlexBlock>
      </Flex>
    </div>
  );
}

function SaveComponent() {
  return null;
}
