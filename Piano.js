/*
 * Created by Salma Essam  on 01/07/2024. 
 */
const PianoKeys =document.querySelectorAll('.PianoKeys .key');
const VolumeSlider =document.querySelector('.VolumeSlider input');
const KeyCheckbox =document.querySelector('.KeyCheckbox input');



let allKeys = [];
let audio = new Audio('tunes/a.wav')
const playTune =(key)=>{
    audio.src= `tunes/${key}.wav`;
    audio.play();
    const clickedKey =document.querySelector("[data-key="+''+key+''+"]");
    clickedKey.classList.add('active');
    setTimeout(()=>{
        clickedKey.classList.remove('active');
    },150)
   
};
// '[data-key="${key}"]'
PianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key);
    key.addEventListener('click', ()=>playTune(key.dataset.key))
   // console.log(Key.dataset.key)
});


const handelVolume =(e)=>{
    audio.volume= e.target.value; 
};
const showHideKey =(e)=>{
    PianoKeys.forEach(key=>key.classList.toggle("hide"))
}
   

const pressKey =(e)=>{
   // console.log(e);
    // audio.src= `tunes/${key}.wav`;
    // audio.play();
   if(allKeys.includes(e.key)) playTune(e.key)
};

KeyCheckbox.addEventListener('click',showHideKey)
VolumeSlider.addEventListener('input',handelVolume)
document.addEventListener('keydown',pressKey)