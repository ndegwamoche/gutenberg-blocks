/**
 * ### 4. Pros and Cons Block

**File**: `pros-cons.js`

**Description**: This block creates a product pros and cons table.

**Usage**:
1. Add the Pros and Cons block to your post or page.
2. Input the pros and cons of the product in the respective fields.
3. The block will display the pros and cons in a structured table format.
 */
import {
  Flex,
  FlexBlock,
  FlexItem,
  TextControl,
  Button,
  Dashicon
} from "@wordpress/components";

wp.blocks.registerBlockType("rgblocktheme/pros-cons", {
  title: "RG Pros and Cons",
  icon: "shield",
  attributes: {
    pros: {
      type: "array",
      default: []
    },
    cons: {
      type: "array",
      default: []
    }
  },
  edit: EditComponent,
  save: () => null
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { pros, cons } = attributes;

  const onAddRow = type => {
    const newItems = [...attributes[type], ""];
    setAttributes({ [type]: newItems });
  };

  const onDeleteRow = (type, index) => {
    const newItems = [...attributes[type]];
    newItems.splice(index, 1);
    setAttributes({ [type]: newItems });
  };

  const onChangeItem = (type, index, newValue) => {
    const newItems = [...attributes[type]];
    newItems[index] = newValue;
    setAttributes({ [type]: newItems });
  };

  return (
    <div className="paying-attention-edit-block">
      <Flex>
        <FlexBlock>
          <h3>Pros</h3>
          {pros.map((pro, index) => (
            <div key={index} className="input-with-icon">
              <Flex>
                <FlexBlock style={{ flex: "3" }}>
                  <TextControl
                    value={pro}
                    onChange={newValue => onChangeItem("pros", index, newValue)}
                  />
                </FlexBlock>
                <FlexBlock>
                  <Button
                    isDestructive
                    onClick={() => onDeleteRow("pros", index)}
                    className="delete-icon-button"
                  >
                    <Dashicon icon="trash" />
                  </Button>
                </FlexBlock>
              </Flex>
            </div>
          ))}
          <Button isPrimary onClick={() => onAddRow("pros")}>
            Add Pros
          </Button>
        </FlexBlock>
        <FlexBlock>
          <h3>Cons</h3>
          {cons.map((con, index) => (
            <div key={index} className="input-with-icon">
              <Flex>
                <FlexBlock style={{ flex: "3" }}>
                  <TextControl
                    value={con}
                    onChange={newValue => onChangeItem("cons", index, newValue)}
                  />
                </FlexBlock>
                <FlexBlock>
                  <Button
                    isDestructive
                    onClick={() => onDeleteRow("cons", index)}
                    className="delete-icon-button"
                  >
                    <Dashicon icon="trash" />
                  </Button>
                </FlexBlock>
              </Flex>
            </div>
          ))}
          <Button isPrimary onClick={() => onAddRow("cons")}>
            Add Cons
          </Button>
        </FlexBlock>
      </Flex>
    </div>
  );
}
