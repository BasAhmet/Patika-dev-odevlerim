liste = [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
flattenList = []

def listElement(liste):
    for i in liste:
        if type(i)==list:
            listElement(i)
        else:
            flattenList.append(i)
            
listElement(liste)
print(flattenList)