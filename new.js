//if user add something add it to local storage.
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
   
    if(notes== null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let myObj= {
        title :  addTitle.value,
        text :  addTxt.value

    }
    notesObj.push(myObj);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    addTxt.value =" ";
    addTitle.value = " ";
    
    showNotes();
})
//function to show notes

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes== null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(element , index){
        html += ` <div class="notesCard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text} </p>
        <a id ="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
    </div>
    </div>
       `

        
    });
    let notesElm = document.getElementById('notes')
    if(notesObj.length != 0){
        notesElm.innerHTML = html;

    }else{
        notesElm.innerHTML  = ` Nothing to show ! Please add notes`

    }


}
//delete note
function deleteNote(index){
    let notes = localStorage.getItem('notes');
   
    if(notes== null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    showNotes();

}
//search bar
let search = document.getElementById("searchTxt");
search.addEventListener("input" , function(){
    let inputval = searchTxt.value.toLowerCase();
    let note= document.getElementById("notes");
  Array.from(note).forEach(function(e){
      let cardTxt = e.getElementByTagName("p")[0].innerText;
      if(cardTxt.includes(inputval)){
          e.style.display = block;

      }
      else{
          e.style.display = none;
      }
      });
  }) 
