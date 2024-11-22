const apiKey = 'VOTRE_API_KEY';  // Remplacez par votre clé d'API OpenWeatherMap

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Veuillez entrer le nom d\'une ville');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('Ville non trouvée');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Impossible de récupérer les données météo');
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('city-name').innerText = cityName;
    document.getElementById('temperature').innerText = `Température : ${temperature}°C`;
    document.getElementById('description').innerText = `Description : ${description}`;
}
