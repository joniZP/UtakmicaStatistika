export class Sluzbenalica
{
    constructor(id, glavni, pomocnik1, pomocnik2, tekmaid)
    {
        this.id=id;
        this.glavni=glavni;
        this.pomocnik1=pomocnik1;
        this.pomocnik2=pomocnik2;
        this.tekmaid=tekmaid;
        this.el=null;
        this.imegl=null;
        this.prezgl=null;
        this.imep1=null;
        this.prezp1=null;
        this.imep2=null;
        this.prezp2=null;
        this.container=null;
    }
    crtajtabelu(host)
    {
       this.container=host;
        
        const tabela =document.createElement("table");
        this.el=tabela;
        host.appendChild(tabela);
        this.crtaj(tabela);

    }
    crtaj(host)
    {
        const red=document.createElement("tr");
        host.appendChild(red);

        let e=document.createElement("th");
        e.innerHTML="Uloga";
        red.appendChild(e);

        e=document.createElement("th");
        e.innerHTML="Prezime";
        red.appendChild(e);
        e=document.createElement("th");
        e.innerHTML="Ime";
        red.appendChild(e);

        let redd=document.createElement("tr");
         host.appendChild(redd);
         
         let el=document.createElement("td");
         el.innerHTML="Glavni sudija:";
         redd.appendChild(el);
        
         var words;
         if(this.glavni!=""){
         var [a,b]=this.glavni.split(" ");}else{
             var [a,b]="  ".split(" ");}
         this.imegl=document.createElement("td");
         this.imegl.className="imegl";
         this.imegl.innerHTML=a;
         redd.appendChild(this.imegl);
         this.prezgl=document.createElement("td");
         this.prezgl.className="prezgl";
         this.prezgl.innerHTML=b;
         redd.appendChild(this.prezgl);

         let r2=document.createElement("tr");
         host.appendChild(r2);
         
         el=document.createElement("td");
         el.innerHTML="Prvi pomocni sudija:";
         r2.appendChild(el);

        
         if(this.pomocnik1!=""){
            var [a,b]=this.pomocnik1.split(" ");}else{
                var [a,b]="  ".split(" ");}
         this.imep1=document.createElement("td");
         this.imep1.className="imep1";
         this.imep1.innerHTML=a;
         r2.appendChild(this.imep1);
          this.prezp1=document.createElement("td");
         this.prezp1.className="prezp1";
         this.prezp1.innerHTML=b;
         r2.appendChild(this.prezp1);

         
         let r3=document.createElement("tr");
         host.appendChild(r3);
         
         el=document.createElement("td");
         el.innerHTML="Drugi pomocni sudija:";
         r3.appendChild(el);

        
         if(this.pomocnik2!=""){
            var [a,b]=this.pomocnik2.split(" ");}else{
                var [a,b]="helooo world".split(" ");}
        this.imep2=document.createElement("td");
         this.imep2.className="imep1";
         this.imep2.innerHTML=a;
         r3.appendChild(this.imep2);
        this.prezp2=document.createElement("td");
         this.prezp2.className="prezp1";
         this.prezp2.innerHTML=b;
         r3.appendChild(this.prezp2);



    }
    azurirajdelegiranje(a, b, g, pom, pom1)
    {

        alert("this.tekmaid:"+ this.tekmaid);
        alert("a=" +a+"\n pom="+pom+"\n glavni="+this.glavni);
        if(pom==0 )
        {
            this.glavni=a;
            this.pomocnik1=b;
            this.pomocnik2=g;
            alert("usao sam u prazno delegiranje i sad upisujem u bazu");

            fetch("https://localhost:5001/Utakmica/UpisiSudije", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: 0,
                    glavni:this.glavni,
                    pomocnik1: this.pomocnik1,
                    pomocnik2:this.pomocnik2,
                    UtakmicaID: this.tekmaid

                })
            }).then(p => {
                if (p.ok) {
                    alert("ulazim u upis.ok");
                  // alert("this.glavni: "+ this.glavni+this.pomocnik1+this.pomocnik2+ "this.etekma:: "+this.tekmaid);
            
                   
                }
                else if (p.status == 400) {
                    alert("johnyy");
                    // BadRequest vraća lokaciju kao json. Zato čitamo taj json ispod i upisujemo u greskaLokacija, koju ispisujemo u alert-u.
                  
                        alert("Nemoguce je da isti pomocnik bude delegiran 2 puta za isti mec, preporuka sa vrha - Nikola Petrovic(2-1)");
                   
                }
                else {
                    alert("Greška nwka radnodm.");
                }
            }).catch(p => {
                alert("Greška prilikom upisa post.");
            });


            this.pribaviicrtajdelegiranje(pom1)

        }
        else if(pom==1)
        {
        this.glavni=a;
        this.pomocnik1=b;
        this.pomocnik2=g;

        alert("usao sam u crtanje meca sa praznim delegiranjem");
        //alert("id: "+ this.id+" glavni: "+ this.glavni+" pom1: "+ this.pomocnik1+" pom2: "+this.pomocnik2+" tekma1.id:" +this.tekmaid)  
        fetch("https://localhost:5001/Utakmica/IzmeniSudije", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: this.id,
                    glavni:this.glavni,
                    pomocnik1: this.pomocnik1,
                    pomocnik2:this.pomocnik2,
                    UtakmicaID: this.tekmaid

                })
            }).then(p => {
                if (p.ok) {
                    alert("ulazim u upis.ok");
                    alert("a: "+this.a);
                   

                    if(this.glavni!="")
                    {
                        var [c,d]=this.glavni.split(" ");}
                        else{
                            var [a,b]="helooo world".split(" ");
                        }
                    this.imegl.innerHTML=c;
                    this.prezgl.innerHTML=d;
            
            
                    if(this.pomocnik1!=""){
                      
                        var [c,d]=this.pomocnik1.split(" ");}else{
                            var [a,b]="helooo world".split(" ");}
                      this.imep1.innerHTML=c;
                    this.prezp1.innerHTML=d;
            
                
                    if(this.pomocnik2!=""){
                        var [c,d]=this.pomocnik2.split(" ");}else{
                            var [a,b]="helooo world".split(" ");}
                      this.imep2.innerHTML=c;
                    this.prezp2.innerHTML=d;
                     //this.pribaviicrtajdelegiranje(pom1);
                   
                   
                }
                else if (p.status == 400) {
                    alert("johnyy");
                    // BadRequest vraća lokaciju kao json. Zato čitamo taj json ispod i upisujemo u greskaLokacija, koju ispisujemo u alert-u.
                  
                        alert("Nemoguce je da isti pomocnik bude delegiran 2 puta za isti mec, preporuka sa vrha - Nikola Petrovic(iz 2 u 1)");
                   
                }
                else {
                    alert("Greška nwka radnodm.");
                }
            }).catch(p => {
                alert("Greška prilikom upisa put.");
            });
        }

    }

    BrisiDelegiranje()
    {
        alert("brisem delegiranje s aidjem: "+ this.id);
        fetch("https://localhost:5001/Utakmica/ObrisiDelegiranje/" + this.id, {
            method: "DELETE",
            })
            .then(p => 
                {
                    if(p.ok)
                    {
                      
                        this.container.removeChild(this.container.querySelector("table"));
                         alert("brisanje ok");
                    }
                     else if (p.status == 400)
                    {
                          alert("Delegiranje ne postoji!");
                    }
               
                } ).catch(p=>
                    {
                        alert("greska prilikom izvodjenja naredbe");
                    });
               
    }



    pribaviicrtajdelegiranje(host)
    {
        alert("ulazim u pribavi i crtaj delegiranje");
        fetch("https://localhost:5001/Utakmica/PreuzmiDelegiranje").then(p=>
        { 
            
         p.json().then(data =>
            {
                
                 data.forEach(delegiranje => {
                     
                    if(delegiranje.utakmicaID==this.tekmaid)
                    {
                        this.id=delegiranje.id;
                        this.glavni=delegiranje.glavni;
                        this.pomocnik1=delegiranje.pomocnik1;
                        this.pomocnik2=delegiranje.pomocnik2;
                        
                        this.crtajtabelu(host);
                        alert("pribavi i crtaj delefgiranje ok")
                    }
                    
                });;
            })
        });

        

    }
}