const loginData=JSON.parse(localStorage.getItem('loginData'));
    if(!loginData ||loginData.email!=='admin@empher.com'){
    alert('Not Logged in as Admin.')
    window.location.href='index.html';}

    const bookGrid = document.getElementById('bookGrid');
    let books=[
        {title:'Book 1',author:'Author 1',category:'Fiction',isAvailable:true},
        {title:'Book 2',author:'Author 2',category:'Technical',isAvailable:false},
    ];
    document.getElementById('showAvailableBooks').addEventListener('click',()=>{
        displayBooks(books.filter((book)=>book.isAvailable));
    });
    function displayBooks(filteredBooks){
        bookGrid.innerHTML='';
        filteredBooks.forEach((book)=>{
            const bookCard=document.createElement('div');
            bookCard.classname='book-card';
            bookCard.innerHTML= `
            <h3>${book.title}</h3>
            <p>Author:${book.author}</p>
            <p>Category:${book.category}</p>
            <p>Status:${book.isAvailable?'Available':'Borrowed'}</p>`;
            bookGrid.appendChild(bookCard);
        });
    }