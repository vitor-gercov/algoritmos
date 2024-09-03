// Premissa: encontrar duas posições em um array que a soma de seus valores resulte em um valor alvo.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Solução:

var somaDeDoisNumeros = function (numeros, valorAlvo) {
    // Cria um hashMap
    let hashMap = {};

    // Loop do array
    for (let i = 0; i < numeros.length; i++) {
        // Calcula a diferença do valor alvo e o número atual
        let diferenca = valorAlvo - numeros[i];

        // Checka se a diferença já existe no hashMap
        if (hashMap.hasOwnProperty(diferenca)) {
            // Se existir, encontramos nossa resposta! Então retornamos os índices
            return [i, hashMap[diferenca]];
        }

        // Se não existir, adicionamos o número atual e o seu index no hashMap
        hashMap[numeros[i]] = i;
    }

    // Se nenhuma combinação de número do array resultar no valor alvo, retornamos null
    return null;
};