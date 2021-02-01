console.log('client side js hehe')
const movieForm = document.querySelector('form')
const movieInput =document.querySelector('input')
const messO=document.querySelector('#message-1')
const messT=document.querySelector('#message-2')
const messTh=document.querySelector('#message-3')
const messF=document.querySelector('#message-4')
const messFi=document.querySelector('#message-5')
const messS=document.querySelector('#message-6')



movieForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const movie =movieInput.value
    messO.textContent='Loading...'
 messT.textContent=''
 fetch(/movies?movie='+movie).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            messO.textContent=data.error
        }else{
             messO.textContent='Movie Title: '+data.body.Title 
             messT.textContent= 'Year of Release: ' +data.body.Released
             messTh.textContent= 'Plot: '     +data.body.Plot
             messF.textContent=  'Actors: '  +data.body.Actors
             messFi.textContent= 'Director: '+data.body.Director
             messS.textContent = 'Rating: '+data.body.imdbRating
            
        }
    })
})
})
