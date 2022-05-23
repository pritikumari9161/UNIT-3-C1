function append(){
    let data = JSON.parse(localStorage.getItem('product')) || []
    let container = document.getElementById('container')
    container.innerHTML = null
     data.forEach(function(el,index){
        let div = document.createElement('div')
       let img = document.createElement('img')
       img.src = el.image;
       let p = document.createElement('p')
       p.innerText = el.type;
       p.style.color = 'green'
       let p1 = document.createElement('p')
       p1.innerText = el.description;
       p1.style.color = 'pink'
       let p2 = document.createElement('p')
       p2.innerText = el.price;
       p2.style.color = 'brown'
       let bin = document.createElement('button')
       bin.innerText = 'Remove'
       bin.addEventListener('click',function(){
           remove(index)
       })
       div.append(img,p,p1,p2,bin)
       container.append(div);
     });
  
}
append();
function remove(index){
    let data = JSON.parse(localStorage.getItem('products')) || []
     let newdata = data.filter(function (el,i){
         if(i===index){
             let trash = JSON.parse(localStorage.getItem('products')) || []
             trash.push(el)
             localStorage.setItem('trash',JSON.stringify(trash))
         }
         else{
             return i!= index;
         }
         return i !== index;
     });

     localStorage.setItem('products',JSON.stringify(newdata))

    append()
}
function calculate(){
    let data = JSON.parse(localStorage.getItem('products')) || []
    let obj = {}
    for(let i = 0; i<data.length; i++){
        if(obj[data[i].product]==products)
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
