        let str1 = 'hello';
        let str2 = 'owu';
        let str3 = 'com';
        let str4 = 'ua';
        let num1 = 1;
        let num2 = 10;
        let num3 = -999;
        let num4 = 123;
        let num5 = 3.14;
        let num6 = 2.7;
        let num7 = 16;
        let bool1 = true;
        let bool2 = false;

        console.log(str1);
        console.log(str2);
        console.log(str3);
        console.log(str4);
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);
        console.log(num5);
        console.log(num6);
        console.log(num7);
        console.log(bool1);
        console.log(bool2);

        alert(str1);
        alert(str2);
        alert(str3);
        alert(str4);
        alert(num1);
        alert(num2);
        alert(num3);
        alert(num4);
        alert(num5);
        alert(num6);
        alert(num7);
        alert(bool1);
        alert(bool2);

        document.write(str1 + '<br>');
        document.write(str2 + '<br>');
        document.write(str3 + '<br>');
        document.write(str4 + '<br>');
        document.write(num1 + '<br>');
        document.write(num2 + '<br>');
        document.write(num3 + '<br>');
        document.write(num4 + '<br>');
        document.write(num5 + '<br>');
        document.write(num6 + '<br>');
        document.write(num7 + '<br>');
        document.write(bool1 + '<br>');
        document.write(bool2 + '<br>');

        str1 = 'hi';
        str2 = 'owu_updated';
        str3 = 'net';
        str4 = 'us';
        num1 = 2;
        num2 = 20;
        num3 = -888;
        num4 = 456;
        num5 = 6.28;
        num6 = 3.14;
        num7 = 32;
        bool1 = false;
        bool2 = true;

        let firstName = prompt("Введіть ваше ім'я:");
        let middleName = prompt("Введіть ваше по батькові:");
        let age = prompt("Введіть ваш вік:");

        console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років.`);

        alert(`Вітаю ${firstName} ${middleName}. Тобі ${age} років.`);

        document.write(`Вітаю ${firstName} ${middleName}. Тобі ${age} років.`);

        let num_1 = Number(prompt("Введіть перше число:"));
        let num_2 = Number(prompt("Введіть друге число:"));
        let num_3 = Number(prompt("Введіть третє число:"));

        console.log(num1, num2, num3);

        let int1 = parseInt(prompt("Введіть перше ціле число:"));
        let int2 = parseInt(prompt("Введіть друге ціле число:"));
        let int3 = parseInt(prompt("Введіть третє ціле число:"));
        let int4 = parseInt(prompt("Введіть четверте ціле число:"));

        let sumInts = int1 + int2 + int3 + int4;
        console.log("Сума цілих чисел:", sumInts);

        let float1 = parseFloat(prompt("Введіть перше число з плаваючою точкою:"));
        let float2 = parseFloat(prompt("Введіть друге число з плаваючою точкою:"));
        let float3 = parseFloat(prompt("Введіть третє число з плаваючою точкою:"));

        let sumRoundedFloats = roundFloat1 + roundFloat2 + roundFloat3;
        console.log("Сума заокруглених чисел з плаваючою точкою:", sumRoundedFloats);

        let base = parseInt(prompt("Введіть основу (перше ціле число):"));
        let exponent = parseInt(prompt("Введіть степінь (друге ціле число):"));

        let powerResult = Math.pow(base, exponent);
        console.log(`${base} піднесене до степеня ${exponent} дорівнює:`, powerResult);

        let a = 100;
        let b = '100';
        let c = true;

        console.log("Тип змінної a:", typeof a); // number
        console.log("Тип змінної b:", typeof b); // string
        console.log("Тип змінної c:", typeof c); // boolean

        console.log(5 < 6); // true
        console.log(5 > 6); // false
        console.log(5 <= 6); // true
        console.log(5 == 6); // false
        console.log(10 === 10); // true
        console.log(10 >= 10); // true
        console.log(10 != 10); // false
        console.log(10 !== 10); // false
        console.log(10 < 10); // false
        console.log(123 === '123'); // false
        console.log(123 == '123'); // true