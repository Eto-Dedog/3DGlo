import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import valid from './modules/valid'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'
import scroll from './modules/scroll'

timer('28 feb 2022')
menu()
modal()
valid()
tabs()
slider()
calc()
scroll()
sendForm({
    formId: "form1",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
  sendForm({
    formId: "form2",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
  sendForm({
    formId: "form3",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });