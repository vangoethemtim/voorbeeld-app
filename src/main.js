import './style.css';

// Zoek de knop en de tekst in de HTML
const knop = document.getElementById('weather-button');
const tekst = document.getElementById('weather-text');

// Voer haalWeerOp uit wanneer op de knop geklikt wordt
knop.addEventListener('click', haalWeerOp);

async function haalWeerOp() {
  tekst.textContent = 'Weer ophalen...';

  const url =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=51.109' +
    '&longitude=3.706' +
    '&current=temperature_2m,wind_speed_10m';

  try {
    // Vraag de gegevens op
    const antwoord = await fetch(url);

    // Zet het antwoord om naar JavaScriptgegevens
    const gegevens = await antwoord.json();

    const temperatuur = gegevens.current.temperature_2m;
    const wind = gegevens.current.wind_speed_10m;

    // Toon het resultaat
    tekst.textContent =
      `Het is ${temperatuur} °C met ${wind} km/u wind.`;
  } catch (fout) {
    tekst.textContent = 'Het weer kon niet worden opgehaald.';
  }
}