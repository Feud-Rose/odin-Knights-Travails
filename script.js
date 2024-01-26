
class Square{
    constructor([x,y]){
    this.x = x
    this.y = y 
    }
}









function createBoard() {
    //loop through values 0 through 7 8 times each
    let newBoard = []
    function boardHelper(x,y = 0){
        if(x===8 || y=== 8) return
        
        let arr = new Square([x,y])
        console.log(arr)
        newBoard.push(arr)
        return boardHelper(x,y+1)
    }
    
    for(let i = 0; i <8; ++i){
    let arr = boardHelper(i)
    console.log(i)
    }
    
    return newBoard
}








const arrMoves = [(-1,2),(1,2),(-2,1),(2,1),(-2,-1),(2,-1),(-1,-2),(1,-2)]
const board = createBoard()
console.log(board)
console.log(new Square([1,-2]))