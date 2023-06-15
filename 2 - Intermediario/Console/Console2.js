function a (){
    b();
}

function b () {
    console.warn('teste');
}

a();