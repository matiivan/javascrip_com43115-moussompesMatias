
  // // Carrito de compras
  // let carrito = [];

  // document.getElementById("lampara").addEventListener("click", function() {  
  //  getProductPrice("lampara");
  // });

  // document.getElementById("olla").addEventListener("click", function() {
  //   getProductPrice("olla");
  // });

  // document.getElementById("alicate").addEventListener("click", function() {
  //   getProductPrice("alicate");
  // });

  // document.getElementById("cuchillos").addEventListener("click", function() {
  //   getProductPrice("cuchillos");
  // });

  // document.getElementById("tuppers").addEventListener("click", function() {
  //   getProductPrice("tuppers");
  // });

  // function getProductPrice(product) {
  //   let productos = ["lampara", "olla", "alicate", "cuchillos", "tuppers"];

  //   if (productos.includes(product)) {
  //     let precioSinIVA = 0;
  //     let precioConIVA = 0;

  //     if (product === "lampara") {
  //       precioSinIVA = 350;
  //     } else if (product === "olla") {
  //       precioSinIVA = 300;
  //     } else if (product === "alicate") {
  //       precioSinIVA = 100;
  //     } else if (product === "cuchillos") {
  //       precioSinIVA = 1200;
  //     } else if (product === "tuppers") {
  //       precioSinIVA = 600;
  //     }

  //     let confirmarCompra = confirm("¿Desea comprar el producto " + product + "?");

  //     if (confirmarCompra) {
  //       let agregarIVA = confirm("¿Desea agregar el IVA al precio?");
  //       if (agregarIVA) {
  //         precioConIVA = precioSinIVA * 1.21;
  //         let respuestaCarrito = confirm("¿Desea agregar este producto al carrito de compras?");
  //         if (respuestaCarrito) {
  //           carrito.push({ producto: product, precio: precioConIVA });
  //           alert("Producto agregado al carrito de compras.");
  //         } else {
  //           alert("El producto no ha sido agregado al carrito de compras.");
  //         }
  //         alert("El precio con IVA del producto " + product + " es: $" + precioConIVA.toFixed(2));
  //       } else {
  //         let respuestaCarrito = confirm("¿Desea agregar este producto al carrito de compras?");
  //         if (respuestaCarrito) {
  //           carrito.push({ producto: product, precio: precioSinIVA });
  //           alert("Producto agregado al carrito de compras.");
  //         } else {
  //           alert("El producto no ha sido agregado al carrito de compras.");
  //         }
  //         alert("El precio sin IVA del producto " + product + " es: $" + precioSinIVA.toFixed(2));
  //       }
  //     } else {
  //       alert("Gracias por visitar BazarLine. ¡Hasta luego!");
  //     }
  //   } else {
  //     alert("El producto ingresado no está disponible en BazarLine.");
  //   }
  // }

  class BazarLine {
    constructor() {
      this.carrito = [];
  
      const productos = [
        { nombre: "lampara", precioSinIVA: 350 },
        { nombre: "olla", precioSinIVA: 300 },
        { nombre: "alicate", precioSinIVA: 100 },
        { nombre: "cuchillos", precioSinIVA: 1200 },
        { nombre: "tuppers", precioSinIVA: 600 },
        { nombre: "taza", precioSinIVA: 150 },
        { nombre: "plato", precioSinIVA: 200 },
        { nombre: "sarten", precioSinIVA: 450 },
        { nombre: "cafetera", precioSinIVA: 800 },
        { nombre: "cortina", precioSinIVA: 250 },
        { nombre: "espejo", precioSinIVA: 500 },
        { nombre: "cuadro", precioSinIVA: 350 },
        { nombre: "cojin", precioSinIVA: 100 },
        { nombre: "cama", precioSinIVA: 1500 },
        { nombre: "mesa", precioSinIVA: 700 },
        { nombre: "silla", precioSinIVA: 300 },
        { nombre: "escritorio", precioSinIVA: 900 },
        { nombre: "perchero", precioSinIVA: 200 },
        { nombre: "estanteria", precioSinIVA: 600 },
      ];
  
      productos.forEach(producto => {
        const cardElement = document.getElementById(producto.nombre);
        cardElement.addEventListener("click", () => {
          this.getProductPrice(producto);
        });
      });
    }
  
    getProductPrice(producto) {
      const { nombre, precioSinIVA } = producto;
  
      Swal.fire({
        title: '¿Desea comprar este producto?',
        text: `No podrá revertir esta acción para el producto ${nombre}!`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, comprar',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true,
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          const precioConIVA = precioSinIVA * 1.21;
          this.carrito.push({ producto: nombre, precio: precioConIVA });
          this.showAlert(`Producto ${nombre} agregado al carrito de compras.`);
          console.log(`Producto ${nombre} agregado al carrito.`);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.showAlert("La acción ha sido cancelada.");
        }
      });
    }
  
    showAlert(message) {
      Swal.fire({
        title: message,
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-success'
        },
        buttonsStyling: false
      });
    }
  }
  
  const bazarLine = new BazarLine();
  
  