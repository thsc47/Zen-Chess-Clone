//Constroi o board e nomeia cada célula
export default class Board{
    draw(e){
        const black = "<div class='chess-cell chess-cell-black'>";
        const white = "<div class='chess-cell chess-cell-white'>";

        for (let row = 0; row < 8; row += 1) {
            let startWithBlack = row % 2;
            for (let col = 0; col < 8; col += 1) {
                let cellType = startWithBlack ? black : white;
                startWithBlack = !startWithBlack;
                e.innerHTML += cellType;
            }
        }
        for(let cells = 0; cells < 64; cells += 1) {
            document.querySelectorAll('.chess-cell')[cells].classList.add('a'+cells)
        }
    }
}



