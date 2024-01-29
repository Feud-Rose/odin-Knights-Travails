/*[[-1,2],[1,2],[-2,1],[2,1],[-2,-1],[2,-1],[-1,-2],[1,-2]] */


function getKnightMovementRange(current, target, ...queue){
        let movementRange = [[-1,2],[1,2],[-2,1],[2,1],[-2,-1],[2,-1],[-1,-2],[1,-2]]
        console.log(movementRange)
        for(let i = 0; i < movementRange.length; i++){
            let newX = current[0] + movementRange[i][0]
            let newY = current[1] + movementRange[i][1]
            console.log(newX)
            console.log(newY)
            if(newX >= 0 && newX <= 8 && newY >= 0 && newY <= 8){
              console.log([newX,newY])
              queue.push([newX,newY])
            }
        }
        console.log(queue)
        return queue
    }

function checkMove(square1, square2){ 
        console.log(this.board[square1].validMoves[square2])
        if(square1 >= 0 && square1 < this.numberNodes && square2 >= 0 && square2 < this.numberNodes){ 
          return this.board[square1].validMoves[square2] !== 0 /* && this.board[square1].validMoves[square2] !== 0;  */
        }
    
        return false; 
      }

function findPath([...start],[...end]){ /////x1y1=Starting Coordinates x2y2=Target Coordinates
    
    let queue = [start]
    let movementRange = [[-1,2],[1,2],[-2,1],[2,1],[-2,-1],[2,-1],[-1,-2],[1,-2]]
    visited = new Set()
    let steps = 0
    let currentLevel = 0
   
    console.log(visited)
   /*  console.log(checkVisited([visited],[end])) */


    while(queue.length !=0){
      
      let current = queue.shift()
      if (JSON.stringify(start) === JSON.stringify(end)) return console.log("now what")

      let check = visited.has(`${current[0]}_${current[1]}`)
      console.log(check)
      if (check == true) return console.log(steps)


      visited.add(`${current[0]}_${current[1]}`)

      console.log(current)
      console.log(end)
          for(let i = 0; i < movementRange.length; i++){
              let newX = current[0] + movementRange[i][0]
              let newY = current[1] + movementRange[i][1]
              if(newX >= 0 && newX <= 8 && newY >= 0 && newY <= 8){
                queue.push([newX,newY])
              }
          }
      



      steps++
      console.log(queue)
      console.log(steps)
    } 
}  


function checkVisited([...visited], [...current]){
  let check = visited.has(current)
  console.log(check)
}


const arrTest1 = [0,0]
const arrTest2 = [3,3]
console.log(arrTest1)
console.log(findPath(arrTest1,arrTest2))




/* class Square{
    constructor([x,y]){
    this.position = [x,y]
    }
  
 }  */
//Weighted version
/* 
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
 */
/* 
class Graph { 
    constructor(){ 
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
 */






/////Store non weighted moves
/* 
addKnightMovementRange(index){
    let movementRange = [6,-6,10,-10,15,-15,17,-17]
    for(let i = 0; i < movementRange.length; i++){
        let num = movementRange[i]
        let check = index + num
        console.log(check)
        if(check >= 0 && check < 64){
            this.board[index].validMoves.push(check)
        }

    }
}

class Square{
    validMoves;
    constructor([x,y]){
    this.position = [x,y]
    this.validMoves = [];
    }
        
    addEdge(node){ 
        this.validMoves[node] = 1; 
    }
 }  */