/**
 * Imports
 */

import trigger from '@f/trigger-event'
import element from 'vdux/element'
import vdux from 'vdux/dom'
import Button from '../src'
import test from 'tape'

/**
 * Tests
 */

test('should work', t => {
  const {render, subscribe} = vdux()
  const off = subscribe(() => {})
  let node

  node = render(<Button/>)
  t.equal(node.style.backgroundColor, 'rgb(0, 136, 238)')
  trigger(node, 'mouseenter')

  node = render(<Button/>)
  t.equal(node.style.backgroundColor, 'rgb(10, 149, 255)')

  off()
  t.end()
})
