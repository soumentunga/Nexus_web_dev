//same thing(Already do in the first.js) we can do  using function 

const React={

    createElement:function(tag,styles,children){

     const element = document.createElement(tag);
        

        //for unorder list 
        if(typeof children === "object"){

            for(let val of children){
                element.append(val)
            }
        }

        else
        element.innerText=children;


        for(let key in styles){
            element.style[key]=styles[key]
        }

        return element
    }

    
}


const ReactDom={
    render:function(element,root){
        root.append(element)

    }
}


const header1= React.createElement("h1",{fontsize:30,backgroundColor:'green',color:'black'},"Hello Coder Soumen");

const header2= React.createElement("h2",{fontsize:30,backgroundColor:'black',color:'white'},"What's Up Coder Friends");

ReactDom.render(header1,document.getElementById('root'))

ReactDom.render(header2,document.getElementById('root'))




//how to make Unorder list tag Using this React & ReactDom 

const li1=React.createElement('li',{},"HTML")
const li2=React.createElement('li',{},"CSS")
const li3= React.createElement('li',{},"JavaScript")
const li4= React.createElement('li',{},"Typescript")
const UL=React.createElement("ul",{fontsize:30,backgroundColor:'green',color:'black'},[li1,li2,li3,li4])

ReactDom.render(UL,document.getElementById('root'))