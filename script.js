let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;

const btn = document.querySelector('button')
btn.addEventListener('click',() => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "maluleke45@gmail.com",
        Password : "004E15D6F0774E003CBFE518032AA62D5124",
        To : 'maluleke45@gmail.com',
        From : "you@isp.com",
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
})