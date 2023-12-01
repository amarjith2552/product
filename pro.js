function regg(){

    let reg={
         uname:uname.value,
         email:email.value,
         psd:document.getElementById('psd').value,
     }
     if(reg.uname=='' ||reg.email=='' ||reg.psd==''){
         alert('Fill all Datas')
     }
     else{
         if(reg.uname in localStorage){
             alert('Account already existed')
         }
         else{
             localStorage.setItem(reg.uname,JSON.stringify(reg))
             alert('New account created')
             window.location='./index.html'
         }
     }
 }
 
 function login(){
     let uname=document.getElementById('uname').value
     let psd=document.getElementById('psd').value
 
     if(uname==''||psd==''){
         alert('Enter all details')
     }
     else{
         if(uname in localStorage){
             let ban=JSON.parse(localStorage.getItem(uname))
             if(psd==ban.psd){
                 alert('Login successfull')
                 window.location='./add.html'
             }
             else{
                 alert('incorrect password')
             }
         }
         else{
             alert('account does not found . Register for new account')
             window.location="./examreg.html";
         }
     }
 }

 function add1(){
    const pro={
        idd:idd.value,
        namee:namee.value,
        cat:cat.value,
        price:price.value,
        review:review.value
    }
    console.log(pro);
        if(pro.idd=='' || pro.namee=='' || pro.cat=='' || pro.price=='' || pro.review==''){
            alert('fill all datas')
        }
        else{
            if(pro.idd in localStorage){
            alert('product already exists')
        }
        else{
            localStorage.setItem('product',JSON.stringify(pro))
        alert('product details added successfully')
        
        }
        }
}

function reset1(){
localStorage.clear()
}

function search(){
idd=document.getElementById('idd').value
let product= JSON.parse(localStorage.getItem('pro'))
if(product.idd==idd){
result.innerHTML=`<div class="card p-3 m-2 rounded-4">
<div class="body">
<h5 class="card-title text-center">${product.idd}</h5>
</div>

<p>name: ${product.namee}</p>
<p>category: ${product.cat}</p>
<p>price:$ ${product.price}</p>
<p>review: ${product.review}</p>





</div>`
}
}
