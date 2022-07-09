function pushtoarray() {
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if (window.localStorage.getItem('itemsJson') == null) {
        console.log('if loading........')
        itemsJsonarray = [];
        itemsJsonarray.push([title, desc]);
        window.localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));

    }
    else {
        console.log('else loading....')
        itemsJsonarraystr = window.localStorage.getItem('itemsJson');
        itemsJsonarray = JSON.parse(itemsJsonarraystr);

        itemsJsonarray.push([title, desc]);
        window.localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));
    }
    constructtable();
}
function constructtable() {

    if (window.localStorage.getItem('itemsJson')==null){
                    itemsJsonarray = []; 
                    window.localStorage.setItem('itemsJson', JSON.stringify(itemsJsonsrray))
     } 
     else{
                    itemsJsonarraystr = window.localStorage.getItem('itemsJson')
                    itemsJsonarray = JSON.parse(itemsJsonarraystr);
     }
    let tablebody = document.getElementById('tablebody');
    let str = "";

    if (itemsJsonarraystr != '[]') {
        str += `<tr>
        <th>S No.</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
    </tr>`
    }

    itemsJsonarray.forEach((element, index) => {
        str += `
        <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button onclick=" del(${index})">Delete</button></td>
                    </tr>
        `  ;
    });
    tablebody.innerHTML = str;
}
constructtable();

submit.addEventListener("click", pushtoarray);


function del(itemindex) {
    itemsJsonarraystr = window.localStorage.getItem('itemsJson');
    itemsJsonarray = JSON.parse(itemsJsonarraystr);
    itemsJsonarray.splice(itemindex, 1);
    window.localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));
    constructtable();

}
