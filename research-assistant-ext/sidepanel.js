document.addEventListener('DOMContentLoaded',()=>{
   chrome.storage.local.get(['researchNotes'],function(result){
    if(result.researchNotes){
        document.getElementById('notes').value=result.researchNotes;

    }
   });
   document.getElementById('summarizeBtn').addEventListener('click',summarizeText);
   document.getElementById('saveNotesBtn').addEventListener('click',saveNotes);
});

async function summarizeText() {
    try{
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    const [{result}]= await chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:()=>window.getSelection().toString()
    });
    if(!result){
      showResult("Please Select some text!")
      return;
    }
    const response=await fetch('https://ai-research-assistant-euie.onrender.com/assistant/post',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({content:result, operation:'summarize'})
    });
    if(!response.ok){
        throw new Error(`API Error: ${response.status}`);
    }
     const text= await response.text();
     showResult(text.replace(/\n/g,'<br>'));
    }catch(error){
       showResult('Error: '+error.message);
    }
}

async function saveNotes(){
   const notes=document.getElementById('notes').value;
   chrome.storage.local.set({'researchNotes':notes},function(){
     alert("Notes saved successfully");
   });
}
function showResult(content){

  document.getElementById('results').innerHTML= ` <div class="result-item"><div class="result-content">${content}</div> </div>`;

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="&#x2600;";
    }else{
        themeBtn.innerHTML="&#x1f319;";
    }

});

// ------------------------------
// Copy Summary
// ------------------------------

copyBtn.addEventListener("click", async ()=>{

    try{

        await navigator.clipboard.writeText(results.innerText);

        alert("Summary Copied!");

    }

    catch(err){

        console.log(err);

    }

});

// ------------------------------
// Download Summary
// ------------------------------

downloadBtn.addEventListener("click",()=>{

    const blob = new Blob(

        [results.innerText],

        {type:"text/plain"}

    );

    const url = URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download="summary.txt";

    a.click();

    URL.revokeObjectURL(url);

});

const removeSelectedBtn = document.getElementById("removeSelected");

removeSelectedBtn.addEventListener("click", () => {

    const start = notes.selectionStart;
    const end = notes.selectionEnd;

    if (start === end) {
        alert("Please select the text you want to remove.");
        return;
    }

    const updatedText =
        notes.value.substring(0, start) +
        notes.value.substring(end);

    notes.value = updatedText;

    localStorage.setItem("research_notes", updatedText);

});

const clearNotesBtn = document.getElementById("clearNotes");

clearNotesBtn.addEventListener("click", () => {

    if(confirm("Delete all notes?")){

        notes.value="";

        localStorage.removeItem("research_notes");

    }

});