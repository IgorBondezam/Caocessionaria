window.onload = function () {
    const addCli = document.getElementById("addCli")
    const addProd = document.getElementById("addProd")
    const addVenda = document.getElementById("addVenda")
    const listaCli = document.getElementById("listaCli")


    addCli.addEventListener("click", function () {
        if (!addCli.classList.contains("fundoAzul")) {
            addCli.classList.add("fundoAzul")
            addProd.classList.remove("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")
        } else {
            addCli.classList.remove("fundoAzul")
        }
    })
    addProd.addEventListener("click", function () {
        if (!addProd.classList.contains("fundoAzul")) {
            addProd.classList.add("fundoAzul")
            addCli.classList.remove("fundoAzul")
            addVenda.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")
        } else {
            addProd.classList.remove("fundoAzul")
        }
    })

    addVenda.addEventListener("click", function () {
        if (!addVenda.classList.contains("fundoAzul")) {
            addVenda.classList.add("fundoAzul")
            addProd.classList.remove("fundoAzul")
            addCli.classList.remove("fundoAzul")
            listaCli.classList.remove("fundoAzul")
        } else {
            addVenda.classList.remove("fundoAzul")
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




}