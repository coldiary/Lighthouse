import React from 'react'
import MarkdownIt from 'markdown-it'
import { DeleteButton, Card } from '../../Shared/Components'
import { EditableText } from '@blueprintjs/core'
import MonacoEditor from 'react-monaco-editor'

const md = new MarkdownIt()

const editorOptions = {
    scrollbar: { vertical: 'hidden' },
    scrollBeyondLastLine: false,
    codeLens: false
}

const Note = ({ note, update, remove, editorTheme }) =>
    <div className="Note">
        <DeleteButton className="trash-btn" onConfirm={() => remove(note)} title={`Delete ${note.title}`}>
            Do you really want to delete this note ? You won't be able to recover it.
        </DeleteButton>
        <h2><EditableText value={note.title} onChange={value => update({...note, title: value})} /></h2>
        <div className="editor">
            <Card noPadding className="source">
                <MonacoEditor width="inherit" height="600" language="markdown" options={editorOptions} theme={editorTheme}
                    value={note.content} onChange={value => update({...note, content: value})} />
            </Card>
            <Card className="preview"><div className="markdown-body" dangerouslySetInnerHTML={{__html: md.render(note.content)}}></div></Card>
        </div>
    </div>

export default Note