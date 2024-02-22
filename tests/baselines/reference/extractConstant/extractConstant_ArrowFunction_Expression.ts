// ==ORIGINAL==
const f = () => /*[#|*/2 + 1/*|]*/;
// ==SCOPE::Extract to constant in enclosing scope==
const f = () => {
  const newLocal = 2 + 1;
  return /*RENAME*/newLocal;
};
