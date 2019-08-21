// var titles = document.getElementsByClassName('title');

// for(i = 0;i < titles.length; i++) {
//     console.log(titles[i]);
// }

// Array.from(titles).forEach(function(item){
//     console.log(item)
// })

// const bookListName = document.querySelector("ul");
// bookListName.innerHTML += `<li><span class="name">The Alchemist</span>
//                             <span class="delete">delete</span></li>`

// var books = document.querySelectorAll("#book-list li .name")

// Array.from(books).forEach(function(book){
//     book.textContent += " (book title)"
// })

// const bookListNode = document.querySelector("#book-list");
// console.log(bookListNode.children)

// delete books
const list = document.querySelector("#book-list ul");
list.addEventListener("click", function(e){
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    //add classes
    deleteBtn.classList.add('delete');
    bookName.classList.add('name');

    //add elements to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');


