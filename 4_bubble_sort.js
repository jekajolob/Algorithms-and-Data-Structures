//4. bubble_sort

const arr = [0, 1, 2, -5, 0, 70, 54, -10, 3, 4, 5, 6, 7, 18, 88, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j + 1] < array[j]){
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array
}


console.log(bubbleSort(arr))
console.log('length', arr.length)
console.log('count = ', count)