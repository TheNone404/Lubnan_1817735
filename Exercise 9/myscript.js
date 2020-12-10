var people = [{
    name: ['Alyssa', 'P.', 'Hacker'],
    age: 26
  }, {
    name: ['Ben', 'L.', 'Bitdiddle'],
    age: 34
  }, {
    name: ['Eva', 'Lu', 'Ator'],
    age: 40
  },
  {
    name: ['Lem', 'E.', 'Tweakit'],
    age: 45
  }, {
    name: ['Louis', 'M.', 'Reasoner'],
    age: 21
  }, {
    name: ['Shahan', 'Haig', 'Krakirian'],
    age: 26
  }
];

function fullNamelist(){
  var show = ""
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < 3; j++) {
      show = show + people[i].name[j] + " "
    }
    show = show + "<br>"
  }
  document.getElementById('solution').innerHTML = show
}

function getAge(){
  var name = document.getElementById('name-input').value;
  console.log(name);
  for (let i = 0; i < people.length; i++) {
    if (name == people[i].name[0]) {
      document.getElementById('solution1').innerHTML = people[i].name[0] + " is " + people[i].age + " years old"
    }
  }
}
