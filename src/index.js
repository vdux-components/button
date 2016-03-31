/**
 * Imports
 */

import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import {Tooltip, Button} from 'vdux-ui'
import element from 'vdux/element'
import omit from '@f/omit'

/**
 * Constants
 */

const filterProps = omit([
  'ttPlacement', 'tooltip', 'ttSpace', 'hoverStyle', 'style',
  'onMouseEnter', 'onMouseLeave', 'ttUi', 'ui', 'highlight', 'bgColor'
])

/**
 * <Button/> Container component
 *
 * Manages hover state and orchestrates other components
 */

function render ({props, state, local, children}) {
  const {
    tooltip, ttPlacement, bgColor = 'primary', ui = Button,
    ttUi = Tooltip, highlight = true, hoverStyle = {}, style = {}
  } = props

  const {hover} = state
  const Btn = ui
  const TtUi = ttUi

  const tt = tooltip && (
    <TtUi show={hover} placement={ttPlacement}>
      {tooltip}
    </TtUi>
  )

  return (
    <Btn
      {...filterProps(props)}
      onMouseEnter={[props.onMouseEnter, local(mouseEnter)]}
      onMouseLeave={[props.onMouseLeave, local(mouseLeave)]}
      highlight={highlight && hover}
      style={{...style, ...(hover ? hoverStyle : {})}}>
      {children}
      {tt}
    </Btn>
  )
}

/**
 * Actions
 */

const mouseEnter = createAction('<Button/>: Hover over')
const mouseLeave = createAction('<Button/>: Hover out')

/**
 * Reducer
 */

const reducer = handleActions({
  [mouseEnter]: state => ({...state, hover: true}),
  [mouseLeave]: state => ({...state, hover: false})
})

/**
 * Exports
 */

export default {
  render,
  reducer
}
