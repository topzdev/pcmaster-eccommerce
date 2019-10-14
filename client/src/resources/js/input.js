
const input_number = (e) => {
    let inp = e.children[0];
    let plus = e.children[1].children[0];
    let minus = e.children[1].children[1];

    let value = parseInt(inp.value);
    plus.addEventListener('click', () => {


        if (value != inp.getAttribute('max')) {
            inp.value = value + 1;
        }
    })
    minus.addEventListener('click', () => {
        if (value != inp.getAttribute('min')) {
            inp.value = value - 1;
        }
    })

}

let search = document.getElementById('search-modal');
let search_exit = document.getElementById('search-exit');
let search_open = document.getElementById('btn-search');

search_exit.addEventListener('click', () => search.style.display = 'none');
search_open.addEventListener('click', () => search.style.display = 'flex');

let cart = document.getElementById('cart-modal');
let card_exit = document.getElementById('cart-exit');
let card_open = document.getElementById('btn-cart');

card_exit.addEventListener('click', () => cart.style.display = 'none');
card_open.addEventListener('click', () => cart.style.display = 'block');
