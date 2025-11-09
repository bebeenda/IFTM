
/**
 * Pega uma palavra que está na posição (index) de uma frase
 * @param {*} text 
 * @param {*} index 
 * @param {*} last caso last = true, retorna a última palavra
 * @returns 
 */
export function getWordAt(text, index, last){
    
    let words = text.split(' ');

    if(last && last == true)
        return words[words.length - 1];
    else
        return words[index];
}

/**
 * Pega todas as palavras de um texto que iniciam com o caracter passado.
 * @param {*} text 
 * @param {*} character 
 * @returns 
 */
export function getWordsStartsWith(text, character){
    let palavras = text.split(' ');
    let palavrasM = " ";
    for(let i = 0; i < palavras.length; i++)
    {
        if (palavras[i].startsWith(character.toUpperCase()) || palavras[i].startsWith(character.toLowerCase()))
        {
            palavrasM = palavrasM + palavras[i] + " ";
        }
    }

    return palavrasM;

}

/**
 * Conta as palavras em uma frase.
 * @param {*} text 
 * @returns 
 */
export function countWords(text){
    let palavras = text.split(' ');

    return palavras.length;
}
