var wish = ``;   
var captan = 0;    
var argument = false; 
var permission = false;   

function cleansy () {
  document.querySelector('.option-c')
    .classList.remove('mark-op');
  document.querySelector('.option-b')
    .classList.remove('mark-op');
  document.querySelector('.option-a')
    .classList.remove('mark-op');
}

function pickyo () {          
  argument = true;

  if (wish === 'bh') {
    document.querySelector('.update')
      .innerHTML = `Oopsie Doopsie! Deserts in your path!`;

    document.querySelector('.option-a')
      .innerHTML = `(a) Atacama Desert in Chile`;
    document.querySelector('.option-b')
      .innerHTML = `(b) Mojave Desert for the dumbass Vegasians`;
    document.querySelector('.option-c')
      .innerHTML = `(c) Gobi Desert in the China`;   
  }
    else if (wish === 'gt') {
    document.querySelector('.update')
      .innerHTML = `Aha! Forest to your front!`;

    document.querySelector('.option-a')
      .innerHTML = `(a) Black forest in Alemania`;
    document.querySelector('.option-b')
      .innerHTML = `(b) Daintree Rainforest in Ocania`;
    document.querySelector('.option-c')
      .innerHTML = `(c) Hoia to the gentle Dracula`;   
  }
  else if (wish === 'sf') {
    document.querySelector('.update')
      .innerHTML = `Damn! Gotta fight as A Gladiator! Pick your ops...`;

    document.querySelector('.option-a')
      .innerHTML = `(a) The Lion Mama`;
    document.querySelector('.option-b')
      .innerHTML = `(b Tommy the Real Doggy`;
    document.querySelector('.option-c')
      .innerHTML = `(c) Rastamaan Vibration!`;   
  }
            
}

function downFunk() {
  permission = true;
  if (argument) {
    captan++;          
    if (captan > 0 && captan < 4 ) {
      if (captan == 1) {
        document.querySelector('.option-b')
          .classList.remove('mark-op');
        document.querySelector('.option-a')                
          .classList.add('mark-op');
      }
      else if (captan == 2) {
        document.querySelector('.option-a')
          .classList.remove('mark-op');
        document.querySelector('.option-b')
          .classList.add('mark-op');
      }
      else if (captan == 3) {
        document.querySelector('.option-b')
          .classList.remove('mark-op');
        document.querySelector('.option-c')
          .classList.add('mark-op');
      }              
    }
    else {
      document.querySelector('.option-c')
        .classList.remove('mark-op');
      document.querySelector('.option-b')
        .classList.remove('mark-op');
      document.querySelector('.option-a')
        .classList.remove('mark-op');
      captan  = 0;
      downFunk();
    }
  }
  else {
    argument = false;
  }
  
}

function upFunk () {
  permission = true;
  if (argument) {
    captan--;
    if (captan > 0 && captan < 4 ) {
      if (captan == 3) {   
        document.querySelector('.option-a')
          .classList.remove('mark-op');           
        document.querySelector('.option-c')
          .classList.add('mark-op');
      }
      else if (captan == 2) {
        document.querySelector('.option-c')
          .classList.remove('mark-op');
        document.querySelector('.option-b')
          .classList.add('mark-op');
      }
      else if (captan == 1) {
        document.querySelector('.option-b')
          .classList.remove('mark-op');
        document.querySelector('.option-a')
          .classList.add('mark-op');
      }
    }
    else {
      document.querySelector('.option-c')
        .classList.remove('mark-op');
      document.querySelector('.option-b')
        .classList.remove('mark-op');
      document.querySelector('.option-a')
        .classList.remove('mark-op');
      captan  = 4;
      upFunk();
    }  
  }       
}

function reseta () {
  if (argument) {            
    cleansy();

    document.querySelector('.update')
      .innerHTML = `R e s e t . D o n e`;
    document.querySelector('.option-a')
      .innerHTML = `step 1: kick boxes above`;
    document.querySelector('.option-b')
      .innerHTML = `step 2: pickyo choice! Hooorreh!`;
    document.querySelector('.option-c')
      .innerHTML = `step 3: select one nigga!`;

    document.querySelector('.display')
      .innerHTML = `<img src="files/reset-bro.png" class="walton">`;
                              
    wish = 'hibidi hoo blah';
    argument = false;
    permission = false;
  }
}

function clickomo () {
  if (argument && permission) {
    let poster = 'bad-gone';

    if (wish == 'bh') {

      if (captan == 1) {
        poster = 'bh-01';
      }
      else if (captan == 2) {
        poster = 'bh-02';
      }
      else if (captan == 3) {
        poster = 'bh-03';
      }
      //funk done.             
    }

    else if (wish == 'gt') {

      if (captan == 1) {
        poster = 'gt-01';
      }
      else if (captan == 2) {
        poster = 'gt-02';
      }
      else if (captan == 3) {
        poster = 'gt-03';
      }
      //funk done.             
    }

    else if (wish == 'sf') {

      if (captan == 1) {
        poster = 'sf-01';
      }
      else if (captan == 2) {
        poster = 'sf-02';
      }
      else if (captan == 3) {
        poster = 'sf-03';
      }
      //funk done.             
    }

    // else {
    //   poster = 'bad-gone';
    // }

    document.querySelector('.display')
      .innerHTML = `<img src="files/${poster}.png" class="walton">`;
  }
}