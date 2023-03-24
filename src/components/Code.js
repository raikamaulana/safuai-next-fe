import dynamic from 'next/dynamic';
import React from 'react'
const { prism } = dynamic(() => import('react-syntax-highlighter/dist/esm/styles/prism'), { ssr: false });
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter/dist/esm/default-highlight'), { ssr: false });

export const Code = ({ code, language }) => {
    return (
        <SyntaxHighlighter
            language={language}
            className="code-snippet"
            style={prism}
            showLineNumbers={true}
        >
            {code}
        </SyntaxHighlighter>
    )
}
