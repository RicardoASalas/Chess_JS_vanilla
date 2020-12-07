window.onDragStart = (event) => {
    const message = localStorage.getItem('message')
    console.log(message)
    console.log('event is '+event.dataTransfer)
    event
    .dataTransfer
    .setData('text/plain', event.target.id);

    event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
};

window.onDragOver = (event) => {
    console.log('event is '+event)
    event.preventDefault();
};

window.onDrop = (event) => {
    console.log('event is '+event)
    const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    
    dropzone.appendChild(draggableElement);

    event
    .dataTransfer
    .clearData();
};
