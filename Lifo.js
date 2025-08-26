function first() {
  console.log("Entered first()");

  function second() {
    console.log("Entered second()");

    function third() {
      console.log("Entered third()");
      console.log("Exiting third()");
    }

    third(); // Last-in
    console.log("Exiting second()");
  }

  second();
  console.log("Exiting first()");
}

first();
