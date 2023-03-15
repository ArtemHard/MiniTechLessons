// let a = 0;
const counter = () => {
  let a = 0;
  return () => {
    console.log(++a);
  };
};

const firstPerson = counter();
firstPerson();
firstPerson();

const secondPerson = counter();
secondPerson();
secondPerson();
