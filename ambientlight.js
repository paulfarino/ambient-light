window.addEventListener('ambientlight', function(e) {
  var lux = e.value;
  document.querySelector('#ale').textContent = lux + ' lux';
  
  if(lux < 50) {
    document.body.className = 'dark';
  }
  if(lux >= 50 && lux <= 1000) {
    document.body.className = 'normal';
  }
  if(lux > 1000)  {
    document.body.className = 'bright';
  }
  
});

window.addEventListener('lightlevel', function(e) {
  var level = e.value; document.querySelector('#lle').textContent = level;
  
  if(level === 'dim') {
    document.body.className = 'dark';
  }
  if(level === 'normal')  {
    document.body.className = 'normal';
  }
  if(level === 'bright')  {
    document.body.className = 'bright';
  }
});