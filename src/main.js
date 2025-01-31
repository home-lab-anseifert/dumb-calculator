import './style.css'
import m from 'mithril'
import model from './model.js'
import NumberInputFn from './NumberInputFn.js'
import RadioInputFn from './RadioInputFn.js'

const app = {
  view: () => [
    m('.banner', "OpenShift Calculator - super beta"),
    m('.wrapper',
      m('.infra',
        m('.node-info',
          m('.subject', 'enter the server count for your cluster'),
          NumberInputFn({ prop: 'control', text: 'Control Nodes' }),
          NumberInputFn({ prop: 'worker', text: 'Worker Nodes' }),
          NumberInputFn({ prop: 'infra', text: 'Infra Nodes' }),
          m('.core-count', "please enter the number of cores per server"),
          [32, 64, 128].map(value => RadioInputFn({ prop: 'cores', value })),
          m('.mem', "please enter the amount of memory per server (GB)" ),
          NumberInputFn({ prop: 'memory' }),
        ),
        m('.storage-info',
          m('.subject', 'enter in your storage information (GB)'),
          NumberInputFn({ prop: 'localtotal', clasName: 'storage', text: 'Local disk' }),
          NumberInputFn({ prop: 'localtotal', clasName: 'storage', text: 'Local disk' }),
          NumberInputFn({ prop: 'filetotal', clasName: 'storage', text: 'File Storage' }),
          NumberInputFn({ prop: 'blocktotal', clasName: 'storage', text: 'Block Storage' }),
          NumberInputFn({ prop: 'objtotal', clasName: 'storage', text: 'Object Storage' }),
        ),
        m('pre', JSON.stringify(model, null, 2)),
        m('.totals-info',
          m('.subject', 'Totals for Infrastructure'),
            m('.t-int', 'CPU Total = ' + ((model.control * model.worker * model.infra) * model.cores)),
            m('.t-mem', 'Memory Total = ' + ( (model.control * model.worker *model.infra) * model.memory )),
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