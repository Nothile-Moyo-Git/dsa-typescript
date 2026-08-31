/**
 * Name: Selection Sort
 * 
 * Description: Another way to sort algorithms, find the smallest number in an array
 * 
 * Selection sort starts with the initial value, then compares the values and stores the index of the lowest value
 * At the end of the loop, reassign temporary to the next number and continue
 * 
 * Date created: 30/08/2026
 */

// =======================================================================================================================
// Selection Sort
//
// Receive an array of numbers
// Set a value to temp (initial) and compare it to other numbers
// Keep the index of the smallest value
// Move the value left
// 
// Time complexity: O(n ^ 2) as it needs to iterate squared, worst case
// =======================================================================================================================

type sort = {
    method: (values: number[]) => number[] 
}

const selectionSort: sort['method'] = (values) => {

    let result: number[] = [];
    const size = values.length;

    for (let i = 0; i < size; i++) {

        let smallest = i;

        for (let j = 0; j < size; j++) {

            let temp = values[smallest];
            const value = values[j];

            console.log("Temp: ", temp);
            console.log("Value: ", value);

            if (temp !== undefined && value !== undefined) {
                if (temp > value) {
                    result[smallest] = value;
                    result[j] =  temp;
                }
            }

            console.log("\n");
        }
    }

    return result;
};

const array1 = [4, 20, 12, 10, 7, 9];
console.log("Selection Sort: ");
console.log("Selection sort: ", array1, selectionSort(array1)); // [4, 7, 9, 10, 12, 20]