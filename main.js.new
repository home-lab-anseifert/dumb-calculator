import m from 'mithril'

const model = {
  yesno: "Yes"
}

const app = {
  view: () => [
    m('h1', "Radio"),
    ["Yes", "No"].map(x =>
      m('label',
        m('input', {
          type: 'radio',
          id: x,
          name: 'test',
          checked: model.yesno === x,
          onchange: () => model.yesno = x,
        }),
        x
      )
    ), 
    m('pre', JSON.stringify(model))
  ]
}

m.mount(document.body, app)