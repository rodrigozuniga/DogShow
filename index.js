fetch("https://dog.ceo/api/breeds/image/random")
 .then(r=>r.json())
 .then(r=>{
     console.log(r.message);
     
     document.getElementById('breed').innerText=
            r.message.substr(30).split('/')[0].substr(0,1).toUpperCase()+
            r.message.substr(30).split('/')[0].substr(1)
            
     document.getElementById('img-container').innerHTML =
     `
      <img src="${r.message}" width="400px"/>     
     `
 })
 
 function moreWoofs(){
     console.log('daf')
     window.location.reload()
 }
 