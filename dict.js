const url=" https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchbox=document.querySelector(".srch input");
const btn=document.querySelector(".icon");
 
async function dict (word) {
    var response=await fetch(url+ word);
    let data=await response.json();
    console.log(data);
    document.querySelector(".exp").innerHTML=data[0].meanings[0].definitions[0].definition;
}
 btn.addEventListener("click",()=>{
    dict(searchbox.value);
    document.querySelector(".exp1").style.display="block";
})