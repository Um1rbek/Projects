
var arr = [1,2,3,null,4,5,null]

function f(){
    var arr2;
    if(arr == "null") {
        var arr2 = [arr.slice(null)]
    }else{
        
        var arr2 = [arr];
         
    }
    console.log(arr2);
    
}

f();




    // const input = document.querySelector("#rasm");
    // const output = document.querySelector("#output");

    // input.addEventListener("change", () => {
    //     const file = input.files[0];

    //     if (file) {
    //         const img = document.createElement("img");
    //         img.src = URL.createObjectURL(file);
    //         img.style.width = "200px";

    //         output.innerHTML = "";
    //         output.appendChild(img);
    //     }
    // });