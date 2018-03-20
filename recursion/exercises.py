#  
#                          Target Practice II                         
#                                                                     
#                             Recursion                               
#                                                                     
#    Instructions: Using the Helper Method Recursive Pattern work through the 
#    following problems.                             
#                                                                     


#
# 1a. What is the term when the recursive call invokes itself more than once?
#

#
# 1b. List the steps involved to build a Helper Method Recursion algorithm.
#

#
# 1c. Should the recursive case or base case typically be tackled first?
#


#
# 2a. Print each item in a list in order using Helper Method Recursion
# 
# Input: List
# Output: None
# 
# Example: print_list([1,2,3]) => 
#           1
#           2
#           3
#
 
def print_list(lst):
  def traverse(index):
    if index > len(lst):
      return
    print(lst[index])
    traverse(index + 1)
  traverse(0)

# 
# 2b. Print each item in a list backwards using Helper Method Recursion
#
# Input:   List
# Output:  None
#
# Example: print_reverse([1,2,3]) => 
#          3
#          2
#          1
#

def print_reverse(lst):
  pass


# 
# 2c. Given a string return the string in reverse using Helper Method Recursion
#
# Input:    String
# Output:   String
#
# Example: reverse_string('hello') => 'olleh'
#
 
def reverse_string(lst):
  pass


#
# 2d. Given a list of integers, create a list of two-item lists using Helper Method Recursion
# 
# Input:    List of Integers
# Output:   List of two-item Lists
# 
# Example: list_pairs([1, 2, 3, 4, 5, 6]) => [[1,2], [3,4], [5,6]]
# Example: list_pairs([1, 2, 3, 4, 5]) => [[1,2], [3,4], [5, None]]
#

def list_pairs(lst):
  pass


#
# 2e. Flatten a nested list using Helper Method of Recursion
#
# Input:    list of Integers and Lists
# Output:   list of Integers
#
# Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
#

def flatten(lst):
  pass


#
# 2f. Given a base and an exponent, create a function to find the power using
#    Helper Method Recursion
#
# Input:    Two Integers, base and exponent
# Output:   Integer
#
# Example: power(3, 4) => 81
#

def power(a, b):
  pass


#
# 2g. Merge two sorted lists using the Helper Method Recursion
# 
# Input:    Two Lists, both sorted
# Output:    List, sorted
#
# Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
#

def merge(lst1, lst2):
  pass


















#############################################################
################  DO NOT TOUCH TEST BELOW!!!  ###############
#############################################################

# custom expect function to handle tests
# List count : keeps track out how many tests pass and how many total
#   in the form of a two item array i.e., [0, 0]
# String name : describes the test
# Function test : performs a set of operations and returns a boolean
#   indicating if test passed 
def expect(count, name, test):
  if(count == None or not isinstance(count, list) or len(count) != 2):
    count = [0, 0]
  else:
    count[1] += 1
  

  result = 'false'
  errMsg = None
  try: 
    if test():
      result = ' true'
      count[0] += 1
  except Exception, err: 
    errMsg = str(err)

  print('  ' + (str(count[1]) + ')   ') + result + ' : ' + name)
  if errMsg != None: 
    print('       ' + errMsg + '\n')

# code for capturing print output
# 
# directions: capture_print function returns a list of all elements that were 
#             printed using print with the function that it is given. Note that 
#             the function given to capture_print must be fed using lambda. 
#             Example cis provided below

from cStringIO import StringIO
import sys
class Capturing(list):
    def __enter__(self):
        self._stdout = sys.stdout
        sys.stdout = self._stringio = StringIO()
        return self
    def __exit__(self, *args):
        self.extend(self._stringio.getvalue().splitlines())
        sys.stdout = self._stdout


def capture_print(toRun):
  with Capturing() as output:
    pass
  with Capturing(output) as output:  # note the constructor argument
    toRun()
  return output


print('print_list tests')
test_count = [0, 0]

def test():
  record = capture_print(lambda: print_list([1,2,3]))
  return len(record) == 3 and record[0] == '1' and record[1] == '2' and record[2] == '3'
expect(test_count, 'should print elements of list forwards', test)

def test():
  record = capture_print(lambda: print_list([]))
  return len(record) == 0
expect(test_count, 'does not print for an empty input list', test)

def test():
  record = capture_print(lambda: print_list([5]))
  return len(record) == 1 and record[0] == '5'
