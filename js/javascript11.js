let album = document.querySelectorAll('.album');
let music = document.querySelectorAll('.music');

function hideAll() {
  music.forEach(function(el) {
    el.style.display = 'none';
  });
}
hideAll();

album.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
    switch (e.target.getAttribute('id')) {
      case 'train':
        document.querySelector('#trainaudio')
        	.style.display = 'block';
        break;
      case 'staytogether':
        document.querySelector('#staytogetheraudio')
        	.style.display = 'block';
        break;
      case 'ram':
        document.querySelector('#ramaudio')
        .style.display = 'block';
        break;
      case 'river':
        document.querySelector('#riveraudio')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

});
