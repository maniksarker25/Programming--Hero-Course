//step 1:add event click handler at the submit button;
document.getElementById('btn-submit').addEventListener('click',function(){
    // step2: get the email address value:
    // always remember to use .value to get input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    //step 3: get password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   
    
    //Danger: do not verify email password on clint side--just bujar jonna kora hossa
    //step 4: verify email and password check valid user or not
    if(email === 'hero420@gmail.com' && password === 'hero420'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Churi korta aiso valo hoia jaw')
    }



})