function searchfunc(){
    let filter = document.getElementById('myInput') .value.toLowerCase();

    let categ = document.getElementById('Container');

    let box = document.getElementsByClassName('image-box');

    for(var i=0; i<box.length; i++){
        let names = box[i].getElementsByClassName('cat-text')[0];

        if(names){
            let textvalue = names.textContent || names.innerHTML;

            if(textvalue.toLowerCase().indexOf(filter) > -1) {
              box[i].style.display = "";
          }  
              else {box[i].style.display = "none";
            }
        }
    }
}
