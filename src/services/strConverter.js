// função para converter uma string, não é um hook!
// https://stackoverflow.com/questions/21792367/replace-underscores-with-spaces-and-capitalize-words

function strConverter(string) {
  const split = string.split('_');
  for (let i = 0; i < split.length; i += 1) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  return split.join(' ');
}

export default strConverter;
