function prefix_func(string){
    var p = new Array(string.length);
    p.fill(0);
    var j = 0;
    var i = 1;
    while(i <= string.length - 1){
        if(string[i] == string[j]){
            p[i] = j+1;
            j++; i++;
        }
        else{
            if(j == 0){
                p[i] = 0;
                i++;
            }
            else{
                j = p[j - 1];
            }
        }
    }
    return p;
}

function KMP(){
    var S = document.getElementById("text").value;
    var Q = document.getElementById("string").value;
    var N = S.length;
    var M = Q.length;
    var K = [];
    var k = 0;
    var l = 0;

    var p = prefix_func(Q);
    while(k <= N){
        if(S[k] == Q[l]){
            k++;
            l++;
            if(l == M){
                K.push(k - M);
                l = 0;
            }
        }
        else{
            if(l == 0){
                k++;
            }
            else{
                l = p[l - 1];
            }
        }
    }

    var ans = Q + ": ";
    if(K.length == 0){
        ans = "Not found!";
        document.getElementById("answer").innerHTML = ans;
    }
    else{
        for(let i = 0; i < K.length; i++){
            ans += (K[i] + " ");
        }
        document.getElementById("answer").innerHTML = ans;
    }
}