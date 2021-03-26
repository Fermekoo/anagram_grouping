
    function anagramGrouping(array_string){

        let group = [];
        let count_array_string = array_string.length;

        for(let i=0; i < count_array_string; i++){
            let word        = array_string[0];
            let small_group = [];
                if(!word){
                    break;
                }
                
                small_group.push(word);
            array_string.forEach((item, index) => {
                let is_anagram = isAnagram(word, item);
                if(is_anagram && word !== item) {
                    small_group.push(item);
                }
                
            });
            
            array_string = array_string.filter((el) => !small_group.includes(el));
            group.push(small_group);
            small_group = [];
        }

        console.log(group);
    }

    function isAnagram(first_word, second_word){
        
        let count_first_word  = first_word.length;
        let count_second_word = second_word.length;

        if(count_first_word === count_second_word){

            let first_arr = [];
            Array.from(first_word).forEach((item, index) => {
               first_arr.push(item); 
            });

            let second_arr = [];
            Array.from(second_word).forEach((item, index) => {
                second_arr.push(item); 
            });

            first_arr  = first_arr.sort();
            second_arr = second_arr.sort();
            
            for(let i=0; i < count_first_word; i++){
                if(first_arr[i] != second_arr[i]){
                    return false;
                }
            }

            return true;

        }
        return false;
    }

    // const strings= ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
    const strings= ['dandi','dinda','kita', 'atik', 'aku', 'kia', 'makan', 'kua'];
    
   anagramGrouping(strings);
