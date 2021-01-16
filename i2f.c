#include <stdio.h>
#include <stdlib.h>
#include <math.h>


typedef unsigned float_bits;

float_bits float_i2f(int i) {
  /* Special case : 0 is not a normalized value */
   if (i==0)
    return 0;
  /* sign bit */
  unsigned s = i>>31;
  /* Exponent */
  unsigned E = (int) (log(i<0 ? -i : i)/log(2));
  unsigned exp = E + 127;
  /* Magnificand*/
  unsigned M= i>0? i : -i;
  unsigned frac = M ^ (1<<E);
      
  /* Move frac to start at bit postion 23 */
  if (E>=23)
    /* Too long: Truncate to first 23 bits */
    frac >>= E-23;
  else
    /* Too short: Pad to the right with zeros */
    frac <<= 23-E;
  
  return s<<31 | exp<<23 | frac;
}

int main() {
  int i;
  float *fp; 
  float_bits f;
  
  for (i=-1e7; i<1e7; i++) {
    f = float_i2f(i);
    fp = &f;
    if (*fp != (float) i)
      printf("Casting not equal for value: %d\nConverted value is %.0f\nCasted value is %.0f\n", i, *fp, (float) i);
  }
}
