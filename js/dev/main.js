var Person, nick;

Person = (function() {
  function Person(arg) {
    this.name = arg.name;
    this.age = arg.age;
    this.job = arg.job;
  }

  Person.prototype.walk = function() {
    return this.name + " walk";
  };

  return Person;

})();

nick = new Person({
  name: "Nick",
  age: 25,
  job: "work"
});

console.log(nick.walk());
