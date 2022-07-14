// window.onload = () => {

//     email.onchange = () => console.log(email.value);
//     senha.onchange = () => console.log(senha.value);


// }

function login(){
    localStorage.removeItem('usuariologado-nome');

    var emaildigitado = document.getElementById('email').value;
    var emailexistente = localStorage.getItem(emaildigitado + '-email')
    if (emailexistente == emaildigitado) {
        var senhaexistente = localStorage.getItem(emaildigitado + '-senha')
        var senhadigitada = senha.value
        if (senhaexistente == senhadigitada) { //checar se o usuario fez login
            // var nomeusuario = localStorage.getItem(emaildigitado + '-nome')
            localStorage.setItem('usuariologado-nome', emaildigitado);
            window.alert("Deu certo!")
            


            window.location.href = "../views/perfil.html" //redirecionamento
        }
        else {
            window.alert("Senha incorreta. Tente novamente.")
        }
    }
    else {
        window.alert("E-mail não encontrado.")
    }
}