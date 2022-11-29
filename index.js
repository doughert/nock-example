const axios = require('axios');

module.exports = {
    get: () =>
        axios.get('https://api.publicapis.org/entries')
            .then(res => res.data.entries[0])
}
