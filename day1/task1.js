
function Add (a,b){

    if (!isNaN(a)&& !isNaN(b)){
        console.log(a+b);
    }

    else
    {
        console.log("Error")
    }

   
}

function Sub  (a,b){
    if (!isNaN(a)&& !isNaN(b)){
        console.log(a-b);
    }

    else
    {
        console.log("Error")
    }
}


function Mulity  (a,b){
    if (!isNaN(a)&& !isNaN(b)){
        console.log(a*b);
    }

    else
    {
        console.log("Error")
    }
}

module.exports = {
	Add: Add,
	Sub: Sub,
    Mulity:Mulity
}






