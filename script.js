// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    // Fonction pour mettre à jour le total
    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
            const price = parseFloat(item.dataset.price);
            total += quantity * price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Gérer les boutons d'ajustement de quantité
    cartItems.forEach(item => {
        const incrementBtn = item.querySelector('.increment-btn');
        const decrementBtn = item.querySelector('.decrement-btn');
        const quantityElem = item.querySelector('.quantity');
        const itemTotalElem = item.querySelector('.item-total');

        incrementBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElem.textContent, 10);
            quantity += 1;
            quantityElem.textContent = quantity;
            itemTotalElem.textContent = (quantity * parseFloat(item.dataset.price)).toFixed(2);
            updateTotal();
        });

        decrementBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElem.textContent, 10);
            if (quantity > 1) {
                quantity -= 1;
                quantityElem.textContent = quantity;
                itemTotalElem.textContent = (quantity * parseFloat(item.dataset.price)).toFixed(2);
                updateTotal();
            }
        });
    });

    // Gérer les boutons de suppression
    cartItems.forEach(item => {
        const removeBtn = item.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });
    });

    // Gérer le bouton "Aimer"
    cartItems.forEach(item => {
        const likeBtn = item.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    // Initialiser le total au chargement de la page
    updateTotal();
});
