import './style.css'
import m from 'mithril'

const model = { 
  control: null,
  worker: null,
  infra: null,
  cores: null,
  local: null,
  file: null,
  block: null,
  object: null,
  coretotal: null,
  memory: null,
  localtotal: null,
  filetotal: null,
  blocktotal: null,
  objtotal: null,
  totalnodes: null,
  minRequireCoreControl: 4,
  minRequireCoreWorker: 2,
  minRequireCoreInfra: null,
  minRequireMemControl: 16,
  minRequireMemWorker: 8,
  minRequireMemInfra: null,
  minRequireDiskControl: 100,
  minRequireDiskWorker: 100,
  minRequireDiskInfra: null,
  minRequireBootstrapCpu: 4,
  minRequireBootstrapMem: 16,
  minRequireBootstrapStorage: 100
 }

const app = {
  view: () => [
    m('.banner', "OpenShift Calculator - super beta"),
    m('.wrapper',
      m('.infra',
        m('.node-info',
          m('.subject', 'enter the server count for your cluster'),
          m('label.control', { for: 'control' }, 'Control Nodes'),
          m('input',
            {
              type: 'number',
              id: 'control',
              min: 1,
              oninput: () => model.control = event.target.value
            }
          ),
          m('label.worker', { for: 'worker' }, 'Worker Nodes'),
          m('input',
            {
              type: 'number',
              id: 'worker',
              min: 1,
              oninput: () => model.worker = event.target.value
            }
          ),
          m('label.infra', { for: 'infra' }, 'Infra Nodes'),
          m('input',
            {
              type: 'number',
              id: 'infra',
              min: 1,
              oninput: () => model.infra = event.target.value
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
          m('.mem', "please enter the amount of memory per server (GB)" ),
          m('input', {
            type: Number,
            id: 'memory',
            min: 1,
            onchange: () => model.memory = event.target.value
            }
          )
        ),
        m('.storage-info', 
          m('.subject', 'enter in your storage information (GB)'),
          m('label.storage', { for: 'localdisk' }, 'Local Disk'),
          m('input',
            {
              type: 'number',
              id: 'localdisk',
              min: 1,
              onchange: () => model.localtotal = event.target.value
            }
          ),
          m('label.storage', { for: 'file' }, 'File Storage'),
          m('input',
            {
              type: 'number',
              id: 'file',
              min: 1,
              onchange: () => model.filetotal = event.target.value
            }
          ),
          m('label.storage', { for: 'block' }, 'Block Srtorage'),
          m('input',
            {
              type: 'number',
              id: 'block',
              min: 1,
              onchange: () => model.blocktotal = event.target.value
            }
          ),
          m('label.storage', { for: 'object' }, 'Object Storage'),
          m('input',
            {
              type: 'number',
              id: 'object',
              min: 1,
              onchange: () => model.objtotal = event.target.value
            }
          )
        ),
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