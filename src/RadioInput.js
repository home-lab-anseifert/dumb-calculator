import m from 'mithril'
import { model } from './model.js'

export const RadioInput = {
	view: ({ attrs: { name, value } }) =>
		m('label',
			m('input', {
					type: 'radio',
					name,
					checked: model[name] === value,
					onclick: () => { model.cores = value }
				}
			),
			value
		)
}