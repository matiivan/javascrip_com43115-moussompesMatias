

  // class BazarLine {
  //   constructor() {
  //     this.carrito = [];
  
  
  //     this.loadProductos();
  
  //     productos.forEach(producto => {
  //       const cardElement = document.getElementById(producto.nombre);
  //       cardElement.addEventListener("click", () => {
  //         this.getProductPrice(producto);
  //       });
  //     });
  //   }

  //   loadProductos() {
      
  //     const url = './productos.json';
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //         this.productos = data;
  //       })
  //       .catch(error => {
  //         console.error('Error al cargar los productos:', error);
  //       });
  //   }
  
  //   getProductPrice(producto) {
  //     const { nombre, precioSinIVA } = producto;
  
  //     Swal.fire({
  //       title: '¿Desea comprar este producto?',
  //       text: `No podrá revertir esta acción para el producto ${nombre}!`,
  //       icon: 'question',
  //       showCancelButton: true,
  //       confirmButtonText: 'Sí, comprar',
  //       cancelButtonText: 'No, cancelar',
  //       reverseButtons: true,
  //       customClass: {
  //         confirmButton: 'btn btn-success',
  //         cancelButton: 'btn btn-danger'
  //       },
  //       buttonsStyling: false
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         const precioConIVA = precioSinIVA * 1.21;
  //         this.carrito.push({ producto: nombre, precio: precioConIVA });
  //         this.showAlert(`Producto ${nombre} agregado al carrito de compras.`);
  //         console.log(`Producto ${nombre} agregado al carrito.`);
  //       } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         this.showAlert("La acción ha sido cancelada.");
  //       }
  //     });
  //   }
  
  
  // const bazarLine = new BazarLine();
  

  class BazarLine {
    constructor() {
      this.carrito = [];

      
      this.productos = [];
  
      this.loadProductos();
  
      const buttons = document.querySelectorAll('.btn.btn-primary');
      buttons.forEach(button => {
        button.addEventListener('click', (event) => {
          const nombre = event.target.id;
          const producto = this.getProductByName(nombre);
          this.getProductPrice(producto);
        });
      });
    }
  
    loadProductos() {
      const url = './productos.json';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.productos = data;
        })
        .catch(error => {
          console.error('Error al cargar los productos:', error);
        });
    }
  
    getProductByName(nombre) {
      return this.productos.find(producto => producto.nombre === nombre);
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
          this.showAlert(`El producto ${nombre} agregado al carrito de compras.`);
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
  
  