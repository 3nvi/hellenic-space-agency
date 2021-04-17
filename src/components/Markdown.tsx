import React from 'react';
import ReactMarkdown, { PluggableList } from 'react-markdown';
import gfm from 'remark-gfm';

const components = {
  a: ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ),
};

const plugins = [gfm] as PluggableList;

const Markdown: React.FC = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={plugins} className="markdown" components={components}>
      {children as string}
    </ReactMarkdown>
  );
};

export default Markdown;
