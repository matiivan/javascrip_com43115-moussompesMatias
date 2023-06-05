alert("Bienvenidos a bazarLine");

let productos = ["cuchillos", "tuppers", "papeleria", "ropa", "ferreteria"];

let producto = prompt("Ingrese el producto que desea comprar");

for (let i = 0; i < productos.length; i++) {
  if (producto === productos[i]) {
    let precioSinIVA = 0;
    let precioConIVA = 0;

    if (producto === "cuchillos") {
      precioSinIVA = 350;
    } else if (producto === "tuppers") {
      precioSinIVA = 300;
    } else if (producto === "papeleria") {
      precioSinIVA = 100;
    } else if (producto === "ropa") {
      precioSinIVA = 1200;
    } else if (producto === "ferreteria") {
      precioSinIVA = 600;
    }

    let confirmarCompra = confirm("¿Desea comprar este producto?");

    if (confirmarCompra) {
      let agregarIVA = confirm("¿Desea agregar el IVA al precio?");
      if (agregarIVA) {
        precioConIVA = precioSinIVA * 1.21; 
        alert("El precio con IVA es: $" + precioConIVA.toFixed(2));
      } else {
        alert("El precio sin IVA es: $" + precioSinIVA.toFixed(2));
      }
    } else {
      alert("Gracias por visitar bazarLine. ¡Hasta luego!");
    }
    break;
  }
}

if (!productos.includes(producto)) {
  alert("El producto ingresado no está disponible en bazarLine.");
}
