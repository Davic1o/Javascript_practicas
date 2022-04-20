
function calcularPrecio(precio, descuento) {
    const valorDescuento = 100 - descuento;
    const precioConDescuento = (precio * valorDescuento) / 100;
  
    return precioConDescuento;
}

function PriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value;
const preciof = calcularPrecio(priceValue, DiscountValue);


const Preciofinal = document.getElementById("Preciofinal");
Preciofinal.innerText = "El valor con descuento es: "+ preciof + " Dolares";
}
