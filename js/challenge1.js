function challenge1(){
    var emailDiv = document.querySelector('#emailDiv');
    if(document.getElementById('subscribe').checked){
        alert('hello world');
        if(emailDiv) emailDiv.style.display = "block";
    } else {
        if(emailDiv) emailDiv.style.display = "none";
    }
}
