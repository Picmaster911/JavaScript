import axios from './node_modules/axios/dist/esm/axios.js'

axios.get('https://63ee4ddbd466e0c18bad865b.mockapi.io/api/base/heroes')
    .then(function (response) {
        console.log(response);
    })

