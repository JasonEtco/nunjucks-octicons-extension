const nunjucks = require('nunjucks')
const Extension = require('.')

describe('nunjucks-octicons-extension', () => {
  let env

  beforeEach(() => {
    env = nunjucks.configure()
    env.addExtension('octicon', Extension)
  })

  it('renders the correct octicon', () => {
    const actual = env.renderString('{% octicon "hubot" %}')
    expect(actual).toMatchSnapshot()
  })

  it('renders the correct octicon with options', () => {
    const actual = env.renderString('{% octicon "hubot", height="64", width="64", class="m-1" %}')
    expect(actual).toMatchSnapshot()
  })

  it('throws if the request octicon does not exist', () => {
    try {
      env.renderString('{% octicon "pizza" %}')
    } catch (e) {
      expect(e).toMatchSnapshot()
    }
  })
})
