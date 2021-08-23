import {Lokacija} from "./Lokacija.js";
import {Sluzbenalica} from "./Sluzbenalica.js"
import { Sudije } from "./Sudije.js";
export class Utakmica{
    constructor(n,domacin, gost )
    {
        this.id=n;
        this.domacin=domacin;
        this.gost=gost;
        this.n=n;

        this.kontejner=null;
        this.statistike=[];
        this.sluzba=[];

        this.glavnesudije=new Array();
        this.sudijepomocnici=new Array();
    
    }
    dodajStatistiku(s)
    {
        this.statistike.push(s);
    }
    DodajSudiju(s)
    {
        if(s.gp=="glavni")
        {
            this.glavnesudije.push(s);
        }
        else
        {
            this.sudijepomocnici.push(s);
        }
    }
    dodajSluzbu(s)
    {
        this.sluzba.push(s);
    }
    crtajMec(host)
    {

                    if(!host)
                   {
                       throw new Exception("Roditeljski element ne postoji.")
                   }
                   this.kontejner=document.createElement("div");
                   this.kontejner.classList.add("kontejner");
                   host.appendChild(this.kontejner);

                   this.crtajformu1(this.kontejner);
                      this.crtajstatistike(this.kontejner);

                      this.crtajdelegiranje(this.kontejner);


    }
    crtajdelegiranje(host)
    {
        let delegiranje=document.createElement("div");
        delegiranje.className="delegiranje";
        host.appendChild(delegiranje);

        let naslov=document.createElement("div");
        naslov.className="naslovdelegiranje"

        let lebel=document.createElement("label");
        lebel.innerHTML="Sluzbena lica na mecu:";
        naslov.appendChild(lebel);
        delegiranje.appendChild(naslov);

        //let deleg=new Sluzbenalica("","","");
        //this.sluzba=deleg;
        this.sluzba.forEach(el=>
            {
                 el.crtajtabelu(delegiranje);
                
       
            })

       



    }
    crtajformu1(host)
    {
        const kontforma=document.createElement("div");
        kontforma.className="kontforma1";
        host.appendChild(kontforma);

        let unosstatistike=document.createElement("div");
        unosstatistike.className="Unosstatistike";
        kontforma.appendChild(unosstatistike);

        var ellabela=document.createElement("h2");
        ellabela.innerHTML="Unos statistike";
        unosstatistike.appendChild(ellabela);

        let divrb=document.createElement("div");
        let l=document.createElement("label");
        l.innerHTML="Izaberite ekipu:<br>";
        divrb.appendChild(l);
        let opcija=document.createElement("input");

        opcija.type="radio";
        opcija.className="radiobutons"
        opcija.name=this.domacin+this.gost;
       
        opcija.value="red";
        let labela=document.createElement("label");
        labela.innerHTML="domacin";
        divrb.appendChild(opcija);
        divrb.appendChild(labela);
        unosstatistike.append(divrb);

         divrb=document.createElement("div");
         opcija=document.createElement("input");
        opcija.type="radio";
        opcija.name=this.domacin+this.gost;
        opcija.value="aqua";
         labela=document.createElement("label");
        labela.innerHTML="gost";
        divrb.appendChild(opcija);
        divrb.appendChild(labela);
        unosstatistike.append(divrb);

        divrb = document.createElement("div");
        let stats= document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML="<br>Izaberite statistiku: <br>"
        divrb.appendChild(labela);
        divrb.appendChild(stats);
        
        
       // let tipovistatistike=["Pogodak","Sut","Sut u okvir","Slobodan udarac","Udarac iz ugla","Ofsajd", "Prekrsaj","Zuti karton","Crveni karton"];

        for(let i=0; i<this.statistike.length;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=this.statistike[i].stat;
            opcija.value=i;
            stats.appendChild(opcija);
        }
        unosstatistike.append(divrb);

        let red=document.createElement("br");
        unosstatistike.appendChild(red);


        let dugme=document.createElement("button");
        dugme.innerHTML="Dodaj Statistiku";
        unosstatistike.appendChild(dugme);
        dugme.onclick=(ev)=>{
            
           
            //document.getElementById("kontlokacije").style.backgroundColor="green";
            const tim=null;
            if(this.kontejner.querySelector(`input[name='${this.domacin+this.gost}']:checked`)==null)
            {
                alert("Izaberite tim!");
            }
            else
            {
              //alert("stats value:"+stats.value);
                this.statistike[stats.value].azurirajstatistiku(this.kontejner.querySelector(`input[name='${this.domacin+this.gost}']:checked`).value);//treba zapamtiti ovo, imamo koji je tim
            }
          
          
           // console.log(stats.value);//imamo koja je statistika odabrana tj njen broj u nizu statistika, sad jos da je napraimo :::
            function playAudio(url) {
                new Audio(url).play();
              }
            if(stats.value==0)
            {
                if(tim=="red"){
                //playAudio("../../mesi.mp3");
                }
                else{
                    //playAudio("../../goal_hala_madrid.mp3");
                   // document.getElementById("kontlokacije").style.backgroundImage="url(../../1.gif)"; 
                }
            }




            //this.statistike[stats.value].azurirajstatistiku(tim);
        }

        let sluzbenalica=document.createElement("div");
        sluzbenalica.className="sluzbenalica";
        kontforma.appendChild(sluzbenalica);

        var ellabela=document.createElement("h2");
        ellabela.innerHTML="Unos sluzbenih lica";
        sluzbenalica.appendChild(ellabela);

        let sudija=document.createElement("label");
        sudija.className="sudija";
        sudija.innerHTML="Glavni sudija: <br>";
        sluzbenalica.appendChild(sudija);
        divrb = document.createElement("div");
        let sudije= document.createElement("select");
        divrb.appendChild(sudije);
        //this.UcitajSudije();
        
        
        let Glavnesudije=["Mitic Milan","Milanovic Milos","Bjorn Kuipers","Pierluigi Colina","Damir Skomina","Trajkovic Danijel", "Cuneyt Cakir","Szymon Marciniak","Danni Makellie"];

    
        //alert("duzina glavnesudije: "+this.glavnesudije.length);
        for(let i=0; i<this.glavnesudije.length;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=this.glavnesudije[i].sudija;
            opcija.value=i;
            sudije.appendChild(opcija);
        }
        sluzbenalica.append(divrb);

        let pom1=document.createElement("label");
        pom1.className="sudija";
        pom1.innerHTML="<br>1. pomocni sudija: <br>";
         sluzbenalica.appendChild(pom1);
        divrb = document.createElement("div");
        let p1sudije= document.createElement("select");
        divrb.appendChild(p1sudije);
        
        let Pomocnesudije=["Petrovic Nikola","Petkovic Petar","Djurdjevic Dalibor","Ristic Milovan"];

        for(let i=0; i<this.sudijepomocnici.length;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=this.sudijepomocnici[i].sudija;
            opcija.value=i;
            p1sudije.appendChild(opcija);
        }
        sluzbenalica.append(divrb);

        let pom2=document.createElement("label");
        pom2.className="sudija";
        pom2.innerHTML="<br>2. pomocni sudija: <br>";
        sluzbenalica.appendChild(pom2);
        divrb = document.createElement("div");
        let p2sudije= document.createElement("select");
        divrb.appendChild(p2sudije);
        
        for(let i=0; i<this.sudijepomocnici.length;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=this.sudijepomocnici[i].sudija;
            opcija.value=i;
            p2sudije.appendChild(opcija);
        }
        sluzbenalica.append(divrb);

          let r=document.createElement("br");
        sluzbenalica.appendChild(r);

        let dugmesllica=document.createElement("button");
        dugmesllica.innerHTML="Dodaj Trojku";
        sluzbenalica.appendChild(dugmesllica);

      

        dugmesllica.onclick=(ev)=>{

            //alert("sluzba: ");
            if(this.sluzba.length!=0){
            this.sluzba.forEach(el=>
                {
                    //alert("el.vjuuu; "+ this.sudijepomocnici[p1sudije.value].sudija + this.sudijepomocnici[p2sudije.value].sudija);

                 
                    if(this.sudijepomocnici[p1sudije.value].sudija==this.sudijepomocnici[p2sudije.value].sudija)
                    {

                        alert("Morate izabrati razlicite sudije pomocnike.")
                        //this.sluzba.pop(el);

                    }
                    else{
                        //alert("ilazim ovde "+el.pomocnik2 +el.pomocnik1);
                        if(el.pomocnik1==el.pomocnik2)
                        {
                            el.azurirajdelegiranje(this.glavnesudije[sudije.value].sudija, this.sudijepomocnici[p1sudije.value].sudija,this.sudijepomocnici[p2sudije.value].sudija, 0,(this.kontejner.querySelector(".delegiranje")));

                        }
                        else{

                    el.azurirajdelegiranje(this.glavnesudije[sudije.value].sudija,  this.sudijepomocnici[p1sudije.value].sudija, this.sudijepomocnici[p2sudije.value].sudija, 1,(this.kontejner.querySelector(".delegiranje")));
                    }
                }
                });
            }
            else
            {
                this.dodajSluzbu(new Sluzbenalica(0, "", "","",this.id));
                this.sluzba.forEach(el=>
                    {
                      // alert("trebalo bi da je div dlegiranje: "+ (this.kontejner.querySelector(".delegiranje")));
                       
                        el.azurirajdelegiranje(this.glavnesudije[sudije.value].sudija, this.sudijepomocnici[p1sudije.value].sudija, this.sudijepomocnici[p2sudije.value].sudija, 0,(this.kontejner.querySelector(".delegiranje")));
            

                    });
            }
  
        }

        let ra=document.createElement("br");
        sluzbenalica.appendChild(ra);

        let dugmesllicabrisi=document.createElement("button");
        dugmesllicabrisi.innerHTML="Brisi Delegiranje";
        sluzbenalica.appendChild(dugmesllicabrisi);

        dugmesllicabrisi.onclick=(ev)=>
        {
            if(this.sluzba.length==0)
            {
                alert("nema delegiranja");
            }
            this.sluzba.forEach(el=>
                {
                   el.BrisiDelegiranje();
                   //alert("sad element treba da se obrise iz niza");
                   this.sluzba.pop(el);
                   //alert("duzina niza : "+this.sluzba.length);
                });
        }

        let raa=document.createElement("br");
        sluzbenalica.appendChild(raa);

            
    }
   
