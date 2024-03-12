let apiKey = '4d0d5fcdc4ec0497d0273ab0d4769d4a'
let difKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatoClima(data))
}

function mostrarDatoClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es : ${Math.floor(temperatura-difKelvin)}°C`

    const humInfo = document.createElement('p')
    humInfo.textContent = `La humedad es : ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    const descInfo = document.createElement('p')
    descInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempInfo)
    divDatosClima.appendChild(humInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descInfo)
}

