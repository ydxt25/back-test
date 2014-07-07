class Person
	constructor: (arg) ->
		@name = arg.name
		@age = arg.age
		@job = arg.job

	walk: ->
		return this.name + " walk"

nick = new Person({name : "Nick",age : 25,job : "work"});


console.log nick.walk()