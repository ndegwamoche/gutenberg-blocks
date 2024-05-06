/**
 * ### 2. FAQ Block

**File**: `faq.js`

**Description**: This block creates a question and answer input for an FAQ section.

**Usage**:
1. Add the FAQ block to your post or page.
2. Input the question in the provided field.
3. Input the answer to the question in the textarea below.
 */
import {
  Flex,
  FlexBlock,
  TextControl,
  TextareaControl,
  Button
} from "@wordpress/components";

wp.blocks.registerBlockType("rgblocktheme/faq", {
  title: "RG FAQ",
  icon: "editor-help",
  attributes: {
    faqs: {
      type: "array",
      default: [{ question: "", answer: "" }]
    }
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { faqs } = attributes;

  const addNewFAQ = () => {
    const newFAQs = [...faqs, { question: "", answer: "" }];
    setAttributes({ faqs: newFAQs });
  };

  const deleteFAQ = index => {
    const newFAQs = [...faqs];
    newFAQs.splice(index, 1);
    setAttributes({ faqs: newFAQs });
  };

  const updateFAQ = (index, field, value) => {
    const newFAQs = [...faqs];
    newFAQs[index][field] = value;
    setAttributes({ faqs: newFAQs });
  };

  return (
    <div className="paying-attention-edit-block">
      <h2>FAQ’s (Frequently Asked Questions)</h2>
      {faqs.map((faq, index) => (
        <Flex key={index}>
          <FlexBlock>
            <TextControl
              label={`Question ${index + 1}`}
              value={faq.question}
              onChange={newValue => updateFAQ(index, "question", newValue)}
            />
            <TextareaControl
              label={`Answer ${index + 1}`}
              value={faq.answer}
              onChange={newValue => updateFAQ(index, "answer", newValue)}
            />
          </FlexBlock>
          <FlexBlock>
            <Button isDestructive onClick={() => deleteFAQ(index)}>
              Delete
            </Button>
          </FlexBlock>
        </Flex>
      ))}
      <Button isPrimary onClick={addNewFAQ}>
        Add New FAQ
      </Button>
    </div>
  );
}

function SaveComponent() {
  return null;
}
