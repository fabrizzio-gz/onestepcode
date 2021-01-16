#include <stdio.h>

/* Read one number per line from input.
   Print average */
int main()
{
  int sum=0, number, n;
  float average;

  for (n=0; scanf("%d", &number) == 1; n++)
    sum += number;
    
  average = (n != 0) ? (float) sum / n : sum;
  printf("The average is: %.1f\n", average);

  return 0;
}
