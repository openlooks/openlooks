# Prism.js

Original files downloaded from https://cdnjs.com/libraries/prism

- `prism-core.min.js`
- `prism-markup.min.js`
- `prism-clike.min.js`
- `prism-javascript.min.js`
- `prism-jsx.min.js`

Combined file created by concatenation:

```bash
cat prism-core.min.js \
  prism-markup.min.js \
  prism-clike.min.js \
  prism-javascript.min.js \
  prism-jsx.min.js \
  > prism-combined.min.js
```

Combined file performs better on CDN.
