import m from 'mithril'
import model from './model.js'

export default ({ prop, className = prop, min = 1, text }) =>
	m('label',
		{ className },
		text,
		m('input',
			{
				min,
				type: 'number',
				value: model[prop],
				oninput: e => {
					model[prop] = +e.target.value
				}
			}
		),
	)
