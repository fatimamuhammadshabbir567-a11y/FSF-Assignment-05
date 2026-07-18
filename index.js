let percentage =document.getElementById('percentage')
let result =document.getElementById('result')

function gradecalculator() {
    
    let marks = Number(percentage.value);

    if(percentage.value === "" ) {
    result.innerHTML = "Please enter your percentage!";
    result.style.color = "#FFD700";
}else if( marks < 0 || marks > 100) {
    result.innerHTML = "🚫 Invalid Number";
    result.style.color = "#FF8C00";
}else if( marks >= 90 && marks <=100) {
    result.innerHTML = "🎉 Grade : A+";
    result.style.color = "#00FF7F";
}else if(marks >=80) {
    result.innerHTML = "🎉 Grade : A";
    result.style.color = "#32CD32";  
}else if(marks >=70) {
    result.innerHTML = "😊 Grade : B";
    result.style.color = "#00BFFF";
}else if(marks >=60) {
    result.innerHTML = "🙂 Grade : C";
    result.style.color = "#FFD700";
}else if(marks >=40) {
    result.innerHTML = "😐 Grade : D"
    result.style.color = "#FF8C00";
}else {
    result.innerHTML = "❌ Grade : Fail";
    result.style.color = "#FF0000";
}

}