#include <stdio.h>


void brainfuck(char *command_pointer, char *input);

int main()
{
  char *code = "+[-[<<[+[--->]-[<<<]]]>>>-]>-.---.>..>.<<<<-.<+.>>>>>.>.<<.<-.";
  char *input = "";
  
  brainfuck(code, input);
  
  return 0;
}


#define DATASIZE 1001

void brainfuck(char *command_pointer, char *input)
{
  int bracket_flag;
  char command;
  char data[DATASIZE] = {0};
  char *dp;   /* data pointer */ 

  /* Move dp to middle of the data array */
  dp = &data[DATASIZE/2];
  
  while (command = *command_pointer++)
    switch (command) {
    case '>':   /* Move data pointer to next address */
      dp++;
      break;
    case '<':   /* Move data pointer to previous address */
      dp--;
      break;
    case '+':   /* Increase value at current data cell by one */
      (*dp)++;
      break;
    case '-':   /* Decrease value at current data cell by one */
      (*dp)--;
      break;
    case '.':   /* Output character at current data cell */
      printf("%c", *dp);
      break;
    case ',':   /* Accept one character from input pointer ip and
                   advance to next one */
      *dp = *input++;
      break;
    case '[':   /* When the value at current data cell is 0,
                   advance to next matching ] */
      if (!*dp) { 
        for (bracket_flag=1; bracket_flag; command_pointer++)
          if (*command_pointer == '[')
            bracket_flag++;
          else if (*command_pointer == ']')
            bracket_flag--;
      } 
      break;
    case ']':    /* Moves the command pointer back to matching opening [
                    if the value of current data cell is non-zero */
      if (*dp) {   
        command_pointer -= 2;  /* Move command pointer just before ] */
        for (bracket_flag=1; bracket_flag; command_pointer--)
          if (*command_pointer == ']')
            bracket_flag++;
          else if (*command_pointer == '[')
            bracket_flag--;
        command_pointer++;     /* To match it with opening [ aftere quitting loop */
      }
      break;  
    }

  /* Adding new line after end of the program  */
  printf("\n");
}
