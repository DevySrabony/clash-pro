function hideElementById(elementId){
     const element = document.getElementById(elementId);
     element.classList.add('hidden');
}
function showElementById(elementId){
     const element = document.getElementById(elementId);
     element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange400');
}

function getARandomAlphabets(){
    // const alphabets = ['A' , 'B' , 'C','D','E' ,'F' ,'G' ,'H' ,'I','J' ,'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.random(randomNumber);
    const alphabet = alphabets[index];
    // console.log(index)
    return alphabet;
}