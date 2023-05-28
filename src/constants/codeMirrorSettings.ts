import { javascript } from '@codemirror/lang-javascript';
import { CreateThemeOptions, createTheme, Settings } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

const CODEMIRROR_SETTINGS: Settings = {
  background: 'transparent',
  foreground: 'rgba(73, 193, 43, 1)',
  caret: '#ffffff',
  selection: '#036dd626',
  selectionMatch: '#036dd626',
  lineHighlight: 'transparent',
  gutterForeground: 'rgba(193, 43, 61, 1)',
};

const CODEMIRROR_STYLES: Omit<CreateThemeOptions, 'settings'> = {
  theme: 'dark',
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.bool, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.null, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.keyword, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.operator, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.className, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.definition(t.typeName), color: 'rgba(73, 193, 43, 1)' },
    { tag: t.typeName, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.angleBracket, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.tagName, color: 'rgba(73, 193, 43, 1)' },
    { tag: t.attributeName, color: 'rgba(73, 193, 43, 1)' },
  ],
};

export const CODEMIRROR_THEME_INPUT = createTheme({
  ...CODEMIRROR_STYLES,
  settings: { ...CODEMIRROR_SETTINGS, gutterBackground: '#112429' },
});

export const CODEMIRROR_THEME_OUTPUT = createTheme({
  ...CODEMIRROR_STYLES,
  settings: { ...CODEMIRROR_SETTINGS, gutterBackground: 'transparent' },
});

export const CODEMIRROR_EXTENSIONS = [javascript({ jsx: true })];
