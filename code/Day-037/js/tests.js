/**
 * TProject Warm Up
 * Fun DOM Manipulation - Tests
 * Developed by: Robert Manolis - Milwaukie, OR - 2019
 */

(function () {
  'use strict';

  /* Variables to target DOM elements */
  const body = document.querySelector('body');

  const h1Check = document.querySelector('h1');
  const boatContCheck = document.querySelector('#boat-container');
  const boatImgCheck = document.querySelector('#boat-img');
  const mikeCheck = document.querySelector('#mike');


  /* Helper funcs to create el, append to parent, and set attras */
  const createEl = el => document.createElement(el);

  const appendEl = (parent, child) => {
    parent.appendChild(child);
  }

  const appendAndAddAttras = (parent, el, arrOfAttraPropValues) => {
    appendEl(parent, el);
    if (arrOfAttraPropValues) {
      for (let propValue of arrOfAttraPropValues) {
        el.setAttribute(propValue[0], propValue[1]);
      }
    }
  }
  /* End Section */


  /* Create test sepcific DOM els */
  const testBtn = createEl('BUTTON');
  testBtn.textContent = 'Test';
  appendAndAddAttras(body, testBtn, [
    ['id', 'test-btn']
  ]);

  const testMdl = createEl('DIV');
  appendAndAddAttras(body, testMdl, [
    ['id', 'test-mdl']
  ]);

  const mdlH2 = createEl('H2');
  mdlH2.textContent = 'Results';
  appendAndAddAttras(testMdl, mdlH2, [
    ['id', 'mdl-h1']
  ]);

  const mdlMsg = createEl('OL');
  appendAndAddAttras(testMdl, mdlMsg, [
    ['id', 'mdl-msg']
  ]);

  const mdlClose = createEl('BUTTON');
  mdlClose.textContent = 'Close';
  appendAndAddAttras(testMdl, mdlClose, [
    ['id', 'mdl-close']
  ]);
  /* End Section */


  /* Validate DOM el */
  const domCheck = (el, id) => {
    let message;
    const mdlMsgItm = createEl('LI');
    let is_valid = false;

    if (el) {
      message = `<span class='check'>&#10004;</span> The '${el.tagName}'' with id of '${id}' is present.`;
      mdlMsgItm.style.color = 'black';
      is_valid = true;
    } else {
      message = `The '${id}' element is either missing or has the wrong id.`;
      mdlMsgItm.style.color = 'red';
    }

    mdlMsgItm.innerHTML = message;
    appendAndAddAttras(mdlMsg, mdlMsgItm);
    return is_valid;
  }
  /* End Section */


  /* Validate attras */
  const attraCheck = (el, attra, val) => {
    let message;
    const mdlMsgItm = createEl('LI');

    if (el.getAttribute(attra) === val) {
      message = `<span class='check'>&#10004;</span> The '${el.id}' ${el.tagName} element has a '${attra}' property set to '${val}'.`;
      mdlMsgItm.style.color = 'black';
    } else {
      message = `The '${el.id}' ${el.tagName} element's '${attra}' property is either missing or has the wrong value.`;
      mdlMsgItm.style.color = 'red';
    }

    mdlMsgItm.innerHTML = message;
    appendAndAddAttras(mdlMsg, mdlMsgItm);
  }
  /* End Section */


  /* Validate text */
  const textCheck = (el, text) => {
    let message;
    const mdlMsgItm = createEl('LI');

    if (el.innerHTML === text) {
      message = `<span class='check'>&#10004;</span> The '${el.tagName}' element has a its text set to '${text}'.`;
      mdlMsgItm.style.color = 'black';
    } else {
      message = `The '${el.tagName}' element's text is either missing or has the wrong value.`;
      mdlMsgItm.style.color = 'red';
    }

    mdlMsgItm.innerHTML = message;
    appendAndAddAttras(mdlMsg, mdlMsgItm);
  }
  /* End Section */


  /* Test btn */
  testBtn.addEventListener('click', () => {
    testBtn.setAttribute('disabled', true);

    testMdl.style.opacity = 1;

    if (domCheck(h1Check, 'main-heading')) textCheck(h1Check, 'Fun DOM Manipulation');

    if (domCheck(boatContCheck, 'boat-container')) attraCheck(boatContCheck, 'class', 'boat-container');

    if (domCheck(boatImgCheck, 'boat-img')) {
      attraCheck(boatImgCheck, 'src', 'img/boat.png');
      attraCheck(boatImgCheck, 'alt', 'Tugboat');
    }

    if (domCheck(mikeCheck, 'mike')) {
      attraCheck(mikeCheck, 'src', 'img/mike.png');
      attraCheck(mikeCheck, 'alt', 'Mike The Frog');
      attraCheck(mikeCheck, 'class', 'mike');
    }
  });
  /* End Section */


  /* test result close btn */
  mdlClose.addEventListener('click', () => {
    testBtn.removeAttribute('disabled');
    testMdl.style.opacity = 0;
    while (mdlMsg.firstChild) {
      mdlMsg.removeChild(mdlMsg.firstChild)
    }
  });
})();