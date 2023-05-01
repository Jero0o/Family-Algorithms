# Family-Algorithms
# Idea
Given two random people (Person A and Person B), each person is difined as an entity given a name and a parent.

# First Part
This algorithm starts by assigning an empty array for each person. These arrays are responsible for the depth of each person from the original ancestor(the one with no parent). How it will work is that if the parent of each person is not undefined, that person will be pushed to the array and that person's parent will be checked to see if it has a parent. This will continue until the last person on the array is the original ancestor.

# Second Part

