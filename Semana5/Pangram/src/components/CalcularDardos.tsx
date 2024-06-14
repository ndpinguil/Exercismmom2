// Función que devuelve los puntos ganados en base a las coordenadas (x, y) del dardo
function calcularPuntosDardos(x: number, y: number): number {
    // Calculamos la distancia desde el centro (0, 0) usando el teorema de Pitágoras
    const distancia = Math.sqrt(x * x + y * y);

    // Determinamos los puntos basados en la distancia calculada
    if (distancia > 10) {
        // El dardo cae fuera del objetivo
        return 0;
    } else if (distancia > 5) {
        // El dardo cae en el círculo exterior
        return 1;
    } else if (distancia > 1) {
        // El dardo cae en el círculo medio
        return 5;
    } else {
        // El dardo cae en el círculo interior
        return 10;
    }
}
