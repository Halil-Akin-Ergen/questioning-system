let takeDOM = document.querySelector("#userForm")
takeDOM.addEventListener('submit', takeSubmit)

function takeSubmit(event){
    event.preventDefault() 
    console.log("islem gerceklesti")

    let usernameDOM = document.querySelector('#username')
    console.log(usernameDOM.value)
    localStorage.setItem('user name', usernameDOM.value)

    let phoneDOM = document.querySelector('#phone')
    console.log(phoneDOM.value)
    localStorage.setItem("phone no", phoneDOM.value)

    let idnoDOM = document.querySelector("#idno")
    console.log(idnoDOM.value)
    localStorage.setItem("id no", idnoDOM.value)
} 


