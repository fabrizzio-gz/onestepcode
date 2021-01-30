#include <stdio.h>

/* Type definitions */
typedef int my_type;

struct struct_type {
  my_type val1;
  int val2;
};

union union_type {
  my_type n;
  char c;
};


/* Extra function prototypes */
void special_function(struct struct_type my_struct, union union_type my_union);
void helper_function();


/* Main program */
int main() {
  struct struct_type my_struct = { .val1 = 1 , .val2 = 1};
  union union_type my_union = { .n = 1 };

  special_function(my_struct, my_union);

  printf("Success!\n");
  return 0;
}


/* Extra function definitions */
void special_function(struct struct_type my_struct, union union_type my_union) {
  helper_function();
  ;
}


void helper_function() {
  ;
}