    crtajstatistike(host)
    {
        let tipovistatistike=["Pogodak","Sut","Sut u okvir","Slobodan udarac","Udarac iz ugla","Ofsajd", "Prekrsaj","Zuti karton","Crveni karton"];
        const kontlokacije=document.createElement("div");
        kontlokacije.className="kontlokacije";
        kontlokacije.id="kontlokacije";
        host.appendChild(kontlokacije);
        const naslov=document.createElement("div");
        naslov.className="naslov";
        let tekma=document.createElement("label");
        tekma.innerHTML=this.domacin+" - "+this.gost;
        const rezz=document.createElement("div");
        rezz.className="rezz";
        let reza=document.createElement("label");
        reza.innerHTML="\nRezultat: 0 : 0";
        reza.className="reza";
        reza.id="reza";
        naslov.appendChild(tekma);
        rezz.appendChild(reza);
        kontlokacije.appendChild(naslov);
       // kontlokacije.appendChild(rezz);
        let stat;
      
        stat=document.createElement("div");
            stat.className="stat";
            kontlokacije.appendChild(stat);


            this.statistike.forEach(lok=>
                {
                    let t=document.createElement("label");
                    t.className="stattext"
                    t.innerHTML=lok.stat;
                    stat.appendChild(t);
              
                   /*lok=new Lokacija(i,"",tipovistatistike[i],0,0,this.id);
                   this.dodajStatistiku(lok);*/
                   lok.crtajLokaciju(stat);
                })

      /*  for(let i=0;i<tipovistatistike.length;i++)
        {
             let t=document.createElement("label");
             t.className="stattext"
             t.innerHTML=tipovistatistike[i];
             stat.appendChild(t);
       
            //lok=new Lokacija(i,"",tipovistatistike[i],0,0,this.id);
            //this.dodajStatistiku(lok);
            lok.crtajLokaciju(stat);
          
            //napraviti objekat klase lokacija
            //kontlokacije.appendChild(stat);
        }*/
    }


   

}