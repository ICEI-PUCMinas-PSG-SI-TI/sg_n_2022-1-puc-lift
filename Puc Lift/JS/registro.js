// function cadastrar(){
//     var nome = document.getElementById("name").value;
//     var matricula = document.getElementById("matricula").value;
//     var email = document.getElementById("email").value;
//     var senha = document.getElementById("senha").value;
//     var senha2 = document.getElementById("senha2").value;

//     if(senha == senha2){
//         localStorage.setItem('Name', nome);
//         localStorage.setItem('Matricula', matricula);
//         localStorage.setItem('Email', email);
//         localStorage.setItem('Senha', senha);

//         alert("Registrou");

//         document.getElementById('name').value='';
//         document.getElementById('matricula').value='';
//         document.getElementById('email').value='';
//         document.getElementById('senha').value='';
//         document.getElementById('senha2').value='';
//     } else{
//         alert("Senhas não são iguais");

//         document.getElementById('senha2').value='';
//     }

// }

// window.onload = () => {

//     email.onchange = () => console.log(email.value);
//     nome.onchange = () => console.log(nome.value);
//     matricula.onchange = () => console.log(matricula.value);
//     senha.onchange = () => console.log(senha.value);
//     senha2.onchange = () => console.log(senha2.value);

//     cadastro.onSubmit = (event) => {
//         var emaildigitado = document.getElementById('email').value='';

//         var emailexistente = localStorage.getItem(emaildigitado + "-email");
//         if (emailexistente == emaildigitado) {
//             window.alert("E-mail já cadastrado.")
//         }
//         else{
//             localStorage.setItem(emaildigitado + '-email', email.value);
//             localStorage.setItem(emaildigitado + '-nome', nome.value);
//             localStorage.setItem(emaildigitado + '-matricula', matricula.value);
//             localStorage.setItem(emaildigitado + '-senha', senha.value);

//             event.preventDefault();
//             window.location.href = "../Puc Lift/login.html";
//         }
//     }
// }

function cadastro(){

    var emaildigitado = document.getElementById('email').value;

    var emailexistente = localStorage.getItem(emaildigitado + "-email");
    if (emailexistente == emaildigitado) {
        window.alert("E-mail já cadastrado.")

        window.location.href = "../views/login.html";
    }
    else{
        localStorage.setItem(emaildigitado + '-email', emaildigitado);
        localStorage.setItem(emaildigitado + '-nome', nome.value);
        localStorage.setItem(emaildigitado + '-matricula', matricula.value);
        localStorage.setItem(emaildigitado + '-senha', senha.value);

        window.location.href = "../views/home.html";
    }
}