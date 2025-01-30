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
          m('label.control', { for: 'control' }, 'Control Nodes'),
          m('input',
            {
              type: 'number',
              id: 'control',
              min: 1
            }
          ),
          m('label.worker', { for: 'worker' }, 'Worker Nodes'),
          m('input',
            {
              type: 'number',
              id: 'worker',
              min: 1
            }
          ),
          m('label.infra', { for: 'infra' }, 'Infra Nodes'),
          m('input',
            {
              type: 'number',
              id: 'infra',
              min: 1
            }
          ),
          m('.core-count', "please enter the number of cores per server"),
          [32, 64, 128].map(x => 
            m('label', 
              m('input', { 
                type: 'radio', 
                id: x, 
                name: 'cores', 
                checked: model.cores === x, 
                onchange: () => model.cores = x 
              } 
            ), 
            x 
          )
        ),
        m('.storage-info', 
          m('.subject', 'enter in your storage information (GB)'),
          m('label.storage', { for: 'localdisk' }, 'Local Disk'),
          m('input',
            {
              type: 'number',
              id: 'localdisk',
              min: 1
            }
          ),
          m('label.storage', { for: 'file' }, 'File Storage'),
          m('input',
            {
              type: 'number',
              id: 'file',
              min: 1
            }
          ),
          m('label.storage', { for: 'block' }, 'Block Srtorage'),
          m('input',
            {
              type: 'number',
              id: 'block',
              min: 1
            }
          ),
          m('label.storage', { for: 'object' }, 'Object Storage'),
          m('input',
            {
              type: 'number',
              id: 'object',
              min: 1
            }
          )
        ),
        m('.totals-info',
          m('.subject', 'Totals for Infrastructure'),
            m('.t-cpu', 'CPU Total',
              m('.t-int')
            ),
            m('.t-mem', 'Memory Total',
              m('.t-int')
            ),
            m('.t-ld', 'Local Disk Total',
              m('.t-int')
            ),
            m('.t-cpu', 'File Disk Total',
              m('.t-int')
            ),
            m('.t-cpu', 'Block Disk Total',
              m('.t-int')
            ),
            m('.t-cpu', 'Object Storage Total',
              m('.t-int')
             )
          )
       )
    )
  ]
}

m.mount(document.body, app);