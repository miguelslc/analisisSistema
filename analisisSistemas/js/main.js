let agregarProductosID = document.getElementById("agregarProductosId");
let modificarProductosID = document.getElementById("modificarProductosId");
let eliminarProductosID = document.getElementById("eliminarProductosId");
let confirmarProductosID = document.getElementById("confirmarProductosId");

var names = document.getElementsByName('name[]');

console.log(cantidadProducto)
$(onload).carousel({ interval: 3000 });

$('#bs4-slide-carousel').carousel({
    interval: 3000
})

var precioProducto = [{ producto: "Lavarropas", precio: 9500, total: 0 },
    { producto: "Heladera", precio: 13500, total: 0 }, { producto: "Televisor Smart TV", precio: 32000, total: 0 },
    { producto: "Termotanque", precio: 13000, total: 0 }, { producto: "PlayStation IV", precio: 24350, total: 0 }
];

var radioItem = "<input type='radio' id='radioButtonProductosId'></input>";

const agregarProductos_btn = () => {
    var TableRow = "<tr></tr>";

    let result = "";
    let newProjects = {};
    newProjects = precioProducto.find((p) => {
        if (p.producto === document.getElementById("nombreProducto").value)
            p.total = p.precio * document.getElementById("cantidadProducto").value;
        return p.total

    });

    /* console.log("valor del array . precio: " + this.precioProducto.precio);
    console.log("valor del array . producto: " + this.precioProducto.producto);
    console.log("valor del id del select = " + document.getElementById("cantidadProducto").value);
    console.log("valor del select de producto = " + document.getElementById("nombreProducto").value)
    console.log(newProjects); */
    for (key = 0; key < names.length; key++) {
        TableRow = TableRow.substring(0, TableRow.length - 5) + "<td>" + names[key].value + "</td>" + TableRow.substring(TableRow.length - 5)
    };

    var TrElement = document.createElement("tr");
    TrElement.innerHTML = radioItem + TableRow + newProjects.total;
    document.getElementById("tableBody").appendChild(TrElement);

    modificarProductosID.removeAttribute('hidden');
    eliminarProductosID.removeAttribute('hidden');
    confirmarProductosID.removeAttribute('hidden');
}