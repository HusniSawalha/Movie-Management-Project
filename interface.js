const readline = require("readline");
const fH = require('./fileHandler.js');
const mMng = require('./movieMng.js');
const api = require('./api.js');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function start() {
    console.log('###################################### \nWELCOME TO MOVIE MANAGER \n###################################### \n 1. Add Movie \n 2. Search For Movie \n 3. Update Movie \n 4. Get Movies From Online Database \n 5. Show All Movies \n 6. End Program \n###################################### \n');
    r.question("What do you want to do? ", (ans) => {
        switch (ans) {
        case "1":
            r.question("What is the name of the movie? ", m_name => {
                r.question("What is the name of the director? ", d_name => {
                    r.question("What is the year of release? ", m_year => {
                        r.question("What is the Genre? (The main one only) ", m_genre => {
                            mMng.addMovie(m_name,d_name,m_year,m_genre);
                            start();
                        });
                    });
                });
            });            
            break;
        case "2":
            start();
            break;
        case "3":
            start();
            break;
        case "4":
                api.fetchApi();
                start();
            break;
        case "5":
                fH.readFromMoviesFile();
                start();
            break;
        case "6":
            console.log("Closing Program...");
            r.close();
            break;
        };
    });
};

start();
