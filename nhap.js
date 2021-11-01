let data = JSON.parse(localStorage.getItem('arrAccount'));

renderData()

function addAccount() {
    let name = document.getElementsByName("name")[0].value;
    let mail = document.getElementsByName("mail")[0].value;
    let phone = document.getElementsByName("phone")[0].value;
    let address = document.getElementsByName("address")[0].value;
    // let position = document.getElementsByName("position")[0].value;
    let position = document.querySelector('input[name="position"]:checked').value;
    let department = document.getElementsByName("department")[0].value;
    let interest = document.getElementsByName("interest")[0].value;
    let id = data.length + 1;
    let account = {
        id: id,
        name: name,
        mail: mail,
        phone: phone,
        address: address,
        position: position,
        department: department,
        interest: interest
    };
    data.push(account);
    localStorage.setItem("arrAccount", JSON.stringify(data));

    renderData();
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("mail")[0].value = "";
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName("address")[0].value = "";
    document.getElementsByName("position")[0].value = "";
    document.getElementsByName("department")[0].value = "";
    document.getElementsByName("interest")[0].value = "";

}

function renderData() {
    htmlAll = "";
    for (let i = 0; i < data.length; i++) {
        let html = "";
        html += '<tr>';
        html += '<td>' + data[i].id + '</td>';
        html += '<td>' + data[i].name + '</td>';
        html += '<td>' + data[i].mail + '</td>';
        html += '<td>' + data[i].phone + '</td>';
        html += '<td>' + data[i].address + '</td>';
        html += '<td>' + data[i].position + '</td>';
        html += '<td>' + data[i].department + '</td>';
        html += '<td>' + data[i].interest + '</td>';
        html += '<td>';
        html += '<button class="btn btn-primary" onclick="upDateAccount(' + data[i].id + ')">Sửa thông tin</button>';
        html += '<button class="btn btn-danger" onclick="deleteAccount(' + data[i].id + ')">Xóa thông tin</button>';
        html += '</td>';
        html += '</tr>';
        htmlAll += html;
    }
    document.getElementById("data-account").innerHTML = htmlAll;
}

function deleteAccount(id) {
    data.splice(id - 1, 1);
    localStorage.setItem("arrAccount", JSON.stringify(data));
    renderData();
}

let id_update = "";
function upDateAccount(id) {
    id_update = id;
    document.getElementById("add-infor").classList.add("hide");
    document.getElementById("update-success").classList.remove("hide");
    let account = data[id - 1];
    document.getElementsByName("name")[0].value = account.name;
    document.getElementsByName("mail")[0].value = account.mail;
    document.getElementsByName("phone")[0].value = account.phone;
    document.getElementsByName("address")[0].value = account.address;
    // document.getElementsByName("position")[0].value = account.position;
    document.querySelector('input[name="position"]:checked').value = account.position;
    document.getElementsByName("department")[0].value = account.department;
    document.getElementsByName("interest")[0].value = account.interest;
}

function upDateSuccess() {
    let name = document.getElementsByName("name")[0].value;
    let mail = document.getElementsByName("mail")[0].value;
    let phone = document.getElementsByName("phone")[0].value;
    let address = document.getElementsByName("address")[0].value;
    // let position = document.getElementsByName("position")[0].value;
    let position = document.querySelector('input[name="position"]:checked').value;
    let department = document.getElementsByName("department")[0].value;
    let interest = document.getElementsByName("interest")[0].value;
    let id = data.length + 1;
    let  account = {
        id: id_update,
        name: name,
        mail: mail,
        phone: phone,
        address: address,
        position: position,
        department: department,
        interest: interest
    };
    data.push(account);
    document.getElementById("add-infor").classList.remove("hide");
    document.getElementById("update-success").classList.add("hide");
    localStorage.setItem("arrAccount", JSON.stringify(data));

    renderData();
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("mail")[0].value = "";
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName("address")[0].value = "";
    document.getElementsByName("position")[0].value = "";
    document.getElementsByName("department")[0].value = "";
    document.getElementsByName("interest")[0].value = "";
}