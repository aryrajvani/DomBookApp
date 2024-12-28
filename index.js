const loginForm=document.getElementById('loginForm');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email =document.getElementById('email').value;
    const password =document.getElementById('password').value;

    if(email==='admin@empher.com'&& password==='empher@123'){
        localStorage.setItem('loginData',JSON.stringify({email}));
        alert('Logged in as user.')
        window.location.href='admin.html';
    }
    else if(email==='admin@empher.com'&& password==='empher@123'){
        localStorage.setItem('loginData',JSON.stringify({email}));
        alert('Logged in as user.')
        window.location.href='books.html';
    
    }
    else{
        alert('OOPS!!!!....Invalid creds! Try Again')
    }
});