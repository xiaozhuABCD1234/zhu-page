window.onload = function(){  
    let btn = document.getElementById("button");
    btn.onclick =function(){  
        let num1 = f1.num1.value;
        let num2 = f1.num2.value;
        let value = parseInt(num1).toString(num2);
        document.getElementById("p1").innerHTML = value;
    }
}