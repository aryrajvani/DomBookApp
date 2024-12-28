const loginData=JSON.parse(localStorage.getItem('loginData'));
    if(!loginData ||loginData.email!=='admin@empher.com'){
    alert('Not Logged in as Admin.')
    window.location.href='index.html';}

    const addBookForm =document.getElementById('addBookForm');
    const bookGrid=document.getElementById('bookGrid');
    let books=[];

    addBookForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const title =document.getElementById('title').value;
        const author =document.getElementById('author').value;

        const category =document.getElementById('category').value;

        books.push({title,author,category,isAvailable:true});
        displayBooks();
        alert('Book added Succesfully!!');

        });
        function displayBooks(){
            bookGrid.innerHTML='';
            books.forEach((book,index)=>{
                const bookCard=document.createElement('div');
                bookCard.className= 'book-card';
                bookCard.innerHTML=`
                <h3>${book.title} </h3>
                <p>Author:${book.author}</p>
                <p>Category:${book.category}</p>
                 <p>Status:${book.isAvailable?'Available':'Borrowed'}</p>
                 <button onclick="deleteBook(${index})">Delete</button>`
                 ;
            });
        }
        function deleteBook(index){
            if(confirm('Are you sure about deletion?')){
                books.splice(index,1);
                displayBooks();
            }
        }