const nav = document.querySelector('.headerbar');
fetch('../includes/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
}
)