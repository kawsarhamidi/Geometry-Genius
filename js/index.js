
let count = 0;


document.getElementById('btn-triangle').addEventListener('click', function () {
    const headerName = document.getElementById('triangle').innerText;
    const baseTriangle = document.getElementById('base-triangle').value;
    const heightTriangle = document.getElementById('height-triangle').value;

    errorStringEmpty(baseTriangle,heightTriangle);

    const triangleArea = 1/2 * parseFloat(baseTriangle) * parseFloat(heightTriangle) ;
    dataUpdate(headerName,triangleArea);
    
   
});

document.getElementById('btn-rectangle').addEventListener('click', function () {
    const headerName = document.getElementById('rectangle').innerText;
    const baseRectangle = document.getElementById('base-rectangle').value;
    const heightRectangle = document.getElementById('height-rectangle').value;

    errorStringEmpty(baseRectangle,heightRectangle);

    const rectangleArea = parseFloat(baseRectangle) * parseFloat(heightRectangle) ;
    // document.getElementById("expense").innerText = rectangleArea;
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

//result table

function dataUpdate(headerName,totalArea,) {
    const container = document.getElementById('result-container');
    count++;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${headerName}</td>
    <td>${totalArea} cm^2</td>
    <button class='btn btn-sm normal-case mt-3 bg-sky-100'>${convertCM()}</button>
    `;
    container.appendChild(tr);
}
 //convert to meter
function convertCM() {
    const convertToCm = 'Convert To m^2';
    return convertToCm;
}
//alert

function errorStringEmpty(integer1,integer2){
    if(integer1 === '' || integer1 <= 0 || integer2 === '' || integer2 <= 0){
        return alert("Please Provide Valid Number");
      }
      else if (isNaN(integer1) || isNaN(integer2)){
        const warning = alert('please input number type value');
        return warning;
      }
}

//

document.getElementById('my-color').addEventListener('input', function (event) {
    const textarea = document.getElementById('text-box');
    textarea.style.color = event.target.value;
});

