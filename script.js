function abrirNuevoTab(url) {
    // Abrir nuevo tab
    var win = window.open(url, '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
  $('#open').click(function(){
    abrirNuevoTab('https://https://www.youtube.com/watch?v=dQw4w9WgXcQ.youtube.com/watch?v=mCdA4bJAGGk')
  })