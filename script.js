// DOMContentLoaded ensures the script runs after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const quantityInput = document.getElementById('quantity');
    const itemSelect = document.getElementById('item');
    const orderSummary = document.createElement('div');

    orderSummary.id = 'order-summary';
    orderSummary.style.marginTop = '20px';
    form.appendChild(orderSummary);

    form.addEventListener('input', () => {
        const itemText = itemSelect.options[itemSelect.selectedIndex].text;
        const quantity = quantityInput.value;

        if (quantity && itemText) {
            orderSummary.innerHTML = `<strong>Order Summary:</strong><br>${itemText} x ${quantity}`;
        } else {
            orderSummary.innerHTML = '';
        }
    });

    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const quantity = quantityInput.value;

        if (!name || !address || quantity < 1) {
            e.preventDefault();
            alert("Please fill all fields correctly before placing your order.");
        }
    });
});
