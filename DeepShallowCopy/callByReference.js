/*  Call By Refrence 

    Stack Memory

    | address | Variable           | value -> Reference/Pointer (Address) |
    |--------------------|---------------------|
    | 0x100   | obj1               | 0x001               |
    | 0x104   | arr1               | 0x002               |
    | 0x108   | obj2               | obj1 = 0x001               |
    | 0x112   | arr2               | arr1 = 0x002               |

    Heap Memory

    | Address | Object            |
    |---------|-------------------|
    | 0x001   | { name: 'Sam' }   |
    | 0x002   | [ 1,2,3 ]   |

*/


let obj = {
    name:"Sam"

}