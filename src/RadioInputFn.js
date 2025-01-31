import m from 'mithril'
import model from './model.js'

export default ({ prop, value }) =>
		m('label',
			m('input', {
					type: 'radio',
					prop,
					checked: model[prop] === value,
					onclick: () => { model.cores = value }
				}
			),
			value
		)
