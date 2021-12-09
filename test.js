function Test(title) {
  console.log(`hi ${'title'} `);
  console.log(`hi ${'title'}`);
  console.log(`hi ${'title'}`);
  console.log(`hi ${'title'}`);
}

Test('React');
Test('JavaScript');
Test('WebBrain');

class Component {
  getName() {}
}

class Student extends Component {}

let name = 'HI';

const obj = {
  name: 'WebBRain',
};

const { name: newName } = obj;

console.log(obj.name);
console.log(newName);
