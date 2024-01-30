class Node {
  constructor([x, y], parent = null) {
    this.position = [x, y];
    this.parent = parent;
    this.child = [];
  }
}

function knightMovement(start, end) {
  //Knight Movement Range
  const movementRange = [
    [-1, 2],
    [1, 2],
    [-2, 1],
    [2, 1],
    [-2, -1],
    [2, -1],
    [-1, -2],
    [1, -2],
  ];
  console.log(end);
  //Check start and end
  let validateStart = limitCheck(start);
  let validateEnd = limitCheck(end);
  if (!validateStart || !validateEnd) return console.log("Outside of Board");
  if (JSON.stringify(start) === JSON.stringify(end))
    return console.log("Already There");
  visited = new Set();

  //Create root
  let root = new Node(start);
  console.log(root);
  //Create Queue
  const queue = [root];

  //Build a Tree
  while (queue.length != 0) {
    let current = queue.shift();
    console.log(current);
    console.log(queue);
    if (current.parent)
      parent.child = (current.position[0], current.position[1]);

    //Track visited
    visited.add(`${current.position[0]}_${current.position[1]}`);

    for (let i = 0; i < movementRange.length; i++) {
      let newX = current.position[0] + movementRange[i][0];
      let newY = current.position[1] + movementRange[i][1];
      let checkRange = limitCheck([newX, newY]);
      if (checkRange) {
        let nodeTemp = new Node([newX, newY], current);
        current.child.push(nodeTemp);
        if (JSON.stringify(nodeTemp.position) === JSON.stringify(end))
          return nodeTemp;

        ///Only Queue up new squares
        let check = visited.has(
          `${nodeTemp.position[0]}_${nodeTemp.position[1]}`
        );
        if (!check) {
          console.log(JSON.stringify(nodeTemp.position));
          queue.push(nodeTemp);
        }
      }
    }

    let checkForEnd = visited.has(`${end[0]}_${end[1]}`);
    console.log(checkForEnd);
    if (checkForEnd) return root;
    console.log(root);
    console.log(queue);
  }
}

///Make sure numbers stay within range of the Board
function limitCheck([x, y]) {
  if (x >= 0 && x <= 8 && y >= 0 && y <= 8) return true;
}

const startTest = [0, 0];
const endTest = [7, 7];

let moveTree = knightMovement(startTest, endTest);
console.log(moveTree);

//////Go from Node -> Root and Output Path
function buildPath(node, path = []) {
  console.log(node);
  if (node.parent === null) {
    path.push(node.position);
    return console.log(
      `Reached in ${path.length} moves ${JSON.stringify(path.reverse())}`
    );
  }

  console.log(node.position);
  path.push(node.position);
  return buildPath(node.parent, path);
}

console.log(buildPath(moveTree));
