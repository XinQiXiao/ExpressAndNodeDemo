var fortunes = [
	"饼干1",
	"饼干2",
	"饼干3",
	"饼干4",
	"饼干5"
]

exports.getFortune = function(){
	let idx = Math.floor(Math.random()*fortunes.length)
	return fortunes[idx]
}