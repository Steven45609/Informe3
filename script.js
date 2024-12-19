function calcularAnillo() {
    const n = parseInt(document.getElementById('dimension').value);
    const k = parseInt(document.getElementById('anillo').value);

    if (k >= Math.ceil(n / 2)) {
        alert("El valor de k es demasiado grande para esta matriz.");
        return;
    }

    const matriz = generarMatriz(n);

    mostrarMatriz(matriz, n);

    const suma = sumarAnillo(matriz, n, k);

    document.getElementById('resultado').innerText = suma;
}

function generarMatriz(n) {
    const matriz = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(Math.floor(Math.random() * 20) - 10); 
        }
        matriz.push(fila);
    }
    return matriz;
}

function mostrarMatriz(matriz, n) {
    const contenedor = document.getElementById('matriz');
    contenedor.innerHTML = "";
    const tabla = document.createElement('table');

    for (let i = 0; i < n; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            const celda = document.createElement('td');
            celda.innerText = matriz[i][j];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}

function sumarAnillo(matriz, n, k) {
    let suma = 0;
    for (let j = k; j < n - k; j++) {
        suma += matriz[k][j];
    }
    for (let i = k + 1; i < n - k; i++) {
        suma += matriz[i][n - k - 1];
    }
    if (k < n - k - 1) {
        for (let j = n - k - 2; j >= k; j--) {
            suma += matriz[n - k - 1][j];
        }
    }
    if (k < n - k - 1) {
        for (let i = n - k - 2; i > k; i--) {
            suma += matriz[i][k];
        }
    }
    return suma;
}