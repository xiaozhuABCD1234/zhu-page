window.onload = function(){  
    var btn = document.getElementById("button");
    btn.onclick =function(){  
        const num = f1.b1.value;
        var i =1;
        while (i<=num){
            window.open("https://iw233.cn/API/Random.php");
            i++;
        }
    }
}