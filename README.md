Steps:
```
npm i
npm run storybook
```

Expected error on first story:
```
TypeError: Cannot read properties of undefined (reading 'every')
    at convert (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:52:28)
    at convert4 (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:143:59)
    at tsFactory (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:345:27)
    at extractProp (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:389:92)
    at http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:380:33
    at Array.map (<anonymous>)
    at extractComponentSectionObject (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:378:26)
    at extractComponentProps (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-XZPANCAW.js?v=3bd88a06:385:125)
    at getPropDefs (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/@storybook_react_dist_entry-preview-docs__mjs.js?v=3bd88a06:6200:24)
    at extractProps (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/@storybook_react_dist_entry-preview-docs__mjs.js?v=3bd88a06:6212:44)
```