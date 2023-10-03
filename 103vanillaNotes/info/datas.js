
let book = JSON.parse(localStorage.getItem('book')) || [{
  title: `Code 777`,
  catagory: `sigma`,
  id: `112233`,
  indepth: {
    encripted: false,
    intel: ``,
    psw: ``    
    }  
  }, {
  title: `Hacksmith`,
  catagory: `gamma`,
  id: `223344`,
  indepth: {
    encripted: false,
    intel: ``,
    psw: ``
  }
}];

let bookEntry = [{
  title: ``,
  catagory: ``,
  id: ``,
  indepth: {
    encripted: false,
    intel: ``,
    psw: ``   
  }
}];

// let bookEntry = [{
//   indepth: {    
//   }
// }];

//pass booleans
let inDepthPass = false;
let confirmPass = false;
let encriptPass = false;
let confirmViewed = false; 
let confirmEncrptedView = false; //set psw >> view encripts
let confirmViewed2 = false;
let inPass = true;
let updateStatus = 0;
let stayFresh = true;


const intelHow = ` step 1: input intel. \n step 2: encript it >> set psw >> confirm >> add. \n step 3: or simply add. \n Input here...`;
const intelPC = ` Write you intel here... `;
const intelOutlaw = ` !! Unregistered !! \n Entry first.`;
// const intelConfirmed = ` Intel has been queued \n Now set password \n Encript It! `;
const intelConfirmed = ` > Set Psw for encripting \n > Or simply add `;
const pswConfirmed = ` Entry Completed `;
const pswOutlaw = ` !!...Bug in the process...!! `;
const addOutlaw = ` DENIED! `;
const finished = ` Encripted Intel stored succesfully `;
const finishedRegular = ` General Intel stored `;
const viewEncripted = ` Encripted intel!! \n Type password `;
const viewDenied = ` Wrong Password! \n !!! Access Denied !!! `;
const regularIntelView = ` Regular Intel Below `;
const encriptedIntelView = ``;


let title = '';
let catagory = '';
let id = '';
let target = {};
let indepth = {};
let pswCheck;
