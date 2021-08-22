export class Lokacija{
    constructor(i,id, ime, domaci, gosti,tekma)
    {
        this.id=id;
        this.x=i;
        this.tip="";//
        this.stat=ime;//ime statistike
        this.domaci=domaci;//koliko ima statistika tog tipa
        this.gosti=gosti;
        this.tekmaid=tekma;
       /*const el=document.createElement("div");
        el.className="lok";
        let levo=document.createElement("div");
        levo.className="levo";
        let desno=document.createElement("div");
        desno.className="desno";*/
      this.el=null;
      this.e=null;
    }
  
    crtajLokaciju(host)
    {

        this.e=document.createElement("div");
        this.e.className="st1";
        /*e.id="st1"+this.x;
        e.id+=this.n;*/
        this.e.innerHTML=this.domaci+"-"+this.gosti;
         this.el=document.createElement("div");
        this.el.className="lok";
        
        for(let i=0;i<this.domaci;i++)
        {
            let divpoen=document.createElement("div");
            divpoen.className="levo";
            this.el.appendChild(divpoen);
        }
        for(let i=0;i<this.gosti;i++)
        {
            let divpoen=document.createElement("div");
            divpoen.className="desno";
            this.el.appendChild(divpoen);
        }
        host.appendChild(this.e);
        host.appendChild(this.el);
        
    }
    izbrisidivove()
    {
        var cur_columns = this.el.querySelectorAll(".levo");
        for (var i = 0; i < cur_columns.length; i++) {
        cur_columns[i].remove();
        }
        cur_columns = this.el.querySelectorAll(".desno");
       for (var i = 0; i < cur_columns.length; i++) {
       cur_columns[i].remove();
       }
    }
    upisistatistiku(id,a,b)
    {
        this.id=id;
        this.domaci=a;
        this.gosti=b;
        this.izbrisidivove();
        this.e.innerHTML=this.domaci+" - "+this.gosti;
        for(let i=0;i<this.domaci;i++)
        {
            let divpoen=document.createElement("div");
            divpoen.className="levo";
            this.el.appendChild(divpoen);
        }
        for(let i=0;i<this.gosti;i++)
        {
            let divpoen=document.createElement("div");
            divpoen.className="desno";
           this. el.appendChild(divpoen);
        }
        
    }
    azurirajstatistiku(tim)
    {

    
        if(tim=="red")
        {
            this.domaci+=1;
            this.e.innerHTML=this.domaci+" - "+this.gosti;
            /*
           
            
            if(this.domaci==1 || this.gosti==0){
                console.log("uso sam da dodam kad je prazan gost");
              
                if(this.gosti==0){  
                    let levo=document.createElement("div");
          levo.className="levo";
          levo.id="levo"+this.x;
          levo.id+=this.n;
          levo.id+=(this.domaci+this.gosti-1);
          let h="lok"+this.x;
           document.getElementById(h+this.n).appendChild(levo);}
          else{
            let desno=document.createElement("div");
            desno.className="desno";
            desno.id="desno"+this.x;
            desno.id+=this.n;
            desno.id+=(this.domaci+this.gosti-1);
            let h="lok"+this.x;
            document.getElementById(h+this.n).appendChild(desno);      
            let b="desno"+this.x;
            b+=this.n;
        document.getElementById(b+(this.domaci-1)).className="levo";
         }
            }
            else{
               console.log("uso sam da dodam kad je domaci vise od 1 i gost vise od 0");
           let levo=document.createElement("div");
          levo.className="desno";
          levo.id="desno"+this.x;
          levo.id+=this.n;
          levo.id+=(this.domaci+this.gosti-1);
          let h="lok"+this.x;
           document.getElementById(h+this.n).appendChild(levo);
           //document.getElementById("levo0").innerHTML=this.domaci;
           if(this.gosti>0){
              
               let b="desno"+this.x;
               b+=this.n;
               b+=(this.domaci-1)
               if(document.getElementById(b)!=null){
           document.getElementById(b).className="levo";}
           else{
            console.log(this.domaci +" - da vidimo - "+this.gosti);
           }}}*/
        }
        else { 
             this.gosti+=1;
             this.e.innerHTML=this.domaci+" - "+this.gosti;
           /* 
          
            if(this.gosti==1 || this.domaci==0)
            {
                console.log("uso sam da dodam kad je domaci nula ili gost 0");
                let desno=document.createElement("div");
            desno.className="desno";
            desno.id="desno"+this.x;
            desno.id+=this.n;
            desno.id+=(this.domaci+this.gosti-1);
            let h="lok"+this.x;
            document.getElementById(h+this.n).appendChild(desno);
            }
            else{
                console.log("uso sam da dodam gost vise od 1 domaci vise od 0");
            let desno=document.createElement("div");
            desno.className="desno";
            desno.id="desno"+this.x;
            desno.id+=this.n;
            desno.id+=(this.domaci+this.gosti-1);
            let h="lok"+this.x;
            document.getElementById(h+this.n).appendChild(desno);
            }
           // document.getElementById("desno"+this.x).innerHTML=this.gosti;
           */
        }
     //alert(this.id);

                
       /* fetch("https://localhost:5001/Utakmica/IzmeniLokaciju" ,{
                
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                   
                    id:this.id,
                    x:this.x,
                    stat: this.stat,
                    domaci:this.domaci,//dodaj neku gresku za ispitivanje bla bala
                    gosti: this.gosti,
                    utakmicaID: this.tekmaid
                   

                })
            }).then(p => {
                if (p.ok) {
                    this.izbrisidivove();
                    this.e.innerHTML=this.domaci+" - "+this.gosti;
                    for(let i=0;i<this.domaci;i++)
                    {
                        let divpoen=document.createElement("div");
                        divpoen.className="levo";
                        this.el.appendChild(divpoen);
                    }
                    for(let i=0;i<this.gosti;i++)
                    {
                        let divpoen=document.createElement("div");
                        divpoen.className="desno";
                       this. el.appendChild(divpoen);
                    }
                    
                }
                else{p.json().then(k=>console.log(k.message))}
                }).catch(p => {
                alert("Greška prilikom upisa.");
            });*/

//alert("this.id: "+ this.id +" this.x: +"+this.x+" this.stat: "+this.stat+" this.domaci: "+ this.domaci+" this.gosti: "+this.gosti+" this.tekmaid: "+this.tekmaid);

            fetch("https://localhost:5001/Utakmica/IzmeniLokaciju",{
            method:"PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                id:this.id,
                x:this.x,
                stat: this.stat,
                domaci:this.domaci,//dodaj neku gresku za ispitivanje bla bala
                gosti: this.gosti,
                utakmicaID: this.tekmaid
               
            })
        }).then(p => {
            if(p.ok)
            {
                this.izbrisidivove();
                this.e.innerHTML=this.domaci+" - "+this.gosti;
                for(let i=0;i<this.domaci;i++)
                {
                    let divpoen=document.createElement("div");
                    divpoen.className="levo";
                    this.el.appendChild(divpoen);
                }
                for(let i=0;i<this.gosti;i++)
                {
                    let divpoen=document.createElement("div");
                    divpoen.className="desno";
                   this. el.appendChild(divpoen);
                }
            }
            else if (p.status == 400)
            {
                alert("Premasili ste kapacitet!");
            }
        }).catch(p => {
            alert("Nije moguce azuriranje!");
        }); 



    }
   
}