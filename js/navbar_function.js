// listing button
let listbox = document.getElementById('list-box')
function list() {
    list_box_width = window.getComputedStyle(listbox).width
    let listitem = document.getElementById('item')
    let listbtn = document.getElementById('list-btn')
    if (true) {
        listbox.style.display = 'block'
        document.getElementById('item').style.display = 'flex';
        listbox.classList.add('list')
        listbox.classList.remove('unlist')
    }

}
function closer() {
    listbox.classList.remove('list')
    listbox.style.display = 'none'
    document.getElementById('item').style.display = 'none';
}

// Mode Changer
function mode_changer() {
    let root = document.querySelector(":root");
    let sift_btn = document.getElementById('toggle_btn');
    if (sift_btn.checked == false) {
        root.style.setProperty('--p-color', 'rgb(255, 60, 0);')
        root.style.setProperty('--s-color', 'rgb(4, 20, 59)')
        root.style.setProperty('--theme-1-color', 'rgb(222, 222, 222)')
        root.style.setProperty('--side-color', 'rgb(9, 55, 118)')
        root.style.setProperty('--text-main-color', '#000')
    }
    else if (sift_btn.checked == true) {
        root.style.setProperty('--s-color', 'black')
        root.style.setProperty('--theme-1-color', 'rgb(31, 29, 29)')
        root.style.setProperty('--side-color', 'rgb(31, 29, 29)')
        root.style.setProperty('--text-main-color', '#fff')
    }
}
setInterval(mode_changer, 100)

// Button Function Url Opening

function open_url(key) {
    if (key == 1) {
        window.open('./login.html')
    }
    if (key == 2) {
        window.open('./signup.html')
    }
}
//Visting Url to Outside
function visit(key) {
    if (key == 1) {
        window.open('https://www.w3schools.com/whatis/')
    }
    else if (key == 2) {
        window.open('https://www.openxcell.com/software-development/')
    }
    else if (key == 3) {
        window.open('https://www.ibm.com/in-en/topics/software-testing')
    }
    else if (key == 4) {
        window.open('https://www.simplilearn.com/data-science-course-placement-guarantee?utm_source=google&utm_medium=cpc&utm_term=what%20is%20data%20scientist&utm_content=15409233513-131991271604-565175586916&utm_device=c&utm_campaign=Search-DataCluster-DSAI-DSBI-IN-Main-AllDevice-JGuarantee-adgroup-DS-Generic-Exact&gclid=CjwKCAjwlqOXBhBqEiwA-hhitFSKiZqK_OKTQL0zmK_EijpaHOx5edxDkAJpruYUAnDsVhoMFHhdXhoCrvMQAvD_BwE')
    }
    else if (key == 5) {
        window.open('https://moz.com/beginners-guide-to-seo')
    }
    else if (key == 6) {
        window.open('https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-database-management-system')
    }
}