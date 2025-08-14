const API_URL = 'http://localhost:5000'; // Cambiar por URL de producción si aplica

let carrito = [];

async function cargarProductos() {
  const res = await fetch(`${API_URL}/productos`);
  const productos = await res.json();
  const contenedor = document.getElementById('productos');

  productos.forEach(p => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
      <button onclick="agregarAlCarrito('${p.id}', '${p.nombre}', ${p.precio})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id, nombre, precio) {
  carrito.push({ id, nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-pedidos');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
}

async function enviarPedido() {
  const res = await fetch(`${API_URL}/pedido`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carrito)
  });
  alert('Pedido enviado!');
  carrito = [];
  actualizarCarrito();
}

window.onload = cargarProductos;