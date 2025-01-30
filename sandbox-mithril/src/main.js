import './style.css'
import m from 'mithril'

const model = {
  cores: null
}

const app = {
  view: () => [
    m('.banner', "OpenShift Calculator - super beta"),
    m('.wrapper',
      m('.infra',
        m('.node-info',
          m('.subject', 'enter the number of each of the following'),
          m('label.control', {for: 'control'}, 'Control Nodes'),
          m('input',
            { type: 'number',
              id: 'control',
              min: 1
            }
          ),
          m('label.worker', {for: 'worker'}, 'Worker Nodes'),
          m('input',
            { type: 'number',
              id: 'worker',
              min: 1
            }
          ),
          m('label.infra', {for: 'infra'}, 'Infra Nodes'),
          m('input',
            { type: 'number',
              id: 'infra',
              min: 1
            }
          )
        )
      )
    )
  
  
  
  
  
  ]
}

m.mount(document.body, app)
