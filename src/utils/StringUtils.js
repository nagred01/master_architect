export default class StringUtil {

    // https://gomakethings.com/converting-a-string-to-title-case-with-vanilla-javascript/
    static toTitleCase(str) {
        if(!str || !(typeof str === 'string') || !(str.trim())) {
            return str;
        }

        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    };

    static trimValue(str){
        if(!str || !(typeof str === 'string')) {
            return '';
        }
        return str.trim();
    }

    static removeSpace(str, condition = ""){
        if(!str || !(typeof str === 'string')) {
            return '';
        }
        if(condition == "onlyText"){
            return str.replace(/[^A-Z]+/ig, "");
        }
        return str.replace(/\s/g, '');
    }

    static numberWithCommas(x) {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            return x;
        }
    }
}