# nunjucks-octicons-extension

## Usage

```js
const nunjucks = require('nunjucks');
const env = nunjucks.configure();

// Add the extension to your environment
env.addExtension('Octicon', require('nunjucks-octicons-extension'));

// Simple usage
env.renderString('Meet Hubot! {% octicon "hubot" %}')

// Or pass some arguments
env.renderString('Meet Hubot! {% octicon "hubot", height="64", width="64", class="m-1" %}')
```