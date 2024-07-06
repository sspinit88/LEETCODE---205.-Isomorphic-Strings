/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

 
Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true

*/

/*
Ваша задача - определить, являются ли две строки s и t изоморфными.

Две строки s и t являются изоморфными, если символы в s можно заменить, чтобы получить t.

Все вхождения символа должны быть заменены на другой символ, сохраняя порядок символов. 
Никакие два символа не могут отображаться на один и тот же символ, но символ может отображаться на себя.

Вот шаги, которые мы будем следовать:

1. Создайте два словаря для отслеживания отображения символов между s и t.
2. Пройдите по каждому символу в s и t одновременно.
3. Если символ уже присутствует в словаре, проверьте, совпадает ли его отображение с текущим символом в другой строке. 
   Если нет, верните false.
4. Если символ отсутствует в словаре, добавьте его и установите его отображение на текущий символ в другой строке.
5. Если вы прошли все символы в s и t и не вернули false, верните true.

Your task is to determine whether two strings s and t are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

Here are the steps we will follow:

1. Create two dictionaries to track the character mapping between s and t.
2. Go through each character in s and t simultaneously.
3. If the character is already present in the dictionary, check whether its mapping matches the current character in the other string. 
   If not, return false.
4. If the character is not present in the dictionary, add it and set its mapping to the current character in the other string.
5. If you have gone through all characters in s and t and have not returned false, return true.

*/

function isIsomorphic(s, t) {
  // Создаем два словаря для отслеживания отображения символов между s и t
  // Create two dictionaries to track the character mapping between s and t
  let mapS = {};
  let mapT = {};

  // Проходим по каждому символу в s и t одновременно
  // Go through each character in s and t simultaneously
  for (let i = 0; i < s.length; i++) {
    // Если символ уже присутствует в словаре
    // If the character is already present in the dictionary
    if (mapS[s[i]] || mapT[t[i]]) {
      // Проверяем, совпадает ли его отображение с текущим символом в другой строке
      // Check whether its mapping matches the current character in the other string
      if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) {
        return false;
      }
    } else {
      // Если символ отсутствует в словаре, добавляем его и устанавливаем его отображение на текущий символ в другой строке
      // If the character is not present in the dictionary, add it and set its mapping to the current character in the other string
      mapS[s[i]] = t[i];
      mapT[t[i]] = s[i];
    }
  }

  // Если мы прошли все символы в s и t и не вернули false, возвращаем true
  // If we have gone through all characters in s and t and have not returned false, return true
  return true;
}
