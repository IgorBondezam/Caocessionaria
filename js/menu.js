window.onload = function () {
    const body = document.getElementById("body")

    const addCli = document.getElementById("addCli")
    const addProd = document.getElementById("addProd")
    const addVenda = document.getElementById("addVenda")
    const listaCli = document.getElementById("listaCli")
    const caixa_blur = document.getElementById("caixa_blur")

    const fechar_abaCli = document.querySelector("#fechar_Cli")
    const fechar_abaProd = document.getElementById("fechar_abaProd")
    const fechar_abaVenda = document.getElementById("fechar_venda")
    const fechar_abaLista = document.getElementById("fechar_abaLista")

    const fieldLista = document.getElementById("fieldLista")
    const fieldCli = document.getElementById("fieldCli")
    const fieldProd = document.getElementById("fieldProd")
    const fieldVenda = document.getElementById("fieldVenda")

    const caixa_tema = document.getElementById("mudar_tema")
    const dia_modo = document.getElementById("dia_modo")
    const noite_modo = document.getElementById("noite_modo")

    addCli.addEventListener("click", function () {
        if (!addCli.classList.contains("fundoAzul") && !addCli.classList.contains("fundoAzulEscuro")) {
            if (body.classList.contains("corAzulEscuro")) {
                addCli.classList.add("fundoAzulEscuro")
            } else {
                addCli.classList.add("fundoAzul")
            }
            addProd.classList.remove("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")

            addProd.classList.remove("fundoAzulEscuro")
            addVenda.classList.remove("fundoAzulEscuro")
            listaCli.classList.remove("fundoAzulEscuro")

            fieldCli.classList.remove("desaparecer")
            fieldProd.classList.add("desaparecer")
            fieldVenda.classList.add("desaparecer")
            fieldLista.classList.add("desaparecer")

        } else {
            addCli.classList.remove("fundoAzulEscuro")
            addCli.classList.remove("fundoAzul")
            fieldCli.classList.add("desaparecer")

        }
    })
    addProd.addEventListener("click", function () {

        if (!addProd.classList.contains("fundoAzul") && !addProd.classList.contains("fundoAzulEscuro")) {
            if (body.classList.contains("corAzulEscuro")) {
                addProd.classList.add("fundoAzulEscuro")
            } else {
                addProd.classList.add("fundoAzul")
            }
            addCli.classList.remove("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")

            addCli.classList.remove("fundoAzulEscuro")
            addVenda.classList.remove("fundoAzulEscuro")
            listaCli.classList.remove("fundoAzulEscuro")

            fieldCli.classList.add("desaparecer")
            fieldProd.classList.remove("desaparecer")
            fieldVenda.classList.add("desaparecer")
        } else {
            addProd.classList.remove("fundoAzul")
            addProd.classList.remove("fundoAzulEscuro")
            fieldProd.classList.add("desaparecer")
            fieldLista.classList.add("desaparecer")

        }
    })

    addVenda.addEventListener("click", function () {
        if (!addVenda.classList.contains("fundoAzul") && !addVenda.classList.contains("fundoAzulEscuro")) {
            if (body.classList.contains("corAzulEscuro")) {
                addVenda.classList.add("fundoAzulEscuro")
            } else {
                addVenda.classList.add("fundoAzul")
            }

            addProd.classList.remove("fundoAzul")
            addCli.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")

            addCli.classList.remove("fundoAzulEscuro")
            addProd.classList.remove("fundoAzulEscuro")
            listaCli.classList.remove("fundoAzulEscuro")

            fieldCli.classList.add("desaparecer")
            fieldProd.classList.add("desaparecer")
            fieldVenda.classList.remove("desaparecer")
            fieldLista.classList.add("desaparecer")

        } else {
            addVenda.classList.remove("fundoAzulEscuro")
            addVenda.classList.remove("fundoAzul")
            fieldVenda.classList.add("desaparecer")
        }
    })

    listaCli.addEventListener("click", function () {
        if (!listaCli.classList.contains("fundoAzul") && !listaCli.classList.contains("fundoAzulEscuro")) {
            if (body.classList.contains("corAzulEscuro")) {
                listaCli.classList.add("fundoAzulEscuro")
            } else {
                listaCli.classList.add("fundoAzul")
            }
            addVenda.classList.remove("fundoAzul")
            addProd.classList.remove("fundoAzul")
            addCli.classList.remove("fundoAzul")

            addCli.classList.remove("fundoAzulEscuro")
            addProd.classList.remove("fundoAzulEscuro")
            addVenda.classList.remove("fundoAzulEscuro")

            fieldCli.classList.add("desaparecer")
            fieldProd.classList.add("desaparecer")
            fieldVenda.classList.add("desaparecer")
            fieldLista.classList.remove("desaparecer")

        } else {
            listaCli.classList.remove("fundoAzulEscuro")
            listaCli.classList.remove("fundoAzul")
            fieldLista.classList.add("desaparecer")
        }
    })

    fechar_abaCli.addEventListener("click", function () {
        addCli.classList.remove("fundoAzul")
        fieldCli.classList.add("desaparecer")
    })

    fechar_abaProd.addEventListener("click", function () {
        addProd.classList.remove("fundoAzul")
        fieldProd.classList.add("desaparecer")
    })

    fechar_abaVenda.addEventListener("click", function () {
        addVenda.classList.remove("fundoAzul")
        fieldVenda.classList.add("desaparecer")
    })
    fechar_abaLista.addEventListener("click", function(){
        listaCli.classList.remove("fundoAzul")
        fieldLista.classList.add("desaparecer")
    })

    dia_modo.addEventListener("click", function () {
        // cliente
        fieldCli.classList.add("model_field_escuro")
        fieldCli.classList.remove("model_field")
        //produto
        fieldProd.classList.add("model_field_escuro")
        fieldProd.classList.remove("model_field")
        //venda
        fieldVenda.classList.add("model_field_escuro")
        fieldVenda.classList.remove("model_field")
        //lista
        fieldLista.classList.add("model_field_escuro")
        fieldCli.classList.remove("model_field")
        //caixa_blur
        caixa_blur.classList.remove("caixa_blur")
        caixa_blur.classList.add("caixa_blur_escuro")
        //body
        body.classList.remove("corAzul")
        body.classList.add("corAzulEscuro")
        //caixa tema
        caixa_tema.classList.add("mudar_temaEscuro")
        caixa_tema.classList.remove("mudar_tema")

        trocar_cor_lateral()

        //trocar icone
        dia_modo.classList.add("desaparecer")
        noite_modo.classList.remove("desaparecer")

    })

    noite_modo.addEventListener("click", function () {
        fieldCli.classList.remove("model_field_escuro")
        fieldCli.classList.add("model_field")

        fieldProd.classList.remove("model_field_escuro")
        fieldProd.classList.add("model_field")

        fieldVenda.classList.remove("model_field_escuro")
        fieldVenda.classList.add("model_field")

        fieldLista.classList.remove("model_field_escuro")
        fieldLista.classList.add("model_field")

        dia_modo.classList.remove("desaparecer")
        noite_modo.classList.add("desaparecer")
        //caixa_blur
        caixa_blur.classList.add("caixa_blur")
        caixa_blur.classList.remove("caixa_blur_escuro")
        //body
        body.classList.add("corAzul")
        body.classList.remove("corAzulEscuro")
        //caixa tema
        caixa_tema.classList.remove("mudar_temaEscuro")
        caixa_tema.classList.add("mudar_tema")

        trocar_cor_lateral()

    })

    function trocar_cor_lateral() {
        if (addVenda.classList.contains("fundoAzul")) {
            addVenda.classList.add("fundoAzulEscuro")
            addVenda.classList.remove("fundoAzul")
        }
        else if (addCli.classList.contains("fundoAzul")) {
            addCli.classList.add("fundoAzulEscuro")
            addCli.classList.remove("fundoAzul")
        }
        else if (addProd.classList.contains("fundoAzul")) {
            addProd.classList.add("fundoAzulEscuro")
            addProd.classList.remove("fundoAzul")
        }
        else if (listaCli.classList.contains("fundoAzul")) {
            listaCli.classList.add("fundoAzulEscuro")
            listaCli.classList.remove("fundoAzul")
        }

        else if (addVenda.classList.contains("fundoAzulEscuro")) {
            addVenda.classList.remove("fundoAzulEscuro")
            addVenda.classList.add("fundoAzul")
        }
        else if (addCli.classList.contains("fundoAzulEscuro")) {
            addCli.classList.remove("fundoAzulEscuro")
            addCli.classList.add("fundoAzul")
        }
        else if (addProd.classList.contains("fundoAzulEscuro")) {
            addProd.classList.remove("fundoAzulEscuro")
            addProd.classList.add("fundoAzul")
        }
        else if (listaCli.classList.contains("fundoAzulEscuro")) {
            listaCli.classList.remove("fundoAzulEscuro")
            listaCli.classList.add("fundoAzul")
        }
    }

}