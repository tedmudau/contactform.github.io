let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;

const btn = document.querySelector('button')
btn.addEventListener('click',() => {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "aa47bef73a3965",
        Password : "89b20c44ce7f21",
        To : 'maluleke45@gmail.com',
        From : "you@isp.com",
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
})