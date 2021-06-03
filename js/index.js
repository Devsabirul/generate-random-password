//For Generate Pin 

function GeneratePassword(){
    const generateNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
        var ShowPass = "";
    for (let i = 0; i <10; i++) {
        var generatePass = Math.floor(Math.random() * generateNum.length);
        ShowPass += generateNum.substring(generatePass,generatePass+1); 
    }
    document.getElementById("generate_password").value = ShowPass; 
};
//For remove Input Text

document.getElementById('reset_btn').addEventListener('click',function(){
    document.getElementById('generate_password').value="";
})
//For copy Generate Password

document.getElementById('copy_text').addEventListener('click',function(){
    const generatePass = document.getElementById('generate_password');
    //step 1 Select the text
    generatePass.select();
    //Step 2 copy the text 
    document.execCommand('copy');

})