
function WelcomeMessege(){
fetch('Examen2020foraar/textJsonData.json').then(
    response => response.json()).then(function (data){
        answer(data.WelcomeMessege)
        setTimeout(function(){answer(data.Option1)},2400)
      
        


    }
        
    )}

function talk(){
    let input = document.querySelector('.chatBot--messegesBar').value
  
    if(input !== '' && input !== ' '){
        
    createmessege(input);

    clearInput()

    createAnswer(input);}}

function createmessege(input){
    let newSection = document.createElement('section')

    newSection.classList.add('chatBot--right')
    document.querySelector('.chatBot--convoWrapper').appendChild(newSection)

    let newText = document.createElement('p')
    newText.classList.add('text')
    newText.innerHTML = input
    newSection.appendChild(newText)}


    function createAnswer(input){
console.log(input)
     if(input.includes('ticket') === true && input.includes('buy') === true){

        console.log('its there')

        fetch('textJsonData.JSON').then(
            response => response.json()).then(
                data => answer(data.BuyPlaneTicket))
    }
    else if(input == "hey"){

        console.log('its there')

        fetch('textJsonData.JSON').then(
            response => response.json()).then(
                function(data){
                    answer(data.Hey)
                    setTimeout(function(){answer(data.How)},2400) }
    
            )
        }
    else if(input == "thanks"){

        console.log('its there')

        fetch('textJsonData.JSON').then(
            response => response.json()).then(
                data => answer(data.Thanks))
    
    }



    else{
        console.log('its not')
    }
    }



function clearInput(){

    document.querySelector('.chatBot--messegesBar').value = ''
}



function answer(data){

    setTimeout(function(){
        messegeLoad()
    },400)

    setTimeout(function reply(){
        let loader = document.querySelector('.messegeLoader')
        document.querySelector('.chatBot--convoWrapper').removeChild(loader)
        let newSection = document.createElement('section')

        newSection.classList.add('chatBot--left')
        document.querySelector('.chatBot--convoWrapper').appendChild(newSection)
    
        let newText = document.createElement('p')
        newText.classList.add('text')
        newText.innerHTML = data
        newSection.appendChild(newText)
    

    },2000);

   
}






function messegeLoad(){

    let newSection = document.createElement('section')

    newSection.classList.add('messegeLoader')
    newSection.classList.add('chatBot--left')

    document.querySelector('.chatBot--convoWrapper').appendChild(newSection)

    let newText = document.createElement('div')
    newText.classList.add('dot-typing')
    newSection.appendChild(newText)

    console.log('sdada')
}

