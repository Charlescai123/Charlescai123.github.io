Title: Working Flow of Make Tool

In a Makefile, all the syntaxe are like:
    <target> : <prerequisites> 
    [tab]  <commands>

tips: The commands could be any of the shell commands

To understand why it has such a structure, just remind yourself that the Make tool aims to 'make' something (file) with the necessary dependencies and execution commands, which is similar to a cooking procedure. 

The overall execution of 'Make' is illustrated as following:

First, the input command is parsed under the following scenarios: 
    1. If only 'make' is provided, it will create the first encountered target. 
    2. If a particular target is specified after 'make,' it will generate that specific target. 
  Generally, you would use 'make all' and list all targets in 'all' if you intend to create all of them.

After going to a 'make' procedure, the compiler does the following:
    1. the <target> is not the .PHONY type, compiler treats it as a file:
        
        i). dependency build:
        For each dependency, check whether in compiling directory there is a file that has the same name. If not, treat this dependency as a sub-target and go to the 'sub-target' build process recursively. Otherwise, examine the subpdendencies to make this this dependency up to date;

        ii). target build:
        If in compiling directory there's no file that has the same name as <target>, execute the commands to build it. Otherwise, check the modification time of all the dependencies. If any of it is more recent than the target file, rebuild it (with the commands). Otherwise, do nothing;

    2. the <target> is the .PHONY type, compiler will do the 'dependency build' process and always execute the shell commands afterwards. And normally the .PHONY type does not contain any dependencies;
    


