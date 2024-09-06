class Grid{
    grid = new Array(3);
    playerMark = false;         //false for X, true for O
    gameRounds = 1;

    constructor(){
        for (let i = 0; i < 3; i++){
            let letter = "a";
            this.grid[i] = new Array(3);
            for (let j = 0; j < 3; j++){
                this.grid[i][j] = new Block(i+1 + letter);
                this.grid[i][j].block.textContent = "-";
                letter = String.fromCharCode(letter.charCodeAt(0) + 1);
            }
        }

        this.enableButtons();
    }

    enableButtons(){
        const self = this;
        document.getElementById("playerTurn").textContent = ((this.playerMark === true? "O" : "X") + "'s turn");
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                const playBlock = this.grid[i][j];

                console.log(this);

                playBlock.block.onclick = function (){
                    if (playBlock.isMarked === false){
                        playBlock.block.textContent = (self.playerMark === true) ? "O" : "X";
                        playBlock.isMarked = true;
                        self.playerMark = !self.playerMark;
                        document.getElementById("playerTurn").textContent = ((self.playerMark === true? "O" : "X") + "'s turn");
                        //console.log(self.grid);
                        //self.gameRounds;

                        if (self.gameRounds++ >= 5){
                            let wonStatus = self.checkForWin(playBlock);
                            if (self.gameRounds > 9 && wonStatus === false){ console.log("Draw"); }
                        }
                    }
                    else{ console.error("cannot play on that block");
                        console.log(self.gameRounds);
                     }
                }   
            }
        }
    }
    
    checkForWin(playBlock){
        //console.log("it should work");
        let playerMark = (!this.playerMark) ? "O": "X";

        if (playerMark === this.grid[0][0].block.textContent){
            //console.log("its tweaking");
            if (playerMark === this.grid[1][1].block.textContent && playerMark === this.grid[2][2].block.textContent){
                console.log(playerMark + " has WON!!!");
                return true;
            }
            else if (playerMark === this.grid[0][1].block.textContent && playerMark === this.grid[0][2].block.textContent){
                console.log(playerMark + " has WON!!!");
                return true;
            }
            else if(playerMark === this.grid[1][0].block.textContent && playerMark === this.grid[2][0].block.textContent){
                console.log(playerMark + " has WON!!!");
                return true;
            }
        }
        if(playerMark === this.grid[1][0].block.textContent && playerMark === this.grid[1][1].block.textContent && playerMark === this.grid[1][2].block.textContent){
            console.log(playerMark + " has WON!!!");
            return true;
        }
        else if (playerMark === this.grid[2][0].block.textContent){
            if (playerMark === this.grid[1][1].block.textContent && playerMark === this.grid[0][2].block.textContent){
                console.log(playerMark + " has WON!!!");
                return true;
            }
            else if (playerMark === this.grid[2][1].block.textContent && playerMark === this.grid[2][2].block.textContent){
                console.log(playerMark + " has WON!!!");
                return true;
            }
            else if (playerMark === this.grid[1][0].block.textContent && playerMark === this.grid[0][0].block.textContent){
                console.log(playerMark + " has WON!!!");
                return true;
            }
        }
        else if (playerMark === this.grid[0][1].block.textContent && playerMark === this.grid[1][1].block.textContent && playerMark === this.grid[2][1].block.textContent){
            console.log(playerMark + " has WON!!!");
            return true;
        }
        else if (playerMark === this.grid[0][2].block.textContent && playerMark === this.grid[1][2].block.textContent && playerMark === this.grid[2][2].block.textContent){
            console.log(playerMark + " has WON!!!");
            return true;
        }
        return false;
    }
}

class Block{
    block;
    isMarked;

    constructor(buttonId){
        this.block = document.getElementById(buttonId);
        this.isMarked = false;
    }
}

document.getElementById("start").onclick = function(){
    document.getElementById("start").textContent = "Restart";
    let game = new Grid();
}

//console.log(game.grid);