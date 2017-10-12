# Pigment Hugo

**A Hugo boilerplate for creating websites**

Boilerplate for using [Hugo](https://gohugo.io/) as a static site generator and [NPM Scripts](https://docs.npmjs.com/cli/run-script) as your asset pipeline.

Setup uses [PostCSS](http://postcss.org/), [SugarSS](https://github.com/postcss/sugarss) and [Babel](https://babeljs.io/) for CSS and JavaScript compiling/transpiling.

## Usage

### Prerequisites

Install Hugo using Homebrew.

```bash
brew install hugo
```

To verify your new install:

```bash
hugo version
```

You need to have the latest/LTS [node](https://github.com/tj/n) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Pigment Hugo Boilerplate.

Next step, clone this repository and run:

```bash
npm install
```

This will install all packages necessary to run Pigment Hugo and it's tasks.

### Development

While developing your website, use:

```bash
npm run dev
```

Then visit http://localhost:1313/ to preview your new website.
Setup uses built in Hugo server for serving page and live reloading assets.

### Static build

To build a static version of the website inside the `/public` folder, run:

```bash
npm run build
```

See [package.json](https://github.com/anaparunov/pigment-hugo-boilerplate/blob/master/package.json) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--style              // CSS files in the root of this folder will end up in /css/...
|  |--script             // app.js will be compiled to /app.js with babel
```

## Basic Concepts

More about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder ends up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/script/app.js` file is the entrypoint and will be built to `/public/app.js`.

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file directly under the `src/style/` folder will get compiled with to `/public/{filename}.css`.
Import statements will be resolved as part of the build.

## Deployment

Run

```bash
npm run build
```
to get minifed version of website, ready for deploy.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

You can also use netlify-cli for deploying /public folder.

This project is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.

Inspired by [Viktor Hugo Boilerplate](https://github.com/netlify/victor-hugo)
