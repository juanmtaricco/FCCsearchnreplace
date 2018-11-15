function myReplace(str, before, after) {

  /* First we need to find out whether the word that will be replaced is capitalized. If it is, the new word will have to
  be capitalized too */

  if (before[0].match(/[A-Z]/)) {
  	/* If the original word is capitalized, we will replace() the first character of the new word by its upper case version before we 
  	replace() the original word by the capitalized new word. */
    return str.replace(before, after.replace(after[0], after[0].toUpperCase()));
  } else {

  /* If the original word is not capitalized, then it is replaced by the new word without any further complications*/	
    return str.replace(before, after);
  }
}

myReplace("Let us go to the store", "store", "mall");