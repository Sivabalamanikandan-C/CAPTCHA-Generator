var btn1=document.getElementById("btn");
var userInput = document.getElementById("captchaInput");

function generate(){
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var gcaptcha="";

    for(let i=0;i<6;i++){
        var randomnum=Math.floor(Math.random()*chars.length);
        var randomind=chars[randomnum];
        gcaptcha += randomind;
    }

    insert.textContent=gcaptcha;
}
generate();

btn1.addEventListener("click",()=>{
    let generatedCaptcha = insert.textContent; 
    let enteredCaptcha = userInput.value;

    if(enteredCaptcha===generatedCaptcha)
    {
        alert("Captcha Verified Successfully!");
    }
    else
    {
        alert("CAPTCHA Verification Failed,Please try again");
    }
})