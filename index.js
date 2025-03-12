const receivesAFunction = (callback) => {
    callback();
  };
  
  receivesAFunction(() => console.log("The Callback function has been called back!"));

  const returnsANamedFunction = () => {
    function namedFunction() {
      console.log("This is a  function!");
    }
    return namedFunction;
  };
  //return 'Thi is a function!'//
  const myFunction = returnsANamedFunction();
  myFunction();
  const returnsAnAnonymousFunction = () => {
    return function () {
      console.log("I am mr anonymous !");
    };
  };
  
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction(); 