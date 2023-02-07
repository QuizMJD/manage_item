let productList = [];
let productTable = document.querySelector("#product-list");
let addProductBtn = document.querySelector("#add-product-btn");
let productNameInput = document.querySelector("#product-name");

function renderProductList() {
    productTable.innerHTML = "";
    for (let i = 0; i < productList.length; i++) {
        let product = productList[i];
        let productRow = document.createElement("tr");
        productRow.innerHTML = `
          <td>${i + 1}</td>
          <td>${product}</td>
          <td>
            <button onclick="editProduct(${i})">Sửa</button>
            <button onclick="deleteProduct(${i})">Xoá</button>
          </td>
        `;
        productTable.appendChild(productRow);
    }
}

function addProduct() {
    productList.push(productNameInput.value);
    renderProductList();
    productNameInput.value = "";
}

function editProduct(index) {
    let newProductName = prompt("Nhập tên sản phẩm mới", productList[index]);
    productList[index] = newProductName;
    renderProductList();
}

function deleteProduct(index) {
    productList.splice(index, 1);
    renderProductList();
}


addProductBtn.addEventListener("click", addProduct);
