/*Exercicio 01
Repare na variável apresentação mostrada a seguir. Ela é uma string que representa um texto que pode mudar conforme o valor de outras variáveis.
Identifique e crie todas as variáveis necessárias para que o texto de apresentacao seja exibido sem erros. Depois, crie a variável apresentacao exatamente como mostrado a seguir e a imprima da seguinte forma: console.log(apresentacao).

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "." */

nomeCompleto  =  "Misael Faria"
apelido  =  "Misa"
idade  =  41
dataNascimento  =  "07/08/1980" 
localNascimento  =  "São Leopoldo"
altura  =  1.70
emprego  =  true

if  ( emprego  ==  false )  {
    trabalhando  =  " desempregado" ;
}  else  { 
    trabalhando  =  "trabalhando" ;
    }

//vamos  apresentacao
apresentacao  =  "Meu nome é "  +  nomeCompleto  +  "(sou conhecido como "  +  apelido  +  ") e tenho "  +  idade  +  " anos. Nasci no dia "  +  dataNascimento  +  ", na cidade de "  + localNascimento  +  ". Tenho "  +  altura  +  "m de altura e estou "  +  trabalhando  +  "."
console.log ( apresentacao ) ;