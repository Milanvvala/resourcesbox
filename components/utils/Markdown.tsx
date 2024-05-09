import ReactMarkdown from "react-markdown"

interface MarkdownProps {
  children: string
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      className="space-y-3 prose prose-invert"
      components={{ p: 'p', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', ul: 'ul', ol: 'ol', li: 'li', blockquote: 'blockquote', code: 'code', pre: 'pre' }}

    >
      {children}
    </ReactMarkdown>
  )
}