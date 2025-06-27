input
```python
gems = [3,3,1,2,3,2,2,3,3,3,1,77]
grades = {}

for grade in gems:
    grades[grade] = grades.get(grade, 0) + 1

print(grades)
```
      
output
```python
{3: 6, 1: 2, 2: 3, 77: 1}
```
