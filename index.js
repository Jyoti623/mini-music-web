// var audio = new Audio('mp.mp3');
// document.querySelector('.but1').addEventListener('click',function(){
//     audio.play();
//     document.querySelector('.but1').classList.add('vis');
//     var popup =document.querySelector('.but2');
//     popup.classList.remove('vis');
// });

// document.querySelector('.but2').addEventListener('click',function(){
//     audio.pause();
//     document.querySelector('.but2').classList.add('vis');
//     var popup =document.querySelector('.but1');
//     popup.classList.remove('vis');
// });
const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let isplaying = false;
const songsArray=[
    {
        name:"jyoti1",
        title:"Arcade"
    },{
        name:"jyoti2",
        title:"Maston Ka Jhund"
    },{
        name:"jyoti3",
        title:"Lakshya"
    },{
        name:"jyoti4",
        title:"People-X-Nainowale-Ne"
    },{
        name:"jyoti5",
        title:"Love-Me-Like-You-Do"
    },
    {
        name:"jyoti6",
        title:"Aashayein"
    },
    {
        name:"jyoti7",
        title:"Dzanum"
    },
    {
        name:"jyoti8",
        title:"Hurt so Good"
    },
    {
        name:"jyoti9",
        title:"Dreamer"
    },
    {
        name:"jyoti10",
        title:"Infinity"
    },
    {
        name:"jyoti11",
        title:"Waka Waka"
    },
    {
        name:"jyoti12",
        title:"Believer"
    },
    {
        name:"jyoti13",
        title:"enemy"
    },
    {
        name:"jyoti14",
        title:"unstoppable"
    },
    {
        name:"jyoti15",
        title:"Main Tumhara"
    }
]
const playsong = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime")
};

const pausesong= () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("anime")
};
play.addEventListener("click",()=>{
    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});
const callSongChg = (songsArray)=>{
    title.textContent=songsArray.title;
    music.src="songs/"+songsArray.name+".mp3";
    img.src="images/"+songsArray.name+".png";
};
songind=0;

const nextsong=()=>{
    songind=(songind+1) % songsArray.length;
    callSongChg(songsArray[songind]);
    playsong();
};
const prevsong=()=>{
    songind=(songind - 1 + songsArray.length ) % songsArray.length;
    callSongChg(songsArray[songind]);
    playsong();
};
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);