let buttonlist = [];

function notification(button, ingredienser) {
    if (buttonlist.includes(button)) return;
    const div = button.parentNode;

    const firstP = div.querySelector('p');
    const id = firstP.textContent.trim();
    
    const newP = document.createElement('p');
    newP.textContent = `Inneholder: ${ingredienser}`; 
    buttonlist.push(button);

    const pricePtag = div.querySelector('h1');
    
    div.insertBefore(newP, pricePtag); 
    checkbutton = button;
    setTimeout(() => {
        const index = buttonlist.indexOf(button);
        buttonlist.splice(index, 1);
        newP.remove();
    }, 3000);
}
