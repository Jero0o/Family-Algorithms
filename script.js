class person {
	constructor(name, parent) {
	this.name = name
	this.parent = parent
	}
}

//persons defined
	let Mary = new person('Mary')
	let Michael = new person('Michael', Mary)
	let Sophie = new person('Sophie', Mary)
	let Amelia = new person('Amelia', Mary)
	let James = new person('James', Michael)
	let Keith = new person('Keith', Michael)
  let Daniel = new person('Daniel', Keith)
  
//array
  let persons = [Mary, Michael, Sophie, Amelia, James, Keith, Daniel]
  let personA
  let personB
	let personsA = []
  let personsB = []
  let commonAncestor
  let depthA
  let depthB
  let difference

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white');
  personA = random(persons)
  personB = random(persons)
  depthAFinder(personA)
  depthBFinder(personB)

  personsA.reverse()
  personsB.reverse()
  
  console.log(personsA)
  console.log(personsB)

  commonAncestor = personsA[findCommonAncestor(0)]
  print(commonAncestor.name + ' is the common Ancestor')

  depthA = 0 + commonAncestor
  depthB = 0 + commonAncestor
  difference = depthA - depthB

  findDepth()

}

function depthAFinder(person) {
  let parent = person.parent
  if(parent != undefined){
    personsA.push(person)
    depthAFinder(parent)
  }
  else{
    personsA.push(person)
  }
}

function depthBFinder(person) {
  let parent = person.parent
  if(parent != undefined){
    personsB.push(person)
    depthBFinder(parent)
  }
  else{
    personsB.push(person)
  }
}

function findCommonAncestor(i) {
  if(personsA[personsA.length - 1].name == personsB[personsB.length - 1].name) {
    return (personsA.length - 1)
  }
  if (personsA[i] == personsB[i]) {
    return findCommonAncestor(i + 1)
  }
  else {
    return i - 1
  }
}

function findDepth() {
  if (personA.parent == personB.parent) {
    console.log(personA.name + ' and ' + personB.name + ' are siblings or the same person')
  }
  else if(difference == -2 || difference == 2) {
    console.log(personA.name + ' is ' + personB.name + "'s grandchild")
  }
}
