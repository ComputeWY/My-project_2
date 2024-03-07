// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links


const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles =  document.querySelectorAll(".content");

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
     // remove active form other buttons
    btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add("active")
    });
    // hide other articles
    articles.forEach(function(articles) {
        articles.classList.remove('active')
    })
    const element = document.getElementById(id);
    element.classList.add("active")
    };
});


