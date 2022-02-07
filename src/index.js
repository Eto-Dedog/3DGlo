import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import valid from './modules/valid'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('28 feb 2022')
menu()
modal()
valid()
tabs()
slider()
calc()
sendForm({
    formId: 'form1',
    someElem : [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

