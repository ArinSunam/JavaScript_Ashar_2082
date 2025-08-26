const str = "meoow";
const course = "   MERN Stack Training in Nepal ";
const js = "JavaScript";

//TODO : RESEARCH ANY TWO STRING METHODS

console.log("value at different index::", typeof str[8]);
console.log("length of str", str.length);
console.log("To uppercase", str.toUpperCase());
console.log("To lowercase", str.toLowerCase());
console.log("pick a character", typeof str.charAt(8));
console.log("replace a value with new one", str.replace("o", "0"));
console.log("replace all value with new one", str.replaceAll("o", "0"));
console.log("mern slug", course.replaceAll(" ", "-").toLowerCase());
console.log("removing spaces", course.trim());
console.log("repeat", str.repeat(3));
console.log("slice", js.slice(4, 1));
console.log("substring", js.substring(4, 1));
console.log("split", js.split(""));
