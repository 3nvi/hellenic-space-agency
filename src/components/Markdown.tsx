import React from 'react';
import ReactMarkdown from 'react-markdown';

const renderers = {
  link: ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ),
};

const Markdown: React.FC = ({ children }) => {
  return (
    <ReactMarkdown className="markdown" renderers={renderers}>
      {children as string}
    </ReactMarkdown>
  );
};

export default Markdown;
