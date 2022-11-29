class Node{
    constructor(val){
    this.val = val;
    this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node (val) 
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    unshift(val){
        let newNode = new Node (val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            let temp = this.head
            this.head = newNode
            this.head.next = temp
        }
        this.length++
        return this
    }
    shift(){
        if(!this.length) return undefined
        if(this.lenght === 1){
            this.head = null
            this.tail = null
        }
        let shift = this.head
        this.head = shift.next

        this.length--
        return shift
    }
    get(index){
        if(index > this.length -1 || index < 0) return false

        let count = 0
        let tempTail = this.head

        while(index !== count){
            tempTail = tempTail.next
            count++
        }
        return tempTail
    }
    set(index, val){
        let foundNode = this.get(index)
        
        if(foundNode){
            foundNode.val = val
            return this
        }
        return false
    }
    remove(index){
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let prevNode = this.get(index - 1)
        let removed = prevNode.next 

        prevNode.next = removed.next

        this.length--
        return removed
    }
    pop(){
        if(!this.head) return undefined

        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null 

        this.length--

        if (this.length === 0) {
            this.head = null 
            this.tail = null 
        }

        return current
    }
    insert(index,val){
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val)

        let newNode = new Node (val)

        let prev = this.get(index - 1)
        let temp = prev.next

        prev.next = newNode 
        newNode.next = temp 

        this.length++

        return this
    }
}   