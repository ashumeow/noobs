function numStrings(list) {
  var stringCount = 0;
  for (var i = 0; i < list.length; i++) {
    if (typeof(list[i]) == "string") {
      stringCount++;
    }
  }
  return stringCount;
}
