# 4aru5h.github.io

The front door for my GitHub Pages projects. Lives at [4aru5h.github.io](https://4aru5h.github.io).

Plain HTML, CSS and a bit of JavaScript. No build step.

## Adding a project

Edit `projects.js` and add an entry:

```js
{
  slug: "my-project",          // links to /my-project/
  name: "My Project",
  blurb: "One or two short sentences.",
  tags: ["tag", "another"],
  icon: "spark",               // bolt | people | spark | cube | wave | grid
  tone: "green"                // tomato | blue | green | sun
}
```

Make sure `https://4aru5h.github.io/my-project/` actually loads first.

## Files

- `index.html` - page structure
- `styles.css` - all styling
- `projects.js` - the project list
- `app.js` - renders the cards, plus the "surprise me" button

## License

MIT
