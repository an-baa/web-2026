function findParts(strs) {
    if (strs.length === 0) {
        return {
            prefix: "",
            suffix: ""
        };
    }

    let shortest = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }

    let prefix = "";
    let suffix = "";

    for (let length = shortest.length; length >= 2; length--) {
        let currentPrefix = shortest.slice(0, length);
        let currentSuffix = shortest.slice(shortest.length - length);

        let prefixIs = true;
        let suffixIs = true;

        for (let i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(currentPrefix)) {
                prefixIs = false;
            }

            if (!strs[i].endsWith(currentSuffix)) {
                suffixIs = false;
            }
        }

        if (prefixIs && prefix === "") {
            prefix = currentPrefix;
        }

        if (suffixIs && suffix === "") {
            suffix = currentSuffix;
        }

        if (prefix !== "" && suffix !== "") {
            break;
        }
    }

    return {
        prefix: prefix,
        suffix: suffix
    };
}

const strs1 = ["цветок","поток","хлопок"]
const result1 = findParts(strs1);
console.log(result1);

const strs2 = ["собака","гоночная машина","машина"]
const result2 = findParts(strs2);
console.log(result2);

const strs3 = ["код","молоко","кошка"]
const result3 = findParts(strs3);
console.log(result3);

const strs4 = ["код","коала","кошка"]
const result4 = findParts(strs4);
console.log(result4);

const strs5 = ["кодааа","коалааа","кошкааа"]
const result5 = findParts(strs5);
console.log(result5);