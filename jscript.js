function myFunction() 
{
  //other solution
   /* z = document.getElementById("myInput").value;
   
    var x = z.replace(/\b..../g, function(m){ return m.bold(); });
    document.getElementById("aa").innerHTML = x;*/

    change = document.getElementById("myInput");
    let yazi;
    yazi = change.value;
    const words = yazi.split(" ");
    let edited = [];
  
  words.forEach((word, index) => {
    const split = word.split("");
    const toBold = Math.ceil(word.length / 2); 
    edited.push("<b>");
    for(let i = 1; i <= toBold; i++){
      edited.push(split[i-1]);
    }
    edited.push("</b>");
   
    for(let i = toBold; i < split.length; i++){
      edited.push(split[i]);
    }
    edited.push(" ");
  });
  document.getElementById("aa").innerHTML = edited.join("");
}

function copytext(){
  var copyText = document.getElementById("aa");
  
  navigator.clipboard.writeText(copyText.innerHTML);

}