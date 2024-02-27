document.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionne l'élément à supprimer
    var element = document.getElementById('editingContainer');

    // Vérifie si l'élément existe
    if (element) {
        // Supprime l'élément du DOM
        element.parentNode.removeChild(element);
    }
});
