
  // Carrito de compras
  let carrito = [];

  document.getElementById("lampara").addEventListener("click", function() {
    getProductPrice("lampara");
  });

  document.getElementById("olla").addEventListener("click", function() {
    getProductPrice("olla");
  });

  document.getElementById("alicate").addEventListener("click", function() {
    getProductPrice("alicate");
  });

  document.getElementById("cuchillos").addEventListener("click", function() {
    getProductPrice("cuchillos");
  });

  document.getElementById("tuppers").addEventListener("click", function() {
    getProductPrice("tuppers");
  });

  function getProductPrice(product) {
    let productos = ["lampara", "olla", "alicate", "cuchillos", "tuppers"];

    if (productos.includes(product)) {
      let precioSinIVA = 0;
      let precioConIVA = 0;

      if (product === "lampara") {
        precioSinIVA = 350;
      } else if (product === "olla") {
        precioSinIVA = 300;
      } else if (product === "alicate") {
        precioSinIVA = 100;
      } else if (product === "cuchillos") {
        precioSinIVA = 1200;
      } else if (product === "tuppers") {
        precioSinIVA = 600;
      }

      let confirmarCompra = confirm("¿Desea comprar el producto " + product + "?");

      if (confirmarCompra) {
        let agregarIVA = confirm("¿Desea agregar el IVA al precio?");
        if (agregarIVA) {
          precioConIVA = precioSinIVA * 1.21;
          let respuestaCarrito = confirm("¿Desea agregar este producto al carrito de compras?");
          if (respuestaCarrito) {
            carrito.push({ producto: product, precio: precioConIVA });
            alert("Producto agregado al carrito de compras.");
          } else {
            alert("El producto no ha sido agregado al carrito de compras.");
          }
          alert("El precio con IVA del producto " + product + " es: $" + precioConIVA.toFixed(2));
        } else {
          let respuestaCarrito = confirm("¿Desea agregar este producto al carrito de compras?");
          if (respuestaCarrito) {
            carrito.push({ producto: product, precio: precioSinIVA });
            alert("Producto agregado al carrito de compras.");
          } else {
            alert("El producto no ha sido agregado al carrito de compras.");
          }
          alert("El precio sin IVA del producto " + product + " es: $" + precioSinIVA.toFixed(2));
        }
      } else {
        alert("Gracias por visitar BazarLine. ¡Hasta luego!");
      }
    } else {
      alert("El producto ingresado no está disponible en BazarLine.");
    }
  }

