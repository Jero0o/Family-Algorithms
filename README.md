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
 
//make a randomizer to choose a person
  // personA = random(persons)
  // personB = random(persons)
  
 
 
