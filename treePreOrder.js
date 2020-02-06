class Node {
   constructor(value){
   this.value = value,
   this.left = undefined,
   this.right = undefined
 }

}
let a = new Node(34)
  a.left = new Node(32)
  a.right = new Node(40)
  a.left.left = new Node(45)
  a.left.right = new Node(20)
  a.right.right = new Node(101)
  a.right.left = new Node(67)

  function preOrder(x) {
   if (x !== undefined) {
      console.log(x.value);
      preOrder(x.left);
      preOrder(x.right);
   }
}

preOrder(a)
