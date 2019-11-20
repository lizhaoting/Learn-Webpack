function component(data) {
    var element = document.createElement('div');
    element.innerHTML = data;
    element.classList.add('header');
    return element;
  }
  
  document.body.appendChild(component('hello word!'));