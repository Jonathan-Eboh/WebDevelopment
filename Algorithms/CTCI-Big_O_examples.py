
1)
#Has runtime O(N) iterating through the array twice doesnt matter because we drop constants
#so its not 2(O(N))
def arr_run(arr):
    int_sum = 0
    product = 1
    for i in range(len(arr)):
        int_sum += arr[i]

    for j in range(len(arr)):
        product *= arr[j]
    print str(int_sum)+" , "+str(product)


myList =[1,2,3,4,5]

arr_run(myList)
