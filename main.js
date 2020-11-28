
function tinhTien(type,kmGo){
    var sum=0;
    switch(type){
        case "uberX":
            if(kmGo>=21){
                sum=8000+12000*20+(kmGo-21)*10000;
            }
            else if(kmGo>1 && kmGo<21){
                sum=8000+(kmGo-1)*12000;
            }
            else if(kmGo<=1){
                sum=8000*kmGo;
            }
        case "UberSUV":
            if(kmGo>=21){
                sum=8000+12000*20+(kmGo-21)*10000;
            }
            else if(kmGo>1 && kmGo<21){
                sum=8000+(kmGo-1)*12000;
            }
            else if(kmGo<=1){
                sum=8000*kmGo;
            }
        case "UberBlack":
            if(kmGo>=21){
                sum=8000+12000*20+(kmGo-21)*10000;
            }
            else if(kmGo>1 && kmGo<21){
                sum=8000+(kmGo-1)*12000;
            }
            else if(kmGo<=1){
                sum=8000*kmGo;
            }
    }
    return sum;
}
var uberXvalue=document.getElementById("UberX").value;

document.getElementById("uberX").addEventListener("click",function(){
    console.log("123");
    
})