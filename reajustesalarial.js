function ReajustedeSalario (salarioinicial){
    if(salarioinicial < 280){ 

        return document.write (' Salário Inicial: ' + salarioinicial + ' <br>Percentual de Aumento: 20 <br>Valor do aumento: ' + ((salarioinicial * 20)/100) + '<br>Novo salário: ' + (((salarioinicial * 20)/100) + salarioinicial))
    }
    else if(salarioinicial > 280 && salarioinicial < 700){
    
        return document.write (' Salário Inicial:' + salarioinicial + '<br>Percentual de Aumento: 15 <br>Valor do aumento:' + ((salarioinicial * 15)/100) + ' <br>Novo salário: ' + (((salarioinicial * 15)/100) + salarioinicial))
    }
    else if(salarioinicial >=700 && salarioinicial < 1500){

        return document.write (' Salário Inicial: ' + salarioinicial + '<br>Percentual de Aumento: 10 <br>Valor do aumento: ' + ((salarioinicial * 10)/100) + '<br>Novo salário: ' + (((salarioinicial * 10)/100) + salarioinicial))
    }
    else if(salarioinicial >= 1500){

        return document.write (' Salário Inicial: ' + salarioinicial + ' <br>Percentual de Aumento: 5 <br>Valor do aumento: ' + ((salarioinicial * 5)/100) + ' <br>Novo salário: ' + (((salarioinicial * 5 )/100) + salarioinicial))
    }

}
const salarioinicio = parseInt (prompt('Digite o salário inicial do funcionário: '))
var result = ReajustedeSalario (salarioinicio)
