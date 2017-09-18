function receivesAFunction(callback){
  callback();
};

function returnsANamedFunction(){
return function yooooo(){console.log("yooooooo")}
};

function returnsAnAnonymousFunction(){
  return function(){};
};
