let agregarProductosID = document.getElementById("agregarProductosId");
let modificarProductosID = document.getElementById("modificarProductosId");
let eliminarProductosID = document.getElementById("eliminarProductosId");
let confirmarProductosID = document.getElementById("confirmarProductosId");
let agregarContactoID = document.getElementById("agregarContactoID");
let confirmarId = document.getElementById("confirmarId");
let registracionId = document.getElementById("registracionId");
let confirmarReservaId = document.getElementById("confirmarReservaId");
var names = document.getElementsByName('name[]');

var precioProducto = [{ producto: "Lavarropas", precio: 9500, total: 0 },
    { producto: "Heladera", precio: 13500, total: 0 }, { producto: "Televisor Smart TV", precio: 32000, total: 0 },
    { producto: "Termotanque", precio: 13000, total: 0 }, { producto: "PlayStation IV", precio: 24350, total: 0 }
];

var radioItem = "<input name='customRadio' type='radio' id='radioButtonProductosId'></input>";

const agregarProductos_btn = () => {
    var TableRow = "<tr></tr>";
    let newProjects = {};
    newProjects = precioProducto.find((p) => {
        if (p.producto === document.getElementById("nombreProducto").value)
            p.total = p.precio * document.getElementById("cantidadProducto").value;
        return p.total

    });

    for (key = 0; key < names.length; key++) {
        TableRow = TableRow.substring(0, TableRow.length - 5) + "<td>" + names[key].value + "</td>" + TableRow.substring(TableRow.length - 5)
    };

    var TrElement = document.createElement("tr");
    TrElement.innerHTML = radioItem + TableRow + newProjects.total;
    document.getElementById("tableBody").appendChild(TrElement);

    modificarProductosID.removeAttribute('hidden');
    eliminarProductosID.removeAttribute('hidden');
    confirmarProductosID.removeAttribute('hidden');
    confirmarReservaId.removeAttribute('hidden');
}

function cargarProductos() {
    var source = document.getElementById('tableBody');
    var destination = document.getElementById('tableBody2');
    var copy = source.cloneNode(true);
    copy.setAttribute('id', 'tableBody2');
    destination.parentNode.replaceChild(copy, destination);
}

$('.nav flex-column li').on('click', function() {
    var index = $(this).index();
    $('.tab-pane').hide().eq(index).show();
    if (index === 3) cargarProductos();
});

$('#confirmarProductosId').click(function() {
    $("#menu1").hide();
    $('#contactoTab').tab('show').addClass('active');
    $("#menu2").show();
});

$('#confirmarId').click(function() {
    $("#menu3").hide();
    $('#despachoTab').tab('show').addClass('active');
    $("#menu4").show();
});

$('#registracionId').click(function() {
    $("#menu4").hide();
    $('#homeTab').tab('show').addClass('active');
    $("#home").show();
});

// Upon load..
window.addEventListener('load', () => {
    // Grab all the forms
    var forms = document.getElementsByClassName('needs-validation');
    // Iterate over each one
    for (let form of forms) {
        // Add a 'submit' event listener on each one
        form.addEventListener('submit', (evt) => {
            // check if the form input elements have the 'required' attribute
            if (!form.checkValidity()) {
                evt.preventDefault();
                evt.stopPropagation();
                console.log('Bootstrap will handle incomplete form fields');
            } else {
                // Since form is now valid, prevent default behavior..
                evt.preventDefault();
                console.info('All form fields are now valid...');
                $("#menu2").hide();
                $('#productosTab').tab('show').addClass('active');
                $("#menu3").show();

                var source = document.getElementById('tableBody');
                var destination = document.getElementById('tableBody2');
                var copy = source.cloneNode(true);
                copy.setAttribute('id', 'tableBody2');
                destination.parentNode.replaceChild(copy, destination);

            }
            form.classList.add('was-validated');
        });
    }
});