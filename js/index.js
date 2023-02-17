
let count = 0;

document.getElementById('btn-triangle').addEventListener('click', function () {
    const headerName = document.getElementById('triangle').innerText;
    const baseTriangle = document.getElementById('base-triangle').value;
    const heightTriangle = document.getElementById('height-triangle').value;
    const triangleArea = 1/2 * parseFloat(baseTriangle) * parseFloat(heightTriangle) ;

    dataUpdate(headerName,triangleArea);

});
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const headerName = document.getElementById('rectangle').innerText;
    const baseRectangle = document.getElementById('base-rectangle').value;
    const heightRectangle = document.getElementById('height-rectangle').value;
    const rectangleArea = parseFloat(baseRectangle) * parseFloat(heightRectangle) ;

    dataUpdate(headerName,rectangleArea);

});


function dataUpdate(headerName,totalArea,) {
    const container = document.getElementById('result-container');
    count++;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${headerName}</td>
    <td>${totalArea}</td>
    `;
    container.appendChild(tr);
}