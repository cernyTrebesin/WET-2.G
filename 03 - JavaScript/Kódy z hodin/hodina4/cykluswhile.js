/*
while(podminka){
    Blok kodu co se opakuje
}
*/

let i=1;

while(i <= 10){
    console.log(i);
    if(i===5){
        //break;

        i = i+3;
        continue;
    }
    i++;
    
}

//i = 1;
/*
do{
    console.log(i);
    i++;
}while(i <= 10);
*/