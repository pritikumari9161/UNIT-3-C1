//store the products array in localstorage as "products"

function product(t,d,p,i){
    this.type = t;
    this.description = d;
    this.price = p;
    this.image = i;
    
}
function sub(){
    event.preventDefault()
    let form = document.getElementById("stuid");
    let type = form.type.value;
    let description = form.description.value;
    let price = form.price.value;
    let image = form.image.value;
    var s1 = new product(type,description,price,image)
    var data = JSON.parse(localStorage.getItem('product')) || []
    data.push(s1)
    localStorage.setItem('product',JSON.stringify(data))
    console.log(s1)
}

function calculate(){
    let data = JSON.parse(localStorage.getItem('product')) || []
    let obj = {}
    for(let i = 0; i<data.length; i++){
        if(obj[data[i].product]==Product)
        obj[data[i].product] = 1
        else
        obj[data[i].product] += 1 
    }
    let top = document.getElementById("navbar");
    for(var i in obj){
    let p = document.createElement('p')
    p.append(i,"--",obj[i])
    top.append(p)
     }
}
calculate()

