const useGenerator = () => {
    const charCount = 20;
    
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!"£$%^&*()';
    
    const buildCharacterSet = (chkUpper, chkLower, chkNumbers, chkSymbols) => {
        const upperCheck = chkUpper ? uppercaseChars : '';
        const lowerCheck = chkLower ? lowercaseChars : '';
        const numberCheck = chkNumbers ? numbers : '';
        const symbolCheck = chkSymbols ? symbols : '';
    
        const allOptions = `${upperCheck}${lowerCheck}${numberCheck}${symbolCheck}`;
        return allOptions;
    }
  
    const makePassword = (characters) => {
        const arrChar = [];
        const allPossibleCharLength = characters.length;
        for (let index = 0; index < charCount; index++) {
            arrChar.push(characters.charAt(Math.floor(Math.random() * allPossibleCharLength)));
        }
        return arrChar.join('');
    }

    return { makePassword, buildCharacterSet }
}