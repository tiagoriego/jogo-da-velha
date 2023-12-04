rm -rf ./dist
mkdir ./dist && mkdir ./dist/css && mkdir ./dist/js
cp ./src/index.html ./dist/index.html
sed -i -r 's/<link rel="stylesheet" href="css\/jogo-da-velha.css">/<link rel="stylesheet" href="css\/game.min.css">/'  ./dist/index.html
sed -i -r 's/<script src="js\/jogo-da-velha.js"><\/script>/<script src="js\/game.min.js"><\/script>/'  ./dist/index.html
sed -i -r 's/<script src="js\/jogo-da-velha-maquina.js"><\/script>//'  ./dist/index.html
sed -i -r 's/<script src="js\/jogo-da-velha-tela.js"><\/script>//'  ./dist/index.html
node minify.js
