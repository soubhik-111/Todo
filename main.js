let data = []
let data2 = 0

function checkEmpty(title, description) {
    if (title === "" && description === "") {
        alert("Title and Description both can't be empty")
        return false
    }
    else if (title === "") {
        alert("Title can't be empty");
        return false
    }
    else if (description === "") {
        alert("Description can't be empty");
        return false
    }
    else {
        return true
    }
}

function deleting(x) {
    console.log("Deleting Called")
    let temp = JSON.parse(localStorage.getItem('data'));

    temp = temp.filter(function (obj) {
        return obj.sno !== x;
    });
    localStorage.setItem('data', JSON.stringify(temp));
    create(temp)
    location.reload();
}

const addContainer = (e) => {
    const tr = document.createElement('tr')
    tr.innerHTML = `<tr>
        <td>${e.sno} .</td>
        <td>${e.title}</td>
        <td>${e.description}</td>
        <td style="text-align :center"><i class="bi bi-file-earmark-x-fill" onclick="deleting(${e.sno})"></i></td>
    </tr>`
    const ele = document.getElementById("tableBody");
    ele.append(tr)
}

function create(temp) {
    temp.map((e) => {
        addContainer(e)
    })
}

const body = document.querySelector("body")
body.addEventListener("loadeddata", reload())

function reload() {
    let temp = JSON.parse(localStorage.getItem('data'));
    if (temp != null) {
        prev = temp
        data = data.concat(temp);
        if (temp !== null) {
            create(temp)
        }
    }
}


const addBtn = () => {
    let title = document.getElementById("taskTitle").value;
    let description = document.getElementById("taskDescription").value;

    if (checkEmpty(title, description) === true) {
        let myObject = {
            sno: data.length + 1,
            title: title,
            description: description
        }
        data.push(myObject)
        localStorage.setItem('data', JSON.stringify(data));
        addContainer(myObject)
    }
    document.getElementById("taskTitle").value = ""
    document.getElementById("taskDescription").value = ""
}