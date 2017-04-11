/**
 * Included as a Mocha compiler to return null when encountering styles
 */
function noop() {
  return null
}

require.extensions['.css'] = noop
require.extensions['.scss'] = noop
require.extensions['.png'] = noop
require.extensions['.jpg'] = noop
