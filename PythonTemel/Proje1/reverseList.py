liste = [[1, 2], [3, 4], [5, 6, 7]]
liste = liste[::-1]
reverse = []
for i in liste:
    i = i[::-1]
    reverse.append(i)
print(reverse)

