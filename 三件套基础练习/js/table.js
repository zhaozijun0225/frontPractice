// 新增
function addRow() {
    let table = document.getElementById('table1');
    // console.log(table);
    let length = table.rows.length;
    // console.log(length);
    let newRow = table.insertRow(length);
    // console.log(newRow);
    // 一个cell等于<td>
    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var operationCol = newRow.insertCell(2);

    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '无联系方式';
    operationCol.innerHTML = '<button onclick="editRow(this)">编辑</button>&nbsp<button onclick="delRow(this)">删除</button>';

}

function delRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


function editRow(button) {
    let row = button.parentNode.parentNode;
    let name = row.cells[0];
    let phone = row.cells[1];

    let inputName = prompt("名字");
    let inputPhone = prompt("电话");

    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;
}