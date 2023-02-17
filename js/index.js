
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

document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const headerName = document.getElementById('parallelogram').innerText;
    const baseParallelogram = document.getElementById('base-parallelogram').innerText;
    const heightParallelogram = document.getElementById('height-parallelogram').innerText;
    const parallelogramArea = parseFloat(baseParallelogram) * parseFloat(heightParallelogram) ;

    dataUpdate(headerName,parallelogramArea);

});

document.getElementById('btn-rhombus').addEventListener('click', function () {
    const headerName = document.getElementById('rhombus').innerText;
    const baseRhombus = document.getElementById('base-rhombus').innerText;
    const heightRhombus = document.getElementById('height-rhombus').innerText;
    const rhombusArea = 0.5 *  parseFloat(baseRhombus) * parseFloat(heightRhombus) ;

    dataUpdate(headerName,rhombusArea);

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