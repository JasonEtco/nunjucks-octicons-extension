const nunjucks = require('nunjucks')
const octicons = require('octicons')

class OcticonExtension {
  constructor () {
    this.tags = ['octicon']
  }

  parse (parser, nodes) {
    const token = parser.nextToken()
    const args = parser.parseSignature(null, true)
    parser.advanceAfterBlockEnd(token.value)
    return new nodes.CallExtension(this, 'run', args)
  }

  run (context, data, args) {
    // Throw an error if the request octicon does not exist.
    if (!Object.prototype.hasOwnProperty.call(octicons, data)) {
      throw new Error(`Octicon ${data} does not exist`)
    }

    // Remove the __keywords prop, it messes with `toSVG()`
    if (args && args.__keywords) delete args.__keywords

    const result = octicons[data].toSVG(args)
    return new nunjucks.runtime.SafeString(result)
  }
}

module.exports = new OcticonExtension()
