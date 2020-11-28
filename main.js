
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
console.log("hello human");

/**
 * Biến 
 * 
 */

var username="Variable"; //String 
var address="address"; //String 
var age=18; // number 
// console.log(username);
// console.log(address);
// console.log("Ten la:"+username);
// console.log("Dia chi:"+address);
// console.log(username,address);
// console.log("Ten la:"+username,"Dia chi:"+address);

// Boolen 
var status = true;
//null 
var numberStudent=null;
// undefined 
var people;

var firstName="Doan";
var lastName="Nhat";
var lop="FE56";
// Hoisting
// Tư động tạo biến fullName nếu đặt console.log trước => undefined
// console.log("fullName:"+fullName);
var fullName="nhat Truong";

 isLogin=true;
 console.log("isLogin:",isLogin);// vẫn chạy 

// console.log( "student:"+student);// chưa khai báo =>lỗi

const PI=3.14;
// PI=3.15; loi 


/**
 * câu lệnh điều kiện 
 */
if(1==="1"){ 
    // 2 dau == kiem tra gia tri
    // 3 dau === kiem tra them kieu du lieu
    console.log("Dieu kien dung")
}else{
    console.log("Dieu kien sai");
}
// DK ? đúng : sai 
1==="1" ? console.log("Dieu kien dung") : console.log("Dieu kien sai");

var btA=true;
var btB=false;

console.log("Ket qua &&:",btA && btB);
console.log("Ket qua ||:", btA || btB);
console.log("Phu dinh cua btA:" , !btA);

switch(0){
    case 0:
        console.log("Day la so 0");
        break;
    case 1:
        console.log("Day la so 1");
        break;
    case 2:
        console.log("Day la so 2");
        break;
    default:
        console.log("khong co dieu kien kien kiem tra");
        break;
}

var list=["ptu1","ptu2","ptu3","ptu4"];
// console.log(list[0]);

/**
 * Vong lap 
 */
for(var i=0;i<list.length;i++){
    console.log(list[i]);
}

var number_1=10;
var number_2=5;
var number_3=20;
var number_4=7;

var total=number_1+number_2;
console.log(total);
var total2=number_3+number_4;
console.log("tong la:",total2)

/**
 * Hàm 
 * Hàm có tham số 
 * Hàm không có giá trị trở về 
 * Hàm có giá trị trả về 
 */


// function tinhTong(){
//     var sum=number_1+number_2;
//     console.log("sum la:",sum);
// }
// tinhTong();

// tinhTong34();
// // vẫn chạy khi chưa định nghĩa function 
// function tinhTong34(){
//     var sum=number_3+number_4;
//     console.log("sum 34:", sum);
// }

// hàm có tham số 

// function tinhTong(a,b){
//     var sum=a+b;
//     console.log("sum la:",sum);
// }

// tinhTong(number_1,number_2);
// tinhTong(number_3,number_4);

function tinhTong(a,b){
    var sum=a+b;
    return sum;
}

// var sum= tinhTong(100,50)+200;

console.log("Tong la:", tinhTong(50,50)+200);
 
/**
 * Bai tập tính điểm trung bình:toán , lý, hóa
 * dtb=(toan +ly + hoa)/3
 * xếp loại dựa vào điểm trung bình 
 * 9-10: xuất sắc 
 * 8 - 9 : giỏi 
 * 7- 8 : khá 
 * 5-7: trung bình 
 * yeu 
 * tinhDtb(), xepLoai()
 */

 function tinhDTB(t,l,h){
     return  (t+l+h)/3;
 }
 function xepLoai(dtb){
    if(dtb>=9 && dtb <=10){
        console.log("Loai xuat sac");
    }
    else if(dtb>=8 && dtb<9){
        console.log("Loai gioi");
    }
    else if(dtb>=7 && dtb<8){
        console.log("Loai kha");
    }
    else if(dtb>=5 && dtb<7) {
        console.log("Loai trung binh");
    }
    else if(dtb<5){
        console.log("Loai Yeu");
    }
}
xepLoai(tinhDTB(1,2,6))

