const omitInvalid = element =>
  element.type === 'radio' ?
  element.checked :
  Boolean(element.name)

const decisionMatrix = {
  'checkbox': node => node.checked,
  'file': node => node.files,
  'default': node => node.value
}

export default cb => e => {
  e.preventDefault()

  const form = e.target
  const rawChildren = form.querySelectorAll('*')
  const children = Array.prototype.slice.call(rawChildren)
  const inputs = children.filter(omitInvalid)

  let result = {}

  inputs.forEach(input => {
    result[input.name] = decisionMatrix[input.type] ?
      decisionMatrix[input.type](input) :
      decisionMatrix['default'](input)
  })

  cb(result)
}
