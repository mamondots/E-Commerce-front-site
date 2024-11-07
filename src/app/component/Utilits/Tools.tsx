import {
  BiBold,
  BiCodeAlt,
  BiItalic,
  BiListOl,
  BiListUl,
  BiStrikethrough,
  BiUnderline,
} from "react-icons/bi";

import { ChainedCommands, Editor } from "@tiptap/react";

interface Props {
  editor: Editor | null;
  // onImageSelection?(): void;
}

const tools = [
  {
    task: "bold",
    icon: <BiBold size={20} />,
  },
  {
    task: "italic",
    icon: <BiItalic size={20} />,
  },
  {
    task: "underline",
    icon: <BiUnderline size={20} />,
  },
  {
    task: "strike",
    icon: <BiStrikethrough size={20} />,
  },
  {
    task: "code",
    icon: <BiCodeAlt size={20} />,
  },

  {
    task: "bulletList",
    icon: <BiListUl size={20} />,
  },
  {
    task: "orderedList",
    icon: <BiListOl size={20} />,
  },
] as const;

type TaskType = (typeof tools)[number]["task"];

const chainMethods = (
  editor: Editor | null,
  command: (chain: ChainedCommands) => ChainedCommands
) => {
  if (!editor) return;

  command(editor.chain().focus()).run();
};

import React, { FC } from "react";
import ToolButton from "./ToolButton";

const Tools: FC<Props> = ({ editor }) => {
  const handleOnClick = (task: TaskType) => {
    switch (task) {
      case "bold":
        return chainMethods(editor, (chain) => chain.toggleBold());
      case "italic":
        return chainMethods(editor, (chain) => chain.toggleItalic());
      case "underline":
        return chainMethods(editor, (chain) => chain.toggleUnderline());
      case "strike":
        return chainMethods(editor, (chain) => chain.toggleStrike());
      case "code":
        return chainMethods(editor, (chain) => chain.toggleCode());
      case "orderedList":
        return chainMethods(editor, (chain) => chain.toggleOrderedList());
      case "bulletList":
        return chainMethods(editor, (chain) => chain.toggleBulletList());
    }
  };
  return (
    <div className="flex items-center  gap-2">
      {tools.map((item) => (
        <div key={item.task}>
          <ToolButton
            onClick={() => handleOnClick(item.task)}
            active={editor?.isActive(item.task)}
          >
            {item.icon}
          </ToolButton>
        </div>
      ))}
    </div>
  );
};

export default Tools;
