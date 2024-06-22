import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface MarkdownEditorProps {
  className?: string;
}

export function MarkdownEditor({ className = '' }: MarkdownEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none w-full',
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(`
        <h3>Smart Summary</h3>
        <p>Let the ai automatically generate markdown summaries of your topics. </p>
        <br /> 
        <p>This is a <em>live</em> editor.</p>
        <ul>
          <li>Edit me!</li>
          <li>See the changes in real-time.</li>
        </ul>
      `);
    }
  }, [editor]);

  return (
    <div className={`h-full overflow-y-auto ${className}`}>
      <EditorContent 
        editor={editor} 
        className="text-right [&_.ProseMirror]:text-right [&_.ProseMirror_ul]:pl-0 [&_.ProseMirror_ul]:pr-4"
      />
    </div>
  );
}