expect(test_count, 'able to print a single element list [5]', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')


print('print_reverse tests')
test_count = [0, 0]

def test():
  record = capture_print(lambda: print_reverse([1,2,3]))
  return len(record) == 3 and record[0] == '3' and record[1] == '2' and record[2] == '1'
expect(test_count, 'should print elements of list backwards', test)

def test():
  record = capture_print(lambda: print_reverse([]))
  return len(record) == 0
expect(test_count, 'does not print for an empty input list', test)

def test():
  record = capture_print(lambda: print_reverse([5]))
  return len(record) == 1 and record[0] == '5'
expect(test_count, 'able to print a single element list [5]', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')


print('reverse_string tests')
test_count = [0, 0]

def test():
  results = reverse_string('hello')
  return results == 'olleh'
expect(test_count, 'able to reverse string \'hello\'', test)

def test():
  results = reverse_string('')
  return results == ''
expect(test_count, 'able to return an empty string for empty string input', test)

def test():
  results = reverse_string('b')
  return results == 'b'
expect(test_count, 'able to return the same character for a single-character input string', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')


print('list_pairs tests')
test_count = [0, 0]

def test():
  results = list_pairs([1,2,3,4,5,6])
  return len(results) == 3 and results[0][0] == 1 and results[0][1] == 2 and results[1][0] == 3 and results[1][1] == 4 and results[2][0] == 5 and results[2][1] == 6
expect(test_count, 'should return [[1,2],[3,4],[5,6]] output for [1,2,3,4,5,6] input', test)

def test():
  results = list_pairs([1,2,3,4,5])
  return len(results) == 3 and results[0][0] == 1 and results[0][1] == 2 and results[1][0] == 3 and results[1][1] == 4 and results[2][0] == 5 and results[2][1] == None
expect(test_count, 'should return [[1,2],[3,4],[5,None]] output for [1,2,3,4,5] input', test)

def test():
  results = list_pairs([])
  return len(results) == 0
expect(test_count, 'should return [] output for [] input', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')


print('flatten tests')
test_count = [0, 0]

def test():
  results = flatten([1, [2, 3, [4]], 5, [[6]]])
  return len(results) == 6 and results[0] == 1 and results[1] == 2 and results[2] == 3 and results[3] == 4 and results[4] == 5 and results[5] == 6
expect(test_count, 'should return [1,2,3,4,5,6] output for [1, [2, 3, [4]], 5, [[6]]] input', test)

def test():
  results = flatten([])
  return len(results) == 0
expect(test_count, 'should return [] output for [] input', test)

def test():
  results = flatten([1, [2, 3, [4], []], [], 5, [[], [6]]])
  return len(results) == 6 and results[0] == 1 and results[1] == 2 and results[2] == 3 and results[3] == 4 and results[4] == 5 and results[5] == 6
expect(test_count, 'should return [1,2,3,4,5,6] output for [1, [2, 3, [4], []], [], 5, [[], [6]]] input (note the empty arrays)', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')


print('power tests')
test_count = [0, 0]

def test():
  results = power(3, 4)
  return results == 81
expect(test_count, 'should return 81 for 3 to the 4th power', test)

def test():
  results = power(5, 0)
  return results == 1
expect(test_count, 'should return 1 for 5 to the 0th power', test)

def test():
  results = power(1, 100)
  return results == 1
expect(test_count, 'should return 1 for 1 to the 100th power', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')


print('merge tests')
test_count = [0, 0]

def test():
  results = merge([1,4,7], [2,3,6,9])
  return len(results) == 7 and results[0] == 1 and results[1] == 2 and results[2] == 3 and results[3] == 4 and results[4] == 6 and results[5] == 7 and results[6] == 9
expect(test_count, 'should return [1, 2, 3, 4, 6, 7, 9] when merging [1, 4, 7]', test)

def test():
  results = merge([], [2,3,6,9])
  return len(results) == 4 and results[0] == 2 and results[1] == 3 and results[2] == 6 and results[3] == 9
expect(test_count, 'should handle inputs when left argument is empty array', test)

def test():
  results = merge([1,4,7], [])
  return len(results) == 3 and results[0] == 1 and results[1] == 4 and results[2] == 7
expect(test_count, 'should handle inputs when right argument is empty array', test)

def test():
  results = merge([], [])
  return len(results) == 0
expect(test_count, 'should handle two empty arrays as inputs', test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')