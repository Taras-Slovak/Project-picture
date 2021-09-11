import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTesxtInputs from './modules/checkTesxtInputs';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    sliders('.feedback-slider-item','horizontal','.main-prev-btn','.main-next-btn');
    sliders('.main-slider-item','vertical');
    forms();
    mask('[name="phone"]');
    checkTesxtInputs('[name="name"]');
    checkTesxtInputs('[name="message"]');
});
