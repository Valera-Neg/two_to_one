function longest(s1, s2) {
  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  const s1Filtered = [... new Set(s1Arr), ...new Set(s2Arr)];
  const s1Copy = [... new Set(s1Filtered)];
 return s1Copy.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere")) //> "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) //> "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")) //> "acefghilmnoprstuy"