let checkbtn = document.getElementById('checkbox')
    password = document.getElementById('password')
    con_pass = document.getElementById('cnfrm-pass')
    checkbtn.onclick = function (){
        if(password.type == 'password'){
            password.type = "text"
            con_pass.type = 'text'
        }
        else{
            password.type = "password"
            con_pass.type = "password"
        }
    }