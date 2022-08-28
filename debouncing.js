let counter = 0;

let getData = () => {
  console.log("calling api...", counter++);
};

function debounceFn(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

let debounce = debounceFn(getData, 300);
