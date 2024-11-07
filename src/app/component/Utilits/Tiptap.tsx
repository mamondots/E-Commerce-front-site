"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import Tools from "./Tools";
const extensions = [
  StarterKit,
  Underline,
  OrderedList,
  Placeholder.configure({
    placeholder: "Write something...",
  }),
];

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    // content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      <div className="py-2">
        <Tools editor={editor}></Tools>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
