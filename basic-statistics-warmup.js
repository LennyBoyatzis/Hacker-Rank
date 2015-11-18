'use strict'

function processData(input) {
	console.log(`Mean ${calcMean(input)}`)
	console.log(`Median ${calcMedian(input)}`)
}

function calcSum(input) {
	return input.reduce((a, b) => { return a + b})
}

function calcMedian(input) {
	input = input.sort();
	if (input.length % 2 === 0) {
		return input[input.length/2] + input[input.length/2 - 1]
	} else {
		return input[Math.floor(input.length/2)]
	}
}

function calcMean(input) {
	return calcSum(input) / input.length
}


processData([1,2,3,4,5,6])
