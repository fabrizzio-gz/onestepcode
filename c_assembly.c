#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int is_even_assembly(int n);

int main(){
  int n, i;
  time_t seed;
  
  srand((unsigned) time(&seed));

  for (i=0; i<10; i++) {
    n = rand() % 10;
    if (is_even_assembly(n))
      printf("%d is even\n", n);
    else
      printf("%d is odd\n", n);
  }

  return 0;
}
