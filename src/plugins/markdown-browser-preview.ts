import type { Plugin } from 'unified';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const browserPreviewPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'html', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      
      if (node.value.includes('browser-preview-start')) {
        let endIndex = -1;
        
        // Find the matching end comment
        for (let i = index + 1; i < parent.children.length; i++) {
          const child = parent.children[i];
          if (child.type === 'html' && child.value.includes('browser-preview-end')) {
            endIndex = i;
            break;
          }
        }

        if (endIndex !== -1) {
          // Extract the content between comments
          const content = parent.children
            .slice(index + 1, endIndex)
            .map(child => child.type === 'text' ? child.value : '')
            .join('')
            .trim();

          // Replace the content with the component
          parent.children.splice(index, endIndex - index + 1, {
            type: 'html',
            value: `<BrowserPreview>${content}</BrowserPreview>`
          });
        }
      }
    });
  };
};

export default browserPreviewPlugin; 