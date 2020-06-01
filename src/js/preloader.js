var preloadertext =
['кормим компьютерных мышек...',
'прогоняем пауков с клавиатуры...',
'сдуваем пыль с мониторов...', 'рисуем на вашем экране...']

var selectedtext = preloadertext[getRandomInt(preloadertext.length)]
document.getElementById('preloadertext').innerHTML = selectedtext

window.onload = function() {
  setTimeout(() => {
    document.getElementById('preloader').style.display = "none"
  }, 2000)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
