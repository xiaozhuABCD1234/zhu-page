window.onload = function(){  
    var btn = document.getElementById("button");
    btn.onclick =function(){  
        const num = f1.num.value;
        const str = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '*', '/', '=', ];
        var s1 = '';
        var i =1;
        if (num<=10000000){
            while (i<=num){
                var j = Math.floor(Math.random() * 70)+8;
                // console.log(j);
                // console.log(str[j]);
                s1 = s1 + str[j];
                i++;
            }
            console.log(s1);
            document.getElementById("p1").innerHTML = s1;
        }
        else{
            window.alert("<=10000000")
        }
    }
}