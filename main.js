const textarea = document.querySelector("textarea"),
FileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener('click', () =>{
    console.log(textarea.value)
})
