// CONSEGNA

// ESERCIZIO : Attraverso una chiamata ajax all’API di boolean 
// https://flynn.boolean.careers/exercises/api/array/music 
// avremo a disposizione una decina di dischi musicali. 
// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.


var app = new Vue ( 
    {
        el: '#root',
        data : {
            cds : []
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
                console.log(this.cds);
            });
        }

    }
);
