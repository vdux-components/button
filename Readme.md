
# button

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Button [container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.5pu95rfmr) component

## Installation

    $ npm install vdux-button

## Usage

This component follows the container/presentational component pattern as outlined by Dan Abramov [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.5pu95rfmr). This is a container component, and it holds state around buttons (in this case, just `hover` state), and orchestrates a few presentational components to generate a useful button abstraction.

Example:

```javascript
import Button from 'vdux-button'

function render () {
  return (
    <Button tooltip="mystery button">
      Click Me!
    </Button>
  )
}
```

## Using different presenters

If you want to use a different presentational button, you can pass that in the `ui` prop, e.g.

```javscript
import {LogoButton} from 'vdux-ui'

function render () {
  return (
    <Button ui={LogoButton} tooltip='Login with Google' logo='images/google_plus.png'>
      Google Login
    </Button>
  )
}
```

## API - props

  * `ui` - The presentational button component to use for rendering. Will receive all props not specifically destined somewhere else (e.g. `tooltip`).
  * `ttUi` - The tooltip presenter
  * `highlight` - Whether or not to highlight the button on hover. Defaults to `true`.
  * `hoverStyle` - Styles to add when the button is hovered. If enabled, overrides the `true` default of `highlight`.
  * `tooltip` - Tooltip message, shows up on hover
  * `ttPlacement` - Tooltip placement (e.g. top/right/bottom/left)
  * `ttSpace` - How far away the tooltip is from the button

## License

MIT
