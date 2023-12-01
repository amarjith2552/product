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
