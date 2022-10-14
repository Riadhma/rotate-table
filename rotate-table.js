
const getFinalTable = (table) => {
    try{ 
        const rowLength = Math.sqrt(table.length);
        const isValidTableArray = _checkRowsAndColumnsEquality(rowLength);

        if (!isValidTableArray){
            return [];
        }
        if (isValidTableArray && table.length == 1){
            return table;
        }

        let matrixTable = [];

        /* Create a matrix table in format of array of arrays */
        while (table.length){
            matrixTable.push(table.splice(0,rowLength)); 
        }

        const columnLength = rowLength;    
        return _getRotatedTable(rowLength, columnLength, matrixTable);
    } catch(error){
        console.error("Error while generating the rotate table.", error);
        throw error;
    }
}

const _rotateMatrix = (rowLength, columnLength, mat) => {
    try{
        let currentRow = 0, currentColumn = 0;
        let previousElement, currentElement;
        
        /* Loop through rows and columns */
        while (currentRow < rowLength && currentColumn < columnLength) {
            if (currentRow + 1 == rowLength || 
                currentColumn + 1 == columnLength)
                break;
    
            previousElement = mat[currentRow + 1][currentColumn];
    
            for(let i = currentColumn; i < columnLength; i++) {
                currentElement = mat[currentRow][i];
                mat[currentRow][i] = previousElement;
                previousElement = currentElement;
            }
            currentRow++;
    
            for(let i = currentRow; i < rowLength; i++) {
                currentElement = mat[i][columnLength - 1];
                mat[i][columnLength - 1] = previousElement;
                previousElement = currentElement;
            }
            columnLength--;
    
            if (currentRow < rowLength) {
                for(let i = columnLength - 1; i >= currentColumn; i--) {
                    currentElement = mat[rowLength - 1][i];
                    mat[rowLength - 1][i] = previousElement;
                    previousElement = currentElement;
                }
            }
            rowLength--;
    
            if (currentColumn < columnLength) {
                for(let i = rowLength - 1; i >= currentRow; i--) {
                    currentElement = mat[i][currentColumn];
                    mat[i][currentColumn] = previousElement;
                    previousElement = currentElement;
                }
            }
            currentColumn++;
        }
        
        return mat;
    } catch (error) {
        console.error("Error while rotate the matrix.", error);
        throw error;
    }
}

/* Converts the 2 dimensional array (matrix) to single array */
const _getRotatedTable = (rowLength, columnLength, matrix) => {
    try{
        const rotatedMatrix = _rotateMatrix(rowLength, columnLength, matrix);
        const rotatedTable = [];

        for (let i = 0; i < rowLength; i++) {
            for(let j = 0; j < columnLength; j++){
                rotatedTable.push(rotatedMatrix[i][j]);
            }
        }    
        return rotatedTable;
    } catch (error) {
        console.error("Error while retrieving the rotated table.", error);
        throw error;
    }
}

/* Function to check if rows are equal to columns */
const _checkRowsAndColumnsEquality = (rowLength) =>{
    if (!Number.isInteger(rowLength)) {
      return false;
    }    
    return true;
}

module.exports = { getFinalTable };