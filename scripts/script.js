// Get all ingredients
function fetchDataFromAPI() {
  fetch('http://localhost:3000/api/ingredients')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de récupération des données');
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Erreur :', error);
      // Gérez les erreurs et mettez à jour l'interface en conséquence
    });
}

function displayData(data) {
  const responseContainer = document.getElementById('responseContainer');

  const list = document.createElement('ul');

  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <strong>ID:</strong> ${item._id}<br>
      <strong>Nom:</strong> ${item.name}<br>
      <strong>Date de création:</strong> ${item.creationDate}<br>
      <strong>Date de modification:</strong> ${item.modificationDate}<br>
      <strong>Utilisateur de création:</strong> ${item.creationUser}<br>
      <strong>Utilisateur de modification:</strong> ${item.modificationUser}<br>
      <strong>Actif:</strong> ${item.active}<br>
      <strong>__v:</strong> ${item.__v}<br><br>
    `;
    list.appendChild(listItem);
  });
  responseContainer.appendChild(list);
}

fetchDataFromAPI();
