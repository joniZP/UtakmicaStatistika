import { Utakmica } from "./Utakmica.js"
import {Lokacija} from "./Lokacija.js"
import {Sluzbenalica} from "./Sluzbenalica.js"
import {Sudije} from "./Sudije.js"


function upisiutakmice()
{
  fetch("https://localhost:5001/Utakmica/PreuzmiUtakmice").then(p=>
{
   
    
       p.json().then(data =>
            {
                 //alert(data);
                 data.forEach(tekma => {
                     
                     console.log(tekma);
                   
                    const tekma1 = new Utakmica(tekma.id, tekma.domacin, tekma.gost);
                    
                   
                    tekma.lokacije.forEach(lok=>
                        {

                            tekma1.dodajStatistiku(new Lokacija(lok.x, lok.id, lok.stat, lok.domaci, lok.gosti, tekma1.id));
                            
  
                        }); 

                       

                        //alert("broj sluzbenih lica koji bi trebalo da bude 1 ili mozda 0?:   "+tekma.sluzbenalica.length);
                        if(tekma.sluzbenalica.length>0)
                        {
                          tekma1.dodajSluzbu(new Sluzbenalica(tekma.sluzbenalica[0].id,tekma.sluzbenalica[0].glavni, tekma.sluzbenalica[0].pomocnik1, tekma.sluzbenalica[0].pomocnik2, tekma.id));
                        }

                        tekma.sudije.forEach(sudija=>
                          {
                            tekma1.DodajSudiju(new Sudije(sudija.id, sudija.sudija, sudija.gp));
                          });



                       
                        tekma1.crtajMec(document.body);
                   
                    
                });
            })
});
}


               
  



upisiutakmice();
/*const Utakmica1=new Utakmica("Barselona", "Real Madrid", 1);
Utakmica1.crtajMec(document.body);
const Utakmica2=new Utakmica("G. Stopanje", "Grdelica", 2);
Utakmica2.crtajMec(document.body);*/