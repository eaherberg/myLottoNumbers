// create function to randomly shuffle array
const shuffle = array => {
    let n = array.length;
    let temp;
    let index;

    // while there are elements in the array
    while (n > 0) {
        // pick a random index
        index = Math.floor(Math.random() * 14);
        // decrease n by 1
        n--;
        // swap the last element with it
        temp = array[n];
        array[n] = array[index];
        array[index] = temp;
    }
    return array;
}

// create function to draw six numbers from shuffled array
const myDraw = array => {
  // assign random index
  const randArray = shuffle(array);
  // iterate across array
  for (var i = 0; i < 6; i++) {
    console.log(randArray[i]);
  };
}

// lotto numbers array
const myLotto = [13, 26, 28, 3, 47, 19, 43, 37, 27, 39, 25, 17, 8, 1, 49, 21, 12, 6, 33, 24, 10, 32, 38, 20, 30, 22, 41, 4, 7, 42, 5, 36, 46, 16, 34, 14, 35, 40, 23, 15, 45, 2, 11, 48, 31, 9];
// make call to functions with lotto number array
document.myDraw(shuffle(myLotto));
