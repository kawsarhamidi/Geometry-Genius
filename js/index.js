
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
    const baseRhombus = document.getElementById('divide-rhombus').innerText;
    const heightRhombus = document.getElementById('height-rhombus').innerText;
    const rhombusArea = 0.5 *  parseFloat(baseRhombus) * parseFloat(heightRhombus) ;

    dataUpdate(headerName,rhombusArea);

});

document.getElementById('btn-pentagon').addEventListener('click', function () {
    const headerName = document.getElementById('pentagon').innerText;
    const basePentagon = document.getElementById('divide-pentagon').innerText;
    const heightPentagon = document.getElementById('height-pentagon').innerText;
    const pentagonArea = 0.5 *  parseFloat(basePentagon) * parseFloat(heightPentagon) ;

    dataUpdate(headerName,pentagonArea);

});

document.getElementById('btn-ellipse').addEventListener('click', function () {
    const headerName = document.getElementById('ellipse').innerText;
    const baseEllipse = document.getElementById('divide-ellipse').innerText;
    const heightEllipse = document.getElementById('height-ellipse').innerText;
    const ellipseArea = (3.14 *  parseFloat(baseEllipse) * parseFloat(heightEllipse)).toFixed(2) ;

    dataUpdate(headerName,ellipseArea);

});



function dataUpdate(headerName,totalArea,) {
    const container = document.getElementById('result-container');
    count++;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${headerName}</td>
    <td>${totalArea}</td>
    <td>${convertCM()}</td>
    `;
    container.appendChild(tr);
}

function convertCM() {
    const convertToCm = 'Convert To m^2';
    return convertToCm;
}


// if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(others)){
//     const warning = alert('please input number type value');
//     return warning;
// }else if (income <= 0 || food <= 0 || rent <= 0 || others <= 0) {
//     const warning = alert('please input positive number');
//     return warning;
// }

// if (isNaN(savingInput)) {
//     const warning = alert('please input number type value');
//     return warning;       
// }else if (savingInput <= 0 ) {
//     const warning = alert('please input positive number');
//     return warning;
// }

// if(productsPrice === '' || productsPrice <= 0 || ProductQuantity === '' || ProductQuantity <= 0 || productsPrice <= ProductQuantity){
//     return alert("Please Provide Valid Number");
//   }