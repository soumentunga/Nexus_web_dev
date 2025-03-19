//test2 not dependent on test1 so we can parallaly execute the task1 and task2 using promise.all 

function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}

async function greet() {
        console.log("Hello , I greet You")
        const [data1,data2]= await Promise.all([test1(),test2()])
        //if settimeout of test1() 8 sec and setTimeout of test2() is 5 Sec then Promise.all came after 8 sec(it's takes max and come together)
        
        console.log(data1)
        
        console.log(data2)  
    }

greet();
