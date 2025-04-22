#enumerates provide index and elemnet both while iterate over list  or other iteratable

#Try out the enumerate function for yourself in this quick exercise. Complete the skip_elements function to return every other element from the list,
#this time using the enumerate function to check if an element is in an even position or an odd position.

def skip_elements(elements):
    result = []
    for index, element in enumerate(elements):
        if index % 2 == 0:
            result.append(element)
    return result

print(skip_elements(["a", "b", "c", "d", "e", "f", "g"]))  # ['a', 'c', 'e', 'g']
print(skip_elements(['Orange', 'Pineapple', 'Strawberry', 'Kiwi', 'Peach']))  # ['Orange', 'Strawberry', 'Peach']
