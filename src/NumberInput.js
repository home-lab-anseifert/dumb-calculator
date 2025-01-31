import m from 'mithril'
import { model } from './model.js'

export const NumberInput = {
	view: ({ attrs: { id, className = id, min = 1, text }}) =>
		m('label',
			{ for: id, className },
			text,
			m('input',
				{
					id,
					min,
					type: 'number',
					value: model[id],
					oninput: e => { model[id] = +e.target.value }
				}
			),
		)
}