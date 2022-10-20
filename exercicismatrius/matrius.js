let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
function paintAll() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0;j < matrix[0].length; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function erase() {
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0; j < matrix[0].length; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}

function paintRightHalf() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0; j < matrix[0].length; j++) { // afegir codi
            if(j > 2){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintLeftHalf() {
    erase();

    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0; j < matrix[0].length/2; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperHalf() {
    erase();

    for (let i = 0; i < matrix.length/2; i++) { // afegir codi
        for (let j = 0; j < matrix[0].length; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintLowerTriangle() {
    erase();

    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0;j < i; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperTriangle() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0;j <= i; j++) { // afegir codi
            // afegir codi
            matrix[j][i].style.backgroundColor = "red";
        }
    }

}

function paintPerimeter() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0;j < matrix[0].length; j++) { // afegir codi
            if (j<1){
                matrix[i][j].style.backgroundColor = "red";
            }if (j==matrix[0].length-1){
                matrix[i][j].style.backgroundColor = "red";
            }if (i<1){
                matrix[i][j].style.backgroundColor = "red";
            }if (i==matrix[0].length){
                matrix[i][j].style.backgroundColor = "red";
            } 
        }
    }
}

function paintCheckerboard() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0;j < matrix[0].length; j++) { // afegir codi
            if((i%2) == 0 && (j%2) == 0){
                matrix[i][j].style.backgroundColor = "red";
            } if((i%2) != 0 && (j%2) != 0){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintCheckerboard2() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0;j < matrix[0].length; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
            for (let m = 0; m < matrix.length; m++) { // afegir codi
                for (let n = 0;n < matrix[0].length; n++) { // afegir codi
            if((m%2) == 0 && (n%2) == 0)
                matrix[m][n].style.backgroundColor = "white";
            else if((m%2) != 0 && (n%2) != 0)
                matrix[m][n].style.backgroundColor = "white";
                }
            }
        }
    }
}

function paintNeighbours() {
    let inputX = document.getElementById("inputX").valueAsNumber;
    let inputY = document.getElementById("inputY").valueAsNumber;


    /*
    for () {
        for () {
	 mes coses ...
	}
    }
    */
}

function countNeighbours(x,y) {
    let count = 0;
    /*
    for () {
        for () {
	 mes coses ...
	}
    }
    */
    return count;
}

function paintAllNeighbours() {
    /*
    for () {
        for () {
	    matrix[i][j].innerText = count;
	}
    }
    */
}
