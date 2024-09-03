// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function somaDoisListNodesReversos(l1, l2) {
    //valor que será usado para definir o listNode final
    let dummyListNode = new ListNode();
    //variável que guardará o resultado
    let resultado = dummyListNode;
    //variável que guardará a soma do valor dos dois listNodes atuais do loop + o resto da última soma (total / 10)
    let total = 0;
    //guarda o resto da última soma / 10 (l1 + l2 + resto da última conta / 10)
    let resto = 0;

    //loop que populará a listNode enquanto houver valores em l1, l2 ou algum resto da soma mais recente % 10
    while (l1 || l2 || resto) {
        //começa com algum possível resto que exista da última soma realizada
        total = resto;

        //toda iteração, l1 e l2 avançam um listNode (listNode = listNode.next)

        //se houver algum valor no listNode atual, adiciona a soma e avança pro próximo listNode
        if (l1) {
            //soma do listNode atual
            total += l1.val;
            //avança pro próximo listNode
            l1 = l1.next;
        }
        //se houver algum valor no listNode atual, adiciona a soma e avança pro próximo listNode
        if (l2) {
            //soma do listNode atual
            total += l2.val;
            //avança pro próximo listNode
            l2 = l2.next;
        }

        //pega apenas o resto da divisão da soma total por 10, para guardar apenas um dígito
        let numeroDoListNode = total % 10;
        //atribui qualquer valor da soma total acima de um digito ao resto, para ser usado na próxima soma
        resto = Math.floor(total / 10);
        //atribui o novo listNode ao next do listNode atual
        dummyListNode.next = new ListNode(numeroDoListNode);
        //avança para o próximo listNode
        dummyListNode = dummyListNode.next;
    }

    // devolve o next ja que em nenhum momento atribuimos um valor ao primeiro listNode, apenas ao primeiro next (vide loop acima, linha 66)
    // poderiamos adicionar uma lógica para igualar o resultado ao resultado.next, mas não melhoraria muito a clareza,
    // e quaisquer condições dentro do loop aumentariam a complexidade ciclomática do código
    return resultado.next;
};