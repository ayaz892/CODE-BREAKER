def remove_duplicates(input_list):
    output_list = []
    for item in input_list:
        if item not in output_list:
            output_list.append(item)
    return output_list

my_list = [1, 2, 3, 4, 3, 2, 1]
print(remove_duplicates(my_list)) 


 # Output: [1, 2, 3, 4]
