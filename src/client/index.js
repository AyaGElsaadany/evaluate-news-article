import "babel-polyfill";

//js files
import {handleForm} from './js/formHandler'
import {checkURL} from './js/checkURL'

//include your scss file here
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

window.addEventListener('DOMContentLoaded', () => {
    // get the button for submit
    const btn = document.getElementsByClassName('btn-submit')[0];

    //add event listener to it when the click to call handleForm function
    btn.addEventListener('click', (e) => {
        Client.handleForm(e)
    })
})

export {checkURL, handleForm}
