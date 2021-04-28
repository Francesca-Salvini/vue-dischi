// CONSEGNA

// ESERCIZIO : Attraverso una chiamata ajax all’API di boolean 
// https://flynn.boolean.careers/exercises/api/array/music 
// avremo a disposizione una decina di dischi musicali. 
// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi. 
// In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.


var app = new Vue ( 
    {
        el: '#root',
        data : {
            
            cds : [],
            cdsGenres : []
            
        },
        methods : {
        
        },
        
        
        mounted() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                const result = response.data;
                console.log(result);
                this.cds = result.response;
                
                // Inserisco nell'array cdsGenres i generi musicali dei cd contenuti in cds
                this.cds.forEach((element) => {
                    // console.log(element.genre);
                    if(!this.cdsGenres.includes(element.genre)) {
                        this.cdsGenres.push(element.genre);
                    }
                    
                    
                })

                console.log(this.cdsGenres);
            });
            
            
            

            
        }

    }
);
