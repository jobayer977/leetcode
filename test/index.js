/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
	const normalize = names.map((x, i) => ({ name: x, height: heights[i] }))
	return normalize.sort((a, b) => b.height - a.height).map((x) => x.name)
}
console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]))
