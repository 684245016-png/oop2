export{};
let age : number = "60";

console.log("age: %d",age)
if (age<12){
    console.log("เด็กตั๋วราคา $5");
}else if(age>=12 && age<60){
    console.log("วัยรุ่นตั๋วรารคา $10");
}else{
    console.log("ผู้สูงวัยตั๋วราคา $7");
}