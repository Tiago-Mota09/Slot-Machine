/* salvar como slotMachine.js */
function aleatorio ( minimo, maximo) {
	var resultado = (Math.random() * (maximo - minimo)) + minimo
	return( resultado.toFixed(0) )
}

/* salvar como slotMachine.js */
function aleatorio ( minimo, maximo) {
	var resultado = (Math.random() * (maximo - minimo)) + minimo
	return( resultado.toFixed(0) )
}

function Randomiza(matriz) {
	
	var posicao = 0
	while(posicao <8) {
		
		var n = aleatorio(1,8)
		//document.write (n + "<br>")
		
		var nomeArquivo = "Simbolo"+n+".png"
		console.log(nomeArquivo) // ver nome arq gerado no console do javascript
		
		// Inserindo o nome gerado randomicamente na matriz
		// na posicao atual do loop
		
		if ( ! matriz.includes(nomeArquivo)) {
			matriz[posicao] = nomeArquivo
			posicao++
			/* 
				Significado do trecho do código
				Se não (!) existir (includes) dentro da matriz, 
				o nome de arquivo procurado (nomeArquivo), então,
				na posição atual da matriz, insere-se este nome (símbolo)
				e incrementa a posição para fazer a próxima linha da matriz
			*/
		}
		
	}
	
}
function Preencher (nomeFileira, matriz) {
	var objFileira = document.getElementById(nomeFileira)
	objFileira.innerHTML =""
	
	for(var n=0; n<matriz.length; n++)
	{
		// pegando o nome do arquivo/símbolo da posicao atual (loop) da matriz
		var nomeArquivo = matriz[n]
		var objImagem = document.createElement("img")
		objImagem.src = "imgs/" + nomeArquivo
		
		objFileira.appendChild(objImagem)
	}
	
}
function Animar() {
		// aplicar a classe CSS subindo nas 3 fileiras
		fileira1.className="subindo"
		// forma alternativa de acessar o objeto fileira2
		document.getElementById('fileira2').className="subindo";
		fileira3.className="subindo"
}


function Jogar() {
	// Criando as matrizes vazias
	var matriz1=Array(8).fill("")
	var matriz2=Array(8).fill("")
	var matriz3=Array(8).fill("")

	Randomiza(matriz1)
	Randomiza(matriz2)
	Randomiza(matriz3)
	Preencher("fileira1", matriz1)
	Preencher("fileira2", matriz2)
	Preencher("fileira3", matriz3)
	
	Animar()
  Resultado ( matriz1[7] , matriz2[7], matriz3[7])
	
}

function Resultado (simbolo1, simbolo2, simbolo3){
	var texto = "Perdeu"
	
	if ( (simbolo1==simbolo2) && (simbolo2==simbolo3) ){
		texto="Ganhou"
	}
	
	resultado.innerHTML = texto
	
}
