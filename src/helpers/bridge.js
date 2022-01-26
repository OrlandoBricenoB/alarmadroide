const bridge = {}

bridge.callbacks = []

bridge.register = ( { callback, id } ) => {
  if (bridge.callbacks.find(_cb => _cb.id === id)) return false
  bridge.callbacks.push({
    callback,
    id
  })
}

bridge.send = (data, id) => {
  const callbacksTo = bridge.callbacks.filter(cb => cb.id === id)
  if (callbacksTo.length === 0) return false
  callbacksTo.map(({callback}) => {
    callback(data)
  })
  return true
}

export default bridge
