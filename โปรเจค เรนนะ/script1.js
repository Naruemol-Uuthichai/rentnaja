var search = document.getElementById('search1');
var button = document.getElementById('button1');
var input = document.getElementById('input1');

function loading() {
  search.classList.add('loading');

  setTimeout(function () {
    search.classList.remove('loading');
  }, 1500);
}

button.addEventListener('click', loading);

input.addEventListener('keydown', function () {
  if (event.keyCode == 13) loading();
});