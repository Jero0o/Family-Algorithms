# Family-Algorithms
# Idea
Given two random people (Person A and Person B), each person is difined as an entity given a name and a parent.

# First Part
This algorithm starts by assigning an empty array for each person. These arrays are responsible for the depth of each person from the original ancestor(the one with no parent). How it will work is that if the parent of PersonA is not undefined, that person will be pushed to the array and that person's parent will be checked to see if it has a parent. This will continue until the last person on the array is the original ancestor.

For Example:
PersonA = [John, Keith, Susan, Mary]
PersonB = [Lila, Sophie, Michael, James, Mary]

# Second Part
The second part of this algorithm is to check for a common ancestor in each array. First, the order of the array by which it will be checked needs to be reversed. This will check to see if there is a common parent in each array, if there is, then that is the common ancestor for each person.

# Third Part
Now that the common ancestor is found, the depth from the person up to the common ancestor can now be calculated. Once the depth from PersonA and PersonB to the common ancestor is found, the depth of PersonA and PersonB will be subtracted. The value of this difference will serve to assign the relationship between each person. For example, if the depth difference is 0, this would mean that PersonA and PersonB are the same person or siblings.

# Future Plans
- Figure out how relations will be determined
- Find a more suitable or efficient algorithm
- Complete the algorithm and relations.

# Pseudo Code
//Create class for person

//give the person a name and parent
 //constructor(name, parent)
 //this.name
 //this.parent
 
//define a person's name giving it a string name and parent
 // let person = new person ('name', parent)
 
//make array for every person defined

//Define the each person given to make random
 //  let personA
 //  let personB
 
// make an empty array for each person
 //	let personsA = []
 // let personsB = []
 
//defined commonancestor
 // let commonAncestor
 
//Make function setup()
 
//make a randomizer to choose a person
  // personA = random(persons)
  // personB = random(persons)
  
// this function will be called taking the random person selected
  // depthAFinder(personA)
  // depthBFinder(personB)
  
// this will make the array reversed in the console
  // personsA.reverse()
  // personsB.reverse()

//Prints out the whole array
  // console.log(personsA)
  // console.log(personsB)
  
//the value that will hold what is the common ancestor
  // commonAncestor = personsA[findCommonAncestor(0)]
  
//Calculates the difference between each depth
  // depthA = 0 + commonAncestor
  // depthB = 0 + commonAncestor
  // difference = depthA - depthB
  
//gets called to find the relationship of each person
  // findDepth()
  
//create recursive function to create the array for person A until the parent is undefined
// let parent = person.parent
//  if(parent != undefined)
//  personsA.push(person)
//    depthAFinder(parent)

// recursive function for personB
// let parent = person.parent
//  if(parent != undefined)
//  personsB.push(person)
//  depthAFinder(parent)

//create a function findCommonAncestor()
// if(personsA[personsA.length - 1].name == personsB[personsB.length - 1].name) 
//    return (personsA.length - 1)  
//  if (personsA[i] == personsB[i]) 
//    return findCommonAncestor(i + 1)
//  else {
//    return i - 1

//create function to find the relation of eahc person
//  if (personA.parent == personB.parent) 
//    (personA.name + ' and ' + personB.name + ' are siblings or the same person')




  
  
  

  
 
 
