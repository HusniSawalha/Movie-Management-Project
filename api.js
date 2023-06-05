const fH = require('./fileHandler');
const fetchApi = () => fetch("https://www.omdbapi.com/?i=tt3896198&apikey=927dc6d7", {method: 'GET'})
.then(async res => {
    const data = await res.json();
    fH.writeOnMoviesFile(data);
})
.catch(err=>{
    console.log("Error fetching data from API");
});

module.exports = {
    fetchApi,
}