# Proje-2
### [16,21,11,8,12,22] -> Merge Sort

    1.Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
    2.Big-O gösterimini yazınız.


##### 1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

|                        |  |  |  |  |  |  |  |  |  |  |  |  |
|------------------------|- |- |- |- |- |- |- |- |- |- |- |- |
|Listeyi ikiye ayırıyoruz|  |  |  |16|21|11|8 |12|22|  |  |  |
|Tek eleman kalana kadar |  |  |16|21|11|  |  |8 |12|22|  |  |
|ikiye ayırmaya devam    |  |16|21|  |11|  |  |8 |  |12|22|  |
|                        |16|  |21|  |11|  |  |8 |  |12|  |22|

|                        |  |  |  |  |  |  |  |  |  |  |  |  |
|------------------------|- |- |- |- |- |- |- |- |- |- |- |- |
|Ayırma işlemi bitti     |16|  |21|  |11|  |  |8 |  |12|  |22|
|şimdi sıralayarak       |  |16|21|  |11|  |  |8 |  |12|22|  |
|birleştiriyoruz         |  |  |11|16|21|  |  |8 |12|22|  |  |
|                        |  |  |  | 8|11|12|16|21|22|  |  |  |
     
##### 2. Big-O gösterimini yazınız.

   O(n.logn) ---> O(6.log6) olur.


