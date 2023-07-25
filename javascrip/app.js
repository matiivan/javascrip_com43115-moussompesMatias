
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
      const url = '../productos.json';
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
  document.getElementById('enviar').addEventListener('click', function () {
    
    var hayError = true;

    if (hayError) {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
      });
    } 
  });

  const bazarLine = new BazarLine();



  