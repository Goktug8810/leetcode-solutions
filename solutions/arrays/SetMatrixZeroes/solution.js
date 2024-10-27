// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
//
// You must do it in place. !! (Alan karmasikligina dikkat)

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Follow up:
//
//     A straightforward solution using O(mn) space is probably a bad idea.
//     A simple improvement uses O(m + n) space, but still not the best solution.
//     Could you devise a constant space solution?


// https://leetcode.com/problems/set-matrix-zeroes/description/


var setZeroes = function(matrix) {
    let isCol = false;
    let R = matrix.length;
    let C = matrix[0].length;

    // İlk sütunda `0` olup olmadığını kontrol et
    for (let i = 0; i < R; i++) {
        if (matrix[i][0] === 0) {
            isCol = true;
        }
        // İlk satır ve sütunu işaret olarak kullan
        for (let j = 1; j < C; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // İşaretli satır ve sütunları sıfırla
    for (let i = 1; i < R; i++) {
        for (let j = 1; j < C; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Gerekirse ilk satırı sıfırla
    if (matrix[0][0] === 0) {
        for (let j = 0; j < C; j++) {
            matrix[0][j] = 0;
        }
    }

    // Gerekirse ilk sütunu sıfırla
    if (isCol) {
        for (let i = 0; i < R; i++) {
            matrix[i][0] = 0;
        }
    }
};
