const x = document.getElementById("input")
function textbox(){
console.log(x.value);
}
function generatedataa(){
    const a = Math.floor(Math.random()*100);
    const b = Math.floor(Math.random()*100);
    const ab1 = document.createElement("p");
    ab1.style.color="darkred"
    ab1.style.fontSize='40px';
    ab1.style.backgroundColor="white";
    ab1.style.width="300px";
    ab1.style.marginLeft="20px";
    ab1.innerHTML = a+" "+"+"+" "+b;
    document.body.append(ab1);
    console.log(a+"+"+b)
    y=a+b;
    console.log(y)
    }
function generatedataa1(){
        const a = Math.floor(Math.random()*100);
        const b = Math.floor(Math.random()*100);
        const ab1 = document.createElement("p");
        ab1.style.color="darkred"
        ab1.style.fontSize='40px';
        ab1.innerHTML = a+" "+"-"+" "+b;
        ab1.style.backgroundColor="white";
        ab1.style.width="300px";
        ab1.style.marginLeft="20px";
        document.body.append(ab1);
        console.log(a+"-"+b)
        y=a-b;
        console.log(y)
    }
function generatedataa2(){
        const a = Math.floor(Math.random()*100);
        const b = Math.floor(Math.random()*100);
        const ab1 = document.createElement("p");
        ab1.style.color="darkred";
        ab1.style.fontSize='40px';
        ab1.style.backgroundColor="white";
        ab1.style.width="300px";
        ab1.style.marginLeft="20px";
        ab1.innerHTML = a+" "+"*"+" "+b;
        document.body.append(ab1);
        console.log(a+"*"+b)
        y=a*b;
        console.log(y)
    }
function generatedataa3(){
        const a = Math.floor(Math.random()*100);
        const b = Math.floor(Math.random()*100);
        const ab1 = document.createElement("p");
        ab1.style.color="darkred"
        ab1.style.fontSize='40px';
        ab1.innerHTML = a+" "+"/"+" "+b;
        ab1.style.backgroundColor="white";
        ab1.style.width="300px";
        ab1.style.marginLeft="20px";
        document.body.append(ab1);
        console.log(a+"/"+b)
        y=a/b;
        console.log(y)
    }
function resultbutton(){
    
    if(x.value==y){
        const ab = document.createElement("div");
        ab.innerHTML = "&nbsp;&nbsp;&nbsp;Impressive! ✅"+"<br>"+"Your Answer Is :"+this.y;
        ab.style.color="white"
        ab.style.fontSize='20px';
        ab.style.backgroundColor="darkgreen";
        ab.style.width="300px";
        ab.style.marginLeft="20px";
        ab.style.display="grid";
        ab.style.justifyContent="center";
        // ab.style.backgroundColor="white";
        document.body.append(ab)
        "<br>"
    }
    else{
        const ab = document.createElement("div");
        ab.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Incorrect! ❌"+"<br>"+"The Answer Is :"+this.y;
        ab.style.color="white"
        ab.style.fontSize='20px';
        ab.style.backgroundColor="maroon";
        ab.style.width="300px";
        ab.style.marginLeft="20px";
        ab.style.display="grid";
        ab.style.justifyContent="center";
        document.body.append(ab)
    }
}




// const ab = document.createElement("div");
    // ab.innerHTML = a+b;
    // ab.innerHTML = a;
    // document.body.append(ab)
    // ab.innerHTML = a+b;
