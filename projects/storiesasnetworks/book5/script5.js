const resizeObserverMiddleBox = new ResizeObserver((entries) => {    
    const middleBox = entries[0].target;
    const newMarginBottom = middleBox.offsetHeight + 30;
    middleBox.style.marginBottom = `-${newMarginBottom}px`;
});

resizeObserverMiddleBox.observe(document.querySelector('#middlebox'));  