import { javascript } from '@codemirror/lang-javascript';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const CODEMIRROR_THEME = createTheme({
  theme: 'dark',
  settings: {
    background: 'transparent', // rgba(6, 87, 105, 0.22)
    foreground: 'rgba(73, 193, 43, 1)',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: 'transparent',
    gutterBackground: 'transparent', // rgba(6, 87, 105, 0.3) transparent
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});

export const CODEMIRROR_EXTENSIONS = [javascript({ jsx: true })];
