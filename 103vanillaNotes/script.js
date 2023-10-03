
renderingList();
stockNews();

document.querySelector('.update-data-button')
  .addEventListener('click', () => {
    updateStatus = 2;
    updateData();
    stockNews();
  });

document.querySelector('.indepth-button')
  .addEventListener('click', () => {
    inDepth();
  });

document.querySelector('.confirm')
  .addEventListener('click', () => {
    confirmIt();
  });

document.querySelector('.encript')
  .addEventListener('click', () => {          
    encriptIt();
  });

document.querySelector('.add-button')
  .addEventListener('click', () => {   
    console.log(`add-clicked!`);
    addIntel();
    stockNews();
  });

document.querySelectorAll('.nlc-in-button')
  .forEach((show) => {
    show.addEventListener('click', () => {   
      viewIntel(show.dataset.intelId);
    });
  });



// console.log(book);