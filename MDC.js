function mdc(a,b) {
    if (a==0) return b
    return(b%a,a)
}

nums = []
nums = prompt('Digite numeros para que se calcule seu maximo divisor comum').split(' ')
for (i=0;i<nums.length;i++) nums[i] = parseInt(nums[i])
if (nums.length!==2) alert('Aperte F5 e digite apenas 2 numeros')
else mdc(nums)
