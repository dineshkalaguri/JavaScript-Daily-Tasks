// 1 //

for (let i= 1; i<=5; i++) {
    console.log(i);  
}

// 2 //

i=5;
while (i<=20) {
    console.log(i);
    i++;   
}

// 3 //

{ let i=1;
do {
    console.log(i,"hello");
    i++
    
} while (i<=15);
}

// 4 //

let student={
    Ram:30,
    Shyam:29,
}
for (const key in student) {
    console.log(`${key}`);
    
}

// 5 //

{
    let fruit=[
        "Apple",
        "Banana",
        "Dragon",
        "Mango",
        "Grapes",
        "Pine apple",
     ]
     let i=0;
     for (const element of fruit) {
        console.log(i+=element.length);
     }
    }

// 6 //

{
    let arr = ["Genarator","Operator","Destroyer"]
    let i=0;
     for( element of arr)
{
    i+=element.length;
    console.log(`${element}`);
    }
       console.log(`Total number of characters across all strings : ${i}`);
}

 // 7 //

{ 
const mun=10;
let  i=1;
do {
    
    if (i===mun) {
        console.log(i, "This is the guessing number");
     break;
     
     
           
    }else{
        console.log(i," guessing number is not correct.");
        
    }
    i++;
} while (i<=100);
}


// 8 //

for(let i=1; i<=100 ; i++ ){
    if (i%5===0 && i%3===0 ) {
        continue;
        
    }
    console.log(i);
    
 }

 // 9 //

let fruits=[
    "Apple",
    "Orange",
    "Mango"
]
let price=[120,30,90]
for(let i=0;i<=fruits.length;i++){
    console.log(fruits[i]+":"+price[i]);
    
}

// 10 //

let num1 = [2,3,4,87];
let num2 = [3,5,7,4,3];
console.log("The Same elements in both the two arrays are : ");
for(let i=0;i<num1.length;i++)
{
    for(let j=0;j<num2.length;j++)
    {
        if(num1[i]==num2[j])
        {
            console.log(numb[i]);
        }
    }
}

// 11 //

for(let i=1;i<=5;i++)
    {
        let space="";
        for(let j=1;j<=i;j++)
        {
            space+="*"
        }
        console.log(space);
        
    }

// 12 //

    for(let i=1;i<=9;i++)
        {
            space=""
            x=1
            for(let j=9;j>=i;j--)
            {
                space+=x;
                x++;
            }
            console.log(space);
        }

// 13 //

let n=4;
for(let i=0;i<n;i++)
{
    let space="";
    for(let j=0;j<(n-i-1);j++)
    {
        space+=" "
    }
        space+="*" 
    if(i!=0)
    {
        for(let j=0;j<(2*i-1);j++) 
        {
            space+=" "
        }
        space+="*"
    }
    console.log(space); 
}