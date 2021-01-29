
let callbackBtn = document.getElementById('callback-btn');
let callbackModal = document.getElementById('modal');
let callbackBtnClose = document.getElementById('modal-btn-close')


callbackBtn.onclick = function(){
    callbackModal.style.display = "block";
};

callbackBtnClose.onclick = function(){
    callbackModal.style.display = "none";
};

window.onclick = function(event){
    if(event.target == callbackModal){
        callbackModal.style.display = "none";
    }
};
