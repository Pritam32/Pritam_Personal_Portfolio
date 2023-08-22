var icon=document.getElementById("icon");
  
  icon.onclick=function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
      icon.src='img/sun.png'
    }
    else{
      icon.src="img/moon.png";
    }
  }
  const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})





  function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
  }
  const phrases=["Pritam Kumar","a Developer","a Freelancer"];
  const el=document.getElementById("typewriter");
  let sleepTime=100;
  let curPhraseIndex=0;
  const writeLoop=async()=>{
    while(true){
      let curword=phrases[curPhraseIndex];

      for(let i=0;i<curword.length;i++){
        el.innerText=curword.substring(0,i+1);
        await sleep(sleepTime);
      }
      await sleep(sleepTime*10);

      for(let i=curword.length;i>0;i--){
        el.innerText=curword.substring(0,i-1);
        await sleep(sleepTime);
      }
      await sleep(sleepTime*5);
      
      if(curPhraseIndex === phrases.length-1){
        curPhraseIndex=0;
      }
      else{
        curPhraseIndex++;
      }
    }
  };
  writeLoop();