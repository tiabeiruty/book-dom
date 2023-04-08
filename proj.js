let btn = document.querySelector('#other-book')
let bk = document.querySelector('.text-area')
let arrBooks = ['The Raven Boys', 'Sapiens', 'Why we sleep?', 'The Red Pyramid', 'How to win friends & influnce people', 'Cosmos', 'Jane Eyre', 'The Da Vinci Code', 'Automate the boring stuff with python', 'The Intelligent Investor', 'To kill a Mocking Bird', 'Talking to strangers', 'Rebecca', 'How to diet', 'The psychology of money', 'Think Slow, Think Fast', 'Everything is fu*cked', 'The subtle art of not giving a f*ck', 'The Lord of The FLies', 'Metamorphosis']
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * arrBooks.length)
    bk.innerText = arrBooks[random]
})