
let messageYo = 'hello yo';
let endWithO = messageYo.endsWith('o');

//Two ways of doing type assertions:
let messageOne;
messageOne = 'abc';
let endsWithC = (<string>messageOne).endsWith('c');
let alternativeWay = (messageOne as string).endsWith('c');

