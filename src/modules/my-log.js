


// de esta forma hacemos exportaciones parciales

/*
module.exports.info =  function info(text){
  console.log("INFO:", text);
  return text;
}

module.exports.error =  function error(text) {
  console.log("ERROR:",text);
  return text;
}
*/

//otra forma de exportaciones parciales

function info(text){
  console.log("INFO:", text);
  return text;
}

function error(text) {
  console.log("ERROR:",text);
  return text;
}

module.exports.info = info;
module.exports.error = error;


// module.exports = {info,error};

