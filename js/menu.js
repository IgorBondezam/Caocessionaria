window.onload = function () {
    const addCli = document.getElementById("addCli")
    const addProd = document.getElementById("addProd")
    const addVenda = document.getElementById("addVenda")
    const listaCli = document.getElementById("listaCli")

    const fechar_abaCli = document.querySelector("#fechar_Cli")
    const fechar_abaProd = document.getElementById("fechar_abaProd")
    const fechar_abaVenda = document.getElementById("fechar_venda")

    const fieldCli = document.getElementById("fieldCli")
    const fieldProd = document.getElementById("fieldProd")
    const fieldVenda = document.getElementById("fieldVenda")

    addCli.addEventListener("click", function () {
        if (!addCli.classList.contains("fundoAzul")) {
            addCli.classList.add("fundoAzul")
            addProd.classList.remove("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")

            fieldCli.classList.remove("desaparecer")
            fieldProd.classList.add("desaparecer")
            fieldVenda.classList.add("desaparecer")

        } else {
            addCli.classList.remove("fundoAzul")
            fieldCli.classList.add("desaparecer")

        }
    })
    addProd.addEventListener("click", function () {
        if (!addProd.classList.contains("fundoAzul")) {
            addProd.classList.add("fundoAzul")
            addCli.classList.remove("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")

            fieldCli.classList.add("desaparecer")
            fieldProd.classList.remove("desaparecer")
            fieldVenda.classList.add("desaparecer")
        } else {
            addProd.classList.remove("fundoAzul")
            fieldProd.classList.add("desaparecer")
        }
    })

    addVenda.addEventListener("click", function () {
        if (!addVenda.classList.contains("fundoAzul")) {
            addVenda.classList.add("fundoAzul")
            addProd.classList.remove("fundoAzul")
            addCli.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")

            fieldCli.classList.add("desaparecer")
            fieldProd.classList.add("desaparecer")
            fieldVenda.classList.remove("desaparecer")
        } else {
            addVenda.classList.remove("fundoAzul")
            fieldVenda.classList.add("desaparecer")
        }
    })

    listaCli.addEventListener("click", function () {
        if (!listaCli.classList.contains("fundoAzul")) {
            listaCli.classList.add("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            addProd.classList.remove("fundoAzul")
            addCli.classList.remove("fundoAzul")
        } else {
            listaCli.classList.remove("fundoAzul")
        }
    })

    fechar_abaCli.addEventListener("click", function(){
        addCli.classList.remove("fundoAzul")
        fieldCli.classList.add("desaparecer")
    })

    fechar_abaProd.addEventListener("click", function(){
        addProd.classList.remove("fundoAzul")
        fieldProd.classList.add("desaparecer")
    })

    fechar_abaVenda.addEventListener("click", function(){
        addVenda.classList.remove("fundoAzul")
        fieldVenda.classList.add("desaparecer")
    })

    

}