

function inDepth() {  
  cityCorp ();
 if (stayFresh) {    
    inPass = false;
    const titleElement = document.querySelector('.input-title'); 
    const catagoryElement = document.querySelector('.input-catagory');  
    title = titleElement.value;        
    catagory = catagoryElement.value;

    if (title !== '' && catagory !== '') { 
      let idEntry = idGenerate();
      book.forEach((idg) => {
        if (idEntry !== book.id) {
          id = idEntry; 
        } 
        else {
          console.log(`Oops! Uniq id got extinct! Try Once again dude!`);            
        }
      }); 
      titleElement.value = '';
      catagoryElement.value = '';    
      console.log(`Data Entry Saved!`);
      console.log(title, catagory, id);

      inDepthPass = true;    
      intelPH(intelPC);
    } 
    else {
    console.log('Fillup your data');
    }
  }
  else {
    intelPH(`Stay fresh before you go in! Haha!`);
  }
}

function confirmIt() {
  
  if (inDepthPass) {
    const intel = document.querySelector('.input-intel').value;

    if (intel !== '') {
      indepth.encripted = false;
      indepth.intel = intel;
      console.log(`Intel queued`);
      console.log(indepth);
      confirmPass = true;
      inDepthPass = false;
      
      intelPH(intelConfirmed);
    }
  } 
  //FOR CLEANING THE SCREEN
  else if (confirmViewed) {
    document.querySelector('.ms-title')
      .innerHTML = '';
    document.querySelector('.ms-catagory')
      .innerHTML = '';
    document.querySelector('.ms-enc-status')
      .innerHTML = '';
    document.querySelector('.intel-message')
      .innerText = '';
    confirmViewed = false;
    intelPH(` Regular Intel Cleaned `);
    target = null;
    stayFresh = true;
  }
  else if (confirmViewed2) {
    document.querySelector('.ms-title')
      .innerHTML = '';
    document.querySelector('.ms-catagory')
      .innerHTML = '';
    document.querySelector('.ms-enc-status')
      .innerHTML = '';
    document.querySelector('.intel-message')
      .innerText = '';

    confirmViewed2 = false;
    intelPH(` Intel+ Cleaned `);
    target = null;
    stayFresh = true;
  }
  else if (confirmEncrptedView) {
    pswCheck = document.querySelector('.input-intel').value;
    console.log(pswCheck);
    console.log(target);
    
    if (target.indepth.psw === pswCheck) {
      document.querySelector('.ms-title')
        .innerHTML = target.title;
      document.querySelector('.ms-catagory')
        .innerHTML = target.catagory;
      document.querySelector('.ms-enc-status')
        .innerHTML = 'Encripted';
      document.querySelector('.intel-message')
        .innerText = target.indepth.intel;

      intelPH(` Encripted Intel Below `);
      confirmViewed2 = true;
      confirmEncrptedView = false;
    }  
    else {
      confirmEncrptedView = false;
      intelPH(`>> Enter Password <<`);
    }
    // confirmViewed = false;    
  }
  else {
    intelPH(intelOutlaw);
  }
}

function encriptIt() {
  let psw = document.querySelector('.input-intel').value;

  if (confirmPass && psw !== '') {
    indepth.encripted = true;
    indepth.psw = psw;
    console.log('psw stored in the bunker');   
    intelPH(pswConfirmed);
  }
  else {  
    intelPH(pswOutlaw);  
  } 
  encriptPass = true;
  confirmPass = false;
  console.log(title, catagory, id, indepth);
}

function addIntel() {
  if (encriptPass && indepth.encripted) {
    book.push({
      title,
      catagory,
      id,
      indepth
    });
    console.log(book);
    encriptPass = false;  

    intelPH(finished);
    confirmViewed = true;
    updateStatus = 1;
  } 
  else if (confirmPass) {
    indepth.encripted = false;
    indepth.psw = '';
    book.push({
      title,
      catagory,
      id,
      indepth
    });
    console.log(book);

    intelPH(finishedRegular);
    console.log(`General Intels Stored`);
    confirmViewed = true;
    updateStatus = 1;
  }

  else {
    intelPH(addOutlaw);
  }    
  renderingList();
  inPass = true;
}

function viewIntel(id) {  

  cityCorp ();
  if (inPass) {    
    book.forEach((selected) => {
      if (id === selected.id) {
        target = selected;      
      }        
    });
    console.log(target);

    if (target.indepth.encripted) {
      intelPH(viewEncripted);      
      confirmEncrptedView = true; 
      confirmViewed = false;   
      stayFresh = false;    
    }
    else {
      document.querySelector('.ms-title')
        .innerHTML = target.title;
      document.querySelector('.ms-catagory')
        .innerHTML = target.catagory;
      document.querySelector('.ms-enc-status')
        .innerHTML = 'Regular';
      document.querySelector('.intel-message')
        .innerText = target.indepth.intel;

      intelPH(regularIntelView);
      confirmViewed = true;
      stayFresh = false;
    }        
  }  
}

function renderingList() {
  let listViewHtml = '';

  book.forEach((list, i) => {
    const {title, catagory, id} = list;
    const renderingCode = `
      <div class="note-list-container">
        <div class="nlc-bio">${title}</div>
        <div class="nlc-class">${catagory}</div>
        <button class="nlc-in-button"
        data-intel-id="${list.id}">in</button>
        <button class="nlc-done-button" 
        onClick="
          console.log(book.splice(${i}, 1));
          renderingList(); 
          updateStatus = 3;
          stockNews();
        ">Done</button>
      </div>
    `;  

    listViewHtml += renderingCode;    

  });
  document.querySelector('.note-list')
    .innerHTML = listViewHtml;    
}

function updateData() {
  localStorage.setItem('book', JSON.stringify(book));  
}

//UTIL FUNCTIONS
function intelPH(word) {
  document.querySelector('.input-intel')
      .value = '';
  document.getElementsByName('intel-placeholder')
    [0].placeholder = word;
}

function idGenerate() {
  let demoId = Math.random().toFixed(40);
  return demoId;
}

function stockNews(){
  if (updateStatus === 1) {
    document.querySelector('.update-status')
      .innerHTML = `Changed...`;
  } 
  else if (updateStatus === 2) {
    document.querySelector('.update-status')
      .innerHTML = `Data Safe`;
  } 
  else if (updateStatus === 3) {
    document.querySelector('.update-status')
      .innerHTML = `Intel Removed...`;
  }
}

function cityCorp () {
  document.querySelector('.ms-title')
    .innerHTML = '';
  document.querySelector('.ms-catagory')
    .innerHTML = '';
  document.querySelector('.ms-enc-status')
    .innerHTML = '';
  document.querySelector('.intel-message')
    .innerText = '';
}
