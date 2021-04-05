# Next.js Blog

## Using Styled Components

To use styled-components in Next.js, you need to add a babel plugin called `babel-plugin-styled-components`.

Add the following `.babelrc.json` to the root folder to add this plugin.

```json
{
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-styled-components"]
}
```

## Formatting Markdown Files

Prepend each `.md` files with **YAML Front Matter** section. YAML Front Matters can be parsed using a `gray-matter` library.

```md
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Here is the main content...
```

## Client-side Rendering

### When

- You don't need SEO on a page
- Need to keep it private from search engine (e.g. a user dashboard)
- you need to fetch external data to be rendered at request

### How

- Statically generate parts of the page that do not require external data.
- On page load, fetch external data and populate the remaining parts.

## Dynamic Routing in Next.js

### `getStaticPaths`

If a page dynamic routes - the file name for the page contains `[param]` - and uses`getStaticProps`, Next.js will use the returned object from `getStaticPaths` to pre-render all possible pages with the paths included in that object.

```ts
// getStaticPaths must return the following object
interface StaticPaths {
  paths: {
    params: {
      id: string; // Next.js will create pages using id as the name of the page..
    };
  }[];
  fallback: boolean;
}
```

You can access the value of `id` from context object passed into `getStaticProps`

```ts
export async function getStaticProps(context) {
  const {
    params, // contains route parameters (eg. [id].js => { id: idInside[] })
  } = context;

  console.log(params); // { id: 'ssg-ssr' }
  // pass post id to access local .md file and parse them into data
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
```
