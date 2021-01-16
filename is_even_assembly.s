	.globl	is_even_assembly
/* int is_even_assembly(int n) */
is_even_assembly:
        /* n in %rdi */
        decl %edi            /* Subtract one to n */
        movl %edi, %eax      /* Move 1st argument to return register %rax */
        andl $1, %eax        /* Get least significant bit */
	ret                  /* return */

