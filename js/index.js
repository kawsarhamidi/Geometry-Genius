
let count = 0;

document.getElementById('btn-triangle').addEventListener('click', function () {
    const headerName = document.getElementById('triangle').innerText;
    const baseTriangle = document.getElementById('base-triangle').value;
    const heightTriangle = document.getElementById('height-triangle').value;
    const triangleArea = 1/2 * parseFloat(baseTriangle) * parseFloat(heightTriangle) ;

    dataUpdate(headerName,triangleArea);

})


function dataUpdate(headerName,triangleArea,) {
    const container = document.getElementById('result-container');
    count++;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${headerName}</td>
    <td>${triangleArea}</td>
    `;
    container.appendChild(tr);
}