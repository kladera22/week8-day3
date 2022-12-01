//! Problem #1: 
class Node{
    constructor(val){
        this.val = val
        this.next = null; 
        this.prev = null; 
    }
}
   class DoublyLinkedList{
        constructor(val){
        this.val = val
        this.next = null;
    }
    push(val){
        let newNode = new Node (val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        this.length++
        return this
    }
    unshift(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.head.prev = newNode
        this.newNode.next = this.head
        this.head = newNode
    
        this.length++
        return this
    }
    shift(){
        if(!this.length) return undefined

        if(this.length === 1){
            this.head = null
            this.tail = null
        }

        let oldHead = this.head

        this.head = oldHead.next
        oldHead.next = null
        this.head.prev = null

        this.length--
        return oldHead
    }
    pop(){
        if(!this.head) return undefined

        if(this.length === 1){
            this.head = null
            this.tail = null
        }

        let poppedNode = this.tail; 

        this.tail = poppedNode.prev
        this.tail.next = null
        poppedNode.prev = null

        this.length--
        return poppedNode
    }
    get(index){
        if(index < 0|| index >= this.length) return undefined

        let count
        let current

        if(index <= this.length/2){
            current = this.head
            count = 0

            while(index !== count){
                current = current.next
                count++
            }
        } else {
            current = this.tail
            count = this.length-1

            while(index !== count){
                current = current.prev
                count--
            }
        }
        return current
    }
    set(index, val){
        let foundNode = this.get(index)

        if(foundNode){
            this.val = val
            return this
        }
        return false
    }
    remove(index){
        if(index < 0|| index >= this.length) return undefined
        if(index === 0) this.shift
        if(index === this.length-1) this.pop

        let removeNode = this.get(index)

        
        let prev = removeNode.prev
        let after = removeNode.next

        prev.next = after
        after.prev = prev
        
        this.length--
        return removeNode
    }
    insert(index,val){
        if(index < 0|| index >= this.length) return undefined
        if(index === 0) this.unshift(val)
        if(index === this.length-1) this.push(val)

        let newNode = new Node(val)

        let prev = this.get(index-1)
        let after = prev.next

        prev.next = newNode
        newNode.prev = prev
        newNode.next = after
        after.prev = newNode

        this.length++
        return this
    }
}

//! Problem #2:
// Given head which is a reference node to a singly-linked list. The value of each node in the linked 
// list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// The most significant bit is at the head of the linked list.
// Example 1:
// Input: head = [1,0,1] // look at picture above
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:
// Input: head = [0]
// Output: 0
// Constraints:
// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
* this.val = (val===undefined ? 0 : val)
* this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {number}
*/
var getDecimalValue = function(head) {
    let convertBinary = head.join('')
    return parseInt(convertBinary, 2)
}
console.log(getDecimalValue([1,0,1]))