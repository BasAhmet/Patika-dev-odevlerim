# Proje-1
### [22,27,16,2,18,6] -> Insertion Sort

    1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
    2. Big-O gösterimini yazınız.
    3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
    4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
    
    ### [7,3,5,8,2,9,4,15,6]
    dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

##### 1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Algoritma her seferinde dizinin üzerinde ilerleyerek, en küçük elemanı bulur ve baştaki ile yer değiştirir.
   
1.Adım en küçük eleman (2) baştaki (22) ile yer değiştirir.
|2|27|16|22|18|6|     
|-|- |- |- |- |-|
    
2.Adım daha sonraki en küçük sayıyı bulur (6) --> (27) ile yer değiştirir.
|2|6|16|22|18|27|
|-|-|- |- |- |- |

3.Adım daha sonraki en küçük sayıyı bulur (16) olması gereken yerde olduğu için işlem yapmaz.
|2|6|16|22|18|27|
|-|-|- |- |- |- |

4.Adım daha sonraki en küçük sayıyı bulur (18) --> (22) ile yer değiştirir.
|2|6|16|18|22|27|
|-|-|- |- |- |- |


     
##### 2. Big-O gösterimini yazınız.

   O(n^2)

##### 3. Time Complexity: 
###### - Average case: Aradığımız sayının ortada olması,
Worst case ile best casein ortalamasını aldığımızda   n^2 olarak buluruz.

###### - Worst case: Aradığımız sayının sonda olması,
Dizinin her bir elemanı için dizinin kendinden sonraki elemanlarını karşılartıracak. Dolayısıyla 
1.eleman için n işlem 
2.eleman için n-1 işlem
3.eleman için n-2 işlem.....
Yani (n)+(n-1)+(n-2)+...+3+2+1 = [n*(n-1)]/2  :  n^2

###### - Best case: Aradığımız sayının dizinin en başında olması.
Tam sıralı dizi, n tane sayinin üzerinde birer defa gidilir. Yani --> n

##### 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
Listenin ortasında olduğu için average case olur.
    
#### 2. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
 |1.Adım|2|3|5|8|7|9|4|15|6|      
 |------|-|-|-|-|-|-|-|- |-|
 
 |2.Adım|2|3|5|8|7|9|4|15|6|      
 |------|-|-|-|-|-|-|-|- |-|
 
 |3.Adım|2|3|4|8|7|9|5|15|6|      
 |------|-|-|-|-|-|-|-|- |-|
 
 |4.Adım|2|3|4|5|7|9|8|15|6|      
 |------|-|-|-|-|-|-|-|- |-|
