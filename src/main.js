import './style.css'
import m from 'mithril'
import { model } from './model.js'
import { NumberInput } from './NumberInput.js'
import { RadioInput } from './RadioInput.js'

const app = {
  view: () => [
    m('.banner', "OpenShift Calculator - super beta"),
    m('.wrapper',
      m('.infra',
        m('.node-info',
          m('.subject', 'enter the server count for your cluster'),
          m(NumberInput, { id: 'control', text: 'Control Nodes' }),
          m(NumberInput, { id: 'worker', text: 'Worker Nodes' }),
          m(NumberInput, { id: 'infra', text: 'Infra Nodes' }),
          m('.core-count', "please enter the number of cores per server"),
          [32, 64, 128].map(value => m(RadioInput, { name: 'cores', value })),
          m('.mem', "please enter the amount of memory per server (GB)" ),
          m(NumberInput, { id: 'memory' }),
        ),
        m('.storage-info',
          m('.subject', 'enter in your storage information (GB)'),
          m(NumberInput, { id: 'localtotal', clasName: 'storage', text: 'Local disk' }),
          m(NumberInput, { id: 'filetotal', clasName: 'storage', text: 'File Storage' }),
          m(NumberInput, { id: 'blocktotal', clasName: 'storage', text: 'Block Storage' }),
          m(NumberInput, { id: 'objtotal', clasName: 'storage', text: 'Object Storage' }),
        ),
        m('.totals-info',
          m('.subject', 'Totals for Infrastructure'),
            m('.t-int', 'CPU Total = ' + ((model.control * model.worker * model.infra) * model.cores)),
            m('.t-mem', 'Memory Total = ' + ( (model.control + model.worker + model.infra) * model.memory )),
            m('.t-ld', 'Local Disk Total = ' + ( model.localtotal )),
            m('.t-cpu', 'File Disk Total = ' + ( model.filetotal )),
            m('.t-cpu', 'Block Disk Total = ' + ( model.blocktotal )),
            m('.t-cpu', 'Object Storage Total = ' + ( model.objtotal )),
          )
       )
    )
  ]
}

m.mount(document.body, app);