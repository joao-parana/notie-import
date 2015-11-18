//  Tenho que garantir que o streamjs está Pronto
var ensureNotieIsReady = function(callback) {
  var notieNotReady = function() {
    if ('undefined' != (typeof notie) &&
        'undefined' != (typeof notie.confirm)) {
      return false;
    }
    return true;
  }
  var count = 0;
  var delaySubscribe = function(){
    if (notieNotReady()) {
      // verifica num intervalo de 10 milisegundos
      setTimeout(delaySubscribe, 10);
      count++;
    } else {
      console.log('Notie JS is ready in ' + (count * 10) + ' milliseconds.');
      setTimeout(callback, 50);
    }
  }
  delaySubscribe();
};