/**
 * DOM 
 */
var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);
var pText=document.getElementById("_pText");
console.log(pText.innerHTML);
/**
 * EVENT JS
 */

// DOM C1:
// function eventClick(){
//     // console.log("eventClick");
//     var txtvalue=document.getElementById("txtInput");
//     console.log(txtvalue.value);
// }

// C2:
// document.getElementById("btnClick").onclick=function(){
//     // console.log("123")
//     var txtValue=document.getElementById("txtInput").value;
//     console.log(txtValue);
// }
//C3 --- callback function
// tham sô là  hàm không tên 
// document.getElementById("btnClick").addEventListener("click",function(){
//     var txtValue=document.getElementById("txtInput").value;
//     console.log(txtValue);
// });

function demoClick(){
        var txtValue=document.getElementById("txtInput").value;
        console.log(txtValue);
}
document.getElementById("btnClick").addEventListener("click",demoClick);

document.getElementById("btnClickMe").addEventListener("click",function(){
    document.getElementById("divContent").innerHTML="Thay đổi rồi nhé";
    document.getElementById("divContent").style.backgroundColor="purple";
    document.getElementById("divContent").style.fontSize="30px";
})
document.getElementById("btnHide").addEventListener("click",function(){
    document.getElementById("divContent").style.display="none";
})
document.getElementById("btnShow").addEventListener("click",function(){
    document.getElementById("divContent").style.display="block";
})
document.getElementById("btnDis").addEventListener("click",function(){
    document.getElementById("btnClickMe").disabled=true;
})
document.getElementById("btnRevDis").addEventListener("click",function(){
    // document.getElementById("btnClickMe").disabled=false;
    document.getElementById("btnClickMe").removeAttribute("disabled");
})
document.getElementById("btnOff").addEventListener("click",function(){
    document.getElementById("img").src="./imgs/pic_bulboff.gif";
})
document.getElementById("btnOn").addEventListener("click",function(){
    document.getElementById("img").src="./imgs/pic_bulbon.gif";
})
document.getElementById("btnLogin").addEventListener("click",function(){
    var userValue=document.getElementById("User").value;
    var pasValue=document.getElementById("Pas").value;
    if(userValue==="Cybersoft" && pasValue==="Cybersoft"){
        changeColor2("Login thanh cong","alert alert-success");
    }else{
        changeColor2("Login that bai","alert alert-danger")
    }
})
// function changeColor(mess,bg){
//     document.getElementById("thongBao").innerHTML=mess;
//         document.getElementById("thongBao").style.display="block";
//         document.getElementById("thongBao").style.backgroundColor=bg;
// }
function changeColor2(mess,classes){
    document.getElementById("thongBao").innerHTML=mess;
    document.getElementById("thongBao").className=classes;
    document.getElementById("thongBao").style.display="block";
}
/**
 * DOM tagname
 */
var tagname=document.getElementsByTagName("button")[0]
console.log(tagname);

/**
 * DOM classname
 */
var _classname=document.getElementsByClassName("btn")[0];
console.log(_classname);
/**
 * DOM querrySelector
 */
var _querrySe=document.querySelector(".container #thongBao")
console.log(_querrySe);
/**
 * DOM querrySelectorAll
 */
var _querrySeAll=document.querySelectorAll(".container .form-group")[0]

document.querySelector(".container #btnTinhTienTip").addEventListener("click",function(){
    var txtTongTien=document.getElementById("txtTongTien").value;
    var txtPhanTramTip=document.getElementById("slPhanTramTip").value; 
    var txtSoNguoi=document.getElementById("txtSoNguoi").value;

    var total=(txtTongTien*txtPhanTramTip)/100/txtSoNguoi;
    console.log(total);
    document.getElementById("txtThongBaoTienTip").innerHTML="$ moi nguoi"+total;
    document.getElementById("txtThongBaoTienTip").className="alert alert-danger d-block";
})

