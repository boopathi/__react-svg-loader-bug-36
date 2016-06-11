Test for https://github.com/boopathi/react-svg-loader/issues/36

```sh
npm install
npm test
```

**Resolved**
> Mocha can use require hooks to deal with [universal javascript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.nueddnghh) import, such as [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) for `.js`.

use [require-hacker](https://github.com/halt-hammerzeit/require-hacker) to add hook to extensions of modules.
use [css-modules-require-hook](https://github.com/css-modules/css-modules-require-hook) for mocking [style](https://github.com/webpack/style-loader) & [css](https://github.com/webpack/css-loader) loader to load `.css` import.
use [mime]() and `fs` node module as [url-loader](https://github.com/webpack/url-loader).
use `path` node module as [file-loader](https://github.com/webpack/file-loader).
use a null react component mock for other component loader such as [react-svg-loader](https://github.com/boopathi/react-svg-loader) to load `.svg` as a react component.
