//3. binary_search

const arr = [0, 1, 2, -5, 0, 70, 54, -10, 3, 4, 5, 6, 7, 18, 88, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

function selectionSort(array){
    for (let i = 0; i < array.length; i++){
        let indexMin = i
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[indexMin]){
                indexMin = j
            }
            count += 1
        }
        let tmp =array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr))
console.log(arr.length) // O(n*n)
console.log('count = ', count)