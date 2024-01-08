let challange = 1;

console.log(`CHALLANGE ${challange++}`);
//challange 1
function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    return angka1 == angka2 ? -1 : angka2 > angka1;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log(`\n\nCHALLANGE ${challange++}`);
//challange 2
function balikKata(kata) {
    // you can only write your code here!
    let balik = ""
    for (let index = kata.length - 1; index >= 0; index--) {
        const element = kata[index];
        balik += element;
    }
    return balik;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log(`\n\nCHALLANGE ${challange++}`);
//challange 3
function konversiMenit(menit) {
    // you can only write your code here!
    let m = "";
    const min = "" + menit / 60;
    let val = "";
    for (let index = 0; index < min.length; index++) {
        const element = min[index];
        if(element != ".") {
            val += element;
        } else {
            break;
        }
    }
    m += val;
    m += ":";
    m += (menit % 60) > 9 ? menit % 60 : "0" + (menit % 60);
    return m
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log(`\n\nCHALLANGE ${challange++}`);
// challange 4
function xo(str) {
    // you can only write your code here!
    let banyakX = 0;
    let banyakO = 0;

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element == "x") {
            banyakX++;
        } else if (element == "o") {
            banyakO++;
        }
    }

    return banyakX == banyakO;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

console.log(`\n\nCHALLANGE ${challange++}`);
// challange 5

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
  
  
  const dataHandling = (params) => {
    // write your code here
    let returnValue = "";
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        let value = "";
        value += "Nomor ID: " + element[0] + "\n";
        value += "Nama Lengkap: " + element[1] + "\n";
        value += "TTL: " + element[2] + "\n";
        value += "Hobi: " + element[3] + "\n";
        value += "\n\n";
        returnValue += value;
    }

    return returnValue;
  }
  
  console.log(dataHandling(input))
  
  // Expected Result
  // Nomor ID:  0001
  // Nama Lengkap:  Roman Alamsyah
  // TTL:  Bandar Lampung 21/05/1989
  // Hobi:  Membaca
  
  // Nomor ID:  0002
  // Nama Lengkap:  Dika Sembiring
  // TTL:  Medan 10/10/1992
  // Hobi:  Bermain Gitar
  
  // Nomor ID:  0003
  // Nama Lengkap:  Winona
  // TTL:  Ambon 25/12/1965
  // Hobi:  Memasak
  
  // Nomor ID:  0004
  // Nama Lengkap:  Bintang Senjaya
  // TTL:  Martapura 6/4/1970
  // Hobi:  Berkebun