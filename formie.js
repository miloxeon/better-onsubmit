function formie (cb) {
	return e => {
		e.preventDefault()
		const form = e.target

		if (!form) {
			console.warn('No form detected by formie')
			return
		}

		const rawChildren = form.querySelectorAll('*')
		const children = Array.prototype.slice.call(rawChildren)
		const inputs = children.filter(node => node.type === 'radio'
			? node.checked
			: Boolean(node.name)
		)
	
		let result = {}
	
		inputs.forEach(input => {
			let value;

			if (input.type === 'checkbox') {
				value = input.checked
			} else if (input.type === 'file') {
				value = input.files
			} else {
				value = input.value
			}

			result[input.name] = value
		})
	
		cb(result)
	}
}
