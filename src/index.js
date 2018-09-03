import './sass/style.css';  // Порядок подключения влияет на очередность вывода стилей...!!!
import './sass/index.scss';





let apiUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';


document.getElementById('selecter').addEventListener('click', function (e) {
    this.firstElementChild.innerHTML = e.target.innerText
});

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json();
}

fetch(apiUrl)
    .then(checkStatus)
    .then(parseJSON)
    .then(function (data) {
        console.info('request succeeded with JSON response', data);
        // let myE = document.getElementById('ap');
        // myE.innerHTML = data.display_timestamp;

        const articleEntity = response.body();


    })

    .catch(function (error) {
        console.log('request failed', error)
    });


