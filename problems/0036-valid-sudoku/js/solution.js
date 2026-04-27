
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//     Note:
//
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.
var isValidSudoku = function(board) {
    // Satır, sütun ve 3x3 kutular için kümeler oluşturuyoruz
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    // Tüm tahtayı dolaşalım
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];

            // Hücre boşsa ('.' ise) devam et
            if (num === '.') continue;

            // 3x3 kutuların indeksini hesapla
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Aynı satırda tekrar eden bir numara var mı?
            if (rows[i].has(num)) return false;
            rows[i].add(num);

            // Aynı sütunda tekrar eden bir numara var mı?
            if (cols[j].has(num)) return false;
            cols[j].add(num);

            // Aynı 3x3 kutuda tekrar eden bir numara var mı?
            if (boxes[boxIndex].has(num)) return false;
            boxes[boxIndex].add(num);
        }
    }

    // Tüm kurallara uyuluyorsa true döndür
    return true;
};
