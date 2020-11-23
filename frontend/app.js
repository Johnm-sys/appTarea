const botonRegistar = document.querySelector(".btn2")
const container3 = document.querySelector(".container3")
const container2 = document.querySelector(".container2")
const container1 = document.querySelector(".container1")
const hed = document.querySelector(".header")


let city
let ip
let name
let userName
let mail
let password
let query

const d1 = () => {
    container1.style.display = "flex"
    container2.style.display = "none"
    container3.style.display = "none"
}

const d2 = () => {
    container1.style.display = "none"
    container2.style.display = "flex"
    container3.style.display = "none"
}

const d3 = () => {
    container1.style.display = "none"
    container2.style.display = "none"
    hed.style.display = "none"
    container3.style.display = "flex"
}

const directoIp = async() => {
    const { data } = await axios({
        method: "GET",
        baseURL: "http://www.geoplugin.com/",
        url: "http://www.geoplugin.net/json.gp"
    })
    city = data.geoplugin_city
    ip = data.geoplugin_request
}

const createUser = async() => {

    await directoIp()
    console.log(mail, password, city, " entro en crear usuario")
    try {

        const { data } = await axios({
                method: "POST",
                baseURL: "http://127.0.0.1:5000",
                url: "user",
                data: { name, userName, mail, password, ip }
            })
            //console.log(data.mail, data.name, data.city, data.ip, " salio en crear usuario")
            //document.querySelector(".titulos3").innerHTML = data.mail
        localStorage.setItem("token", data.token)
            //createWhite.style.display = "none"
            //message.style.display = "flex"

    } catch (error) {
        console.log(error)
    }
}

const valideUser = async() => {
    await directoIp()
    try {
        const { data } = await axios({
            headers: {
                Authentication: `cats ${localStorage.getItem("token")}`
            },
            method: "GET",
            baseURL: "http://127.0.0.1:5000",
            url: "" + query
        })
        if (data === "No se encontro al usuario") {
            alert("Usuario no Existe")
                // window.location.href = "inicio.html"
        } else {
            if (data === "Error en password") {
                alert("mal contraseña")
            } else {
                document.querySelector(".titulos3").innerHTML = data.userName
                d3()
            }
        }


    } catch (error) {
        console.log(error.message)
    }
}

botonRegistar.addEventListener("click", async() => {
    console.log("click btn2");
    name = document.querySelector(".nombre").value
    userName = document.querySelector(".username").value
    mail = document.querySelector(".email").value
    password = document.querySelector(".password2").value
        //alert("usuario creado")
    console.log(" BOTON CREAR.  nombre " + name + " usuario " + userName + " mail " + mail + " password " + password)
    await createUser()
    d1()
})


document.querySelector(".btn3").addEventListener("click", async() => {
    userName = document.querySelector(".user").value
    password = document.querySelector(".password").value
    query = "user?userName=" + userName + "&password=" + password
    await valideUser()
})



document.querySelector(".i").addEventListener("click", () => {
    d1()
})

document.querySelector(".g").addEventListener("click", () => {
    d2()
})