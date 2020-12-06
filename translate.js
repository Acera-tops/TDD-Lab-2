// 1. Translation must all be done in a translate function that takes a string parameter and
// returns the translated Pig Latin string.
// 2. The translation functionality must be developed with TDD using tests on the translate
// function.
// 1. Convert each word to lowercase before translating.
// 2. If a word starts with a vowel, just add “way” onto the ending.
// 3. If a word starts with a consonant, move all of the consonants that appear before the
// first vowel to the end of the word, then add “ay” to the end of the word.
	

	function lowerCase(word){
		word = word.toLowerCase();
		return word;
	}
	
	function translate(word){
		word = lowerCase(word);
	//Turn string into array of characters
		const wordArray = word.split('');
			// console.log(wordArray);
	//Index 0 consonant or vowel?
		//if vowel, word + "way"
			const vowel = [
				"a", "e", "i", "o", "u"
			]
			if (vowel.includes(wordArray[0])){
				word = word + "way";
				return word;
			} else {
			//if consonant, move consonants to end until we reach vowel 
				while (!vowel.includes(wordArray[0])){
				// move letter to end of array
					let removedLetter = wordArray.shift();
						// console.log(wordArray);
						// console.log(removedLetter);
					wordArray.push(removedLetter);
						// console.log(wordArray);
			}
			//recombine array to string, add "ay" to the end of string
				let translate = wordArray.join('') + "ay"
			//return translation
				return translate
		}}