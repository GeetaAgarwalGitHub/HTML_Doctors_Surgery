const footer = document.querySelector('.footerbar');
fetch('../includes/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})