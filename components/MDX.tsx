'use client'
import { MDXProvider } from "@mdx-js/react"
import Markdown from "markdown-to-jsx"

// Define custom components for Markdown rendering
const components = {
  // Example of a custom styled description component
  Description: ({ children }: any) => (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "1rem",
        marginBottom: "1rem"
      }}
    >
      {children}
    </div>
  )
}

// Custom Markdown renderer
const MarkdownRenderer = ({ children }: any) => (
  <MDXProvider components={components}>
    <Markdown>{children}</Markdown>
  </MDXProvider>
)

export default MarkdownRenderer
