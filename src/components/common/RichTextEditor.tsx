"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean; // ✅ added disabled prop
}

export default function RichTextEditor({ value, onChange, placeholder, disabled }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || "Start typing...",
      }),
    ],
    content: value,
    editable: !disabled, // ✅ make editor readonly when disabled
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose focus:outline-none min-h-[150px]",
      },
    },
    immediatelyRender: false,
  });

  // Sync editor when `value` changes externally
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  // Dynamically toggle editable state when `disabled` changes
  useEffect(() => {
    if (editor) {
      editor.setEditable(!disabled);
    }
  }, [disabled, editor]);

  return (
    <div className={`border rounded-md p-2 min-h-[150px] ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <EditorContent editor={editor} />
    </div>
  );
}
