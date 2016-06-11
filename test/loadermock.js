import cssHook from 'css-modules-require-hook';
import requireHacker from 'require-hacker';
import { readFileSync } from 'fs';
import mime from 'mime';

const fakeComponentString = `
  require('react').createClass({
    render() {
      return null;
    }
  })
`;

// for style loaders
cssHook({
  extensions: ['.css']
});

// for file loaders
requireHacker.hook('jpg', path => `module.exports = '${path}'`);


// for url loaders
requireHacker.hook('png', path => {
  const dataUrlBase64 = `data:${`${mime.lookup(path)};`}base64,${readFileSync(path).toString('base64')}`;
  return `module.exports = '${dataUrlBase64}'`;
});

// for fake component
requireHacker.hook('svg', path => `module.exports = ${fakeComponentString}`);
