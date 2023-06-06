let peca = 'Bispo'
switch (peca){
    case 'Peão':
        console.log('Só anda uma casa para frente');
    case 'Rainha':
        console.log('Anada quantas casas quiser para qualquer lado');
        break;
    case 'Rei':
        console.log('Anda apenas uma casa para qualquer lado');
        break;
    case 'Torre':
        console.log('Anda quantas casas quiser mas apenas na horizontal e na vertical');
        break;
    case 'Bispo':
        console.log('Anda quantas casas quiser mas apenas nas diagonais');
        break;
    case 'Cavalo':
        console.log('Anda em L para qualquer lado. 3 casas no total. 2 para horizontal e 1 na vertical ou 2 na vertical e 1 na horizontal');
        break;
    default:
        console.log('Peça inválida.');
    
}