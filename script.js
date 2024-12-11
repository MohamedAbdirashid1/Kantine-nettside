function notification(button, ingredienser) {
    const div = button.parentNode;

    const firstP = div.querySelector('p');
    const id = firstP.textContent.trim();
    
    const newP = document.createElement('p');
    newP.textContent = `Inneholder: ${ingredienser}`; 
    check = true;

    const pricePtag = div.querySelector('h1');
    
    div.insertBefore(newP, pricePtag); 

    setTimeout(() => {
        newP.remove();
        check = false;
    }, 3000);
}
