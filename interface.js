const readline = require("readline");
const fH = require('./fileHandler.js');
const mMng = require('./movieMng.js');
const api = require('./api.js');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const menu = '###################################### \nWELCOME TO MOVIE MANAGER \n###################################### \n 1. Add Movie \n 2. Search For Movie \n 3. Update Movie \n 4. Get Movies From Online Database \n 5. Show All Movies \n 6. End Program \n###################################### \n'

function start() {
    console.log(menu);
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
            r.question("Search By: \n1. Title \n2. Director \n3. Year Released \n 4. Genre \n", s => {
                if (s == 1 ) {
                    r.question("What is the title of the movie? ", search=>{
                        fH.searchByTitle(search);
                    })
                    
                } else if (s==2){
                    mMng.searchMovieByDirector(s);
                } else if (s==3){
                    mMng.searchMovieByYear(s);
                } else if (s==4){
                    mMng.searchMovieByGenre(s);
                }
            });
            break;
        case "3":
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
            r.close();
            break;
        };
    });
};

start();
