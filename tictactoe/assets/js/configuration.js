function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  overlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  overlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  configErrorElement.textContent = '';
	formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); // prevent the browser to send automatically a request, allow us to handle
  // with forms only with JavaScript (without an back-end)

  // event.target -> form
  const formData = new FormData(event.target); // creating a FormData instance
  const newPlayerName = formData.get('username').trim(); // delete the blank spaces

  if (!newPlayerName) {
    event.target.firstElementChild.classList.add('error');
    configErrorElement.textContent = 'Valid names, only!';
    return;
  }

  const updatePlayerDataELement = document.getElementById(
    'player-' + editedPlayer + '-data'
  );
	updatePlayerDataELement.children[1].textContent = newPlayerName;

	players[editedPlayer - 1].name = newPlayerName;

	closePlayerConfig();
}