function priceFormatter(number) {
  let decNum = number.toFixed(2);
  let str = decNum.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + str.join(".");
}

function capitalizeFirstLetter(string) {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return "";
    }
  });

  const resultString = capitalizedWords.join(" ");

  return resultString;
}

export { priceFormatter, capitalizeFirstLetter };
