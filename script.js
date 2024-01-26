class Graph { 
    numberNodes; 
    board; 
  
    constructor(numberNodes){ 
      this.numberNodes = numberNodes; 
  
      this.board = this.fillBoard(this.numberNodes) 
  
      for(let i = 0; i < this.numberNodes; i++){ 
        this.addKnightMovementRange(i); 
      }
  
    }
  
    fillBoard(numberNodes) {
        //loop through values 0 through 7 8 times each
        let newBoard = []
        function boardHelper(x,y = 0){
            if(x===8 || y=== 8) return
            
            let arr = new Square([x,y],numberNodes)
            
            newBoard.push(arr)
            return boardHelper(x,y+1)
        }
        
        for(let i = 0; i <8; ++i){
        let arr = boardHelper(i)
        
        }
    
        return newBoard
    }
    
    addKnightMovementRange(index){
        let movementRange = [6,-6,10,-10,15,-15,17,-17]
        for(let i = 0; i < movementRange.length; i++){
            let num = movementRange[i]
            let check = index + num
            if(!check >= 0 && check < 64){
                this.board[index].validMoves[check] = 1
            }

        }
    }


}

 class Square{
    validMoves;
    constructor([x,y]){
    this.position = [x,y]
    this.validMoves = new Array(64).fill(0);
    }
        
    addEdge(node){ 
        this.validMoves[node] = 1; 
    }





 } 


const arrMoves = [(-1,2),(1,2),(-2,1),(2,1),(-2,-1),(2,-1),(-1,-2),(1,-2)]
/* const boardArr = boardIndex() */

/* console.log(new Square([1,-2])) */
/* console.log(boardIndex()) */

let graph = new Graph(64)
console.log(graph)  
console.log(graph)  