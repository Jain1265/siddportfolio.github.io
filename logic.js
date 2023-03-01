// logic starts from 1:35-1:50

// responsive 1:53

document.querySelector(".close").style.display ='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        console.log("worked")
        document.querySelector('.open').style.display = 'inline'
        document.querySelector('.close').style.display = 'none'
        ti
    }
    else{
        console.log("not worked")
        document.querySelector('.open').style.display = 'none'
        setTimeout(() =>{
        document.querySelector('.close').style.display = 'inline'
    }, 350);
    }
})