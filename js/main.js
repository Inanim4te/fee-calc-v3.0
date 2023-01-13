let op;

const numArray = [];

function func() {
  let result;
  let num1 = Number(document.getElementById('num1').value);
  switch (op) {
    case '1%':
      result = Math.floor(num1 - num1 * 0.01);
      break;
    case '2%':
      result = Math.floor(num1 - num1 * 0.02);
      break;
  }
  numArray.push(result);
  document.getElementById('output').innerHTML = result;
  document.getElementById('log-output').innerHTML = numArray.join('<br>');
}

document.body.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('subm-button')) {
    navigator.clipboard.writeText(document.getElementById('output').innerHTML);
  }
  if (elem.classList.contains('summary-output--copy')) {
    navigator.clipboard.writeText(document.getElementById('summary-output').innerHTML);
  }
  if (elem.classList.contains('fee-output--copy')) {
    navigator.clipboard.writeText(document.getElementById('output').innerHTML);
  }
};

const cleanInput = () => {
  const getInput = document.getElementById('num1');
  getInput.value = '';
};

function delLastVal() {
  numArray.pop();
  document.getElementById('log-output').innerHTML = numArray.join('<br>');
}

function sum(x) {
  let s = 0;
  for (i = 0; i < x.length; i++) {
    s += x[i];
  }
  document.getElementById('summary-output').innerHTML = s;
  return s;
}
