window.onload = function () {
    const texto_user = document.getElementById("texto_login")
    const texto_senha = document.getElementById("texto_senha")


    function conferi_entrada() {
        try {
            if (texto_senha.value != "") {
                if(texto_user.value != "admin" && texto_senha.value != "admin") throw new Error("Usuário e senha inválido")
                if (texto_user.value != "admin") throw new Error("Usuário inválido")
                if (texto_senha.value != "admin") throw new Error("Senha inválida")
                window.open("html/pag.html", "_parent")
            }
        } catch (error) {
            alert(error.message)
        }
    }
    texto_user.addEventListener("blur", function () {
        conferi_entrada()
    })

    texto_senha.addEventListener("blur", function () {
            conferi_entrada()
    })








}