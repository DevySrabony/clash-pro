// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground ');
//     playGroundSection.classList.remove('hidden')

// }
function continueGame(){
    const alphabet = getARandomAlphabets();
    console.log('Your random alphabet', alphabet);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText =  alphabet;

    setBackgroundColorById(alphabet);


}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}