## Buzzby Berkely Robot Hokey Pokey

###Task
Write a program or function to produce an ASCII art animation depicting a line of robots dancing to the lyrics of the Hokey Pokey* (or Cokey, if you prefer) in the style of a Busby Berkely number.

###Example Output

      ⍊      ⍎      ⍚      ⍊       ⍒       ⍚      ⍎      ⍒
     ['']    ['']    ['']    ['']    ['']     ['']    ['']    ['']  
    └[__]┘  └[__]┘  └[__]┘  └[__]┘  └[__]┘   └[__]┘  └[__]┘  └[__]┘ 
      /<      /<      /<      /<      /<       ||      ||      ||   
    ----------------------------------------------------------------
                      "You put your right foot in"


###Input
Accepts three arguments (assumed to be valid):

A) Number of robots in the line (Min=5)

B) Duration of one "beat" in milliseconds (Min=10)
 
C) Delay in ms between successive robots (Min=0 Max=C/A)

###Specifications
1. The number of robots (input argument A) are shown in a row upon a stage.

2. One line of "the verse" at a time is shown beneath the stage (centred to within 1 character, and enclosed in quotation marks.)

3. The robots perform each of the actions prescribed for the current line of the verse before the next line is displayed, and the process repeated.

5. An "action" is "performed" by depicting a robot using the characters defined in the "Verse and Actions" section below, for a given duration.

4. The duration of each action is defined in number of "beats".  (The duration of 1 beat is input argument B.)

5. The leftmost robot starts performing the actions for the line of verse immediately when the text is displayed.

6. Each subsequent robot to the right delays performing its actions until a specific time (input argument C) after the robot to its left began its action.

7. The depiction of each robot varies slightly by a different character to represent its "antenna".  The type of antenna for each robot is random every time the program is run.  Each of the 5 types described in the "Antennae" section below must be used at least once, but the same type must appear on any robots separated by fewer than 2 other robots.

###Verse and Actions
The whole verse is repeated 5 times, 1 line at  a time.

    Line  Text                            Action=Duration in beats,...
    ----  -----------------------------   ------------------------------------
    1     You put your ? in               ??=4
    2     You put your ? out              A=4
    3     You put your ? in               ??=4
    4     And you shake it all about      A=1, ??=1, A=1, ??=1
    5     You do the Hokey Pokey and...   
          ...you turn yourself around      HP[1-3]=1, HP4=2 HP[5-7]=1 
    6     That's what it's all about!     A=4, AA=4

For each repetition of the verse, substitute ? and ??...

       ?            ??

    1. right foot   RF 
    2. left foot    LF
    3. right hand   RH
    4. left hand    LH
    5. whole self   WS

    df

      sdasd      


        ⍊     ⍊        ⍊    ⍊        ⍊      ⍊      ⍊
       ['']   ['']      ['']  ['']      ['']   ['']   \[*-]
      └[__]┘ └[__]┘    └[__]┘┌[__]┘    └[__]┐ ┌[__]┐   [__]\ 
        ||     /<        >\    <\        />    /  \    /  | 
      --------------------------------------------------------
      A_____/RB_____/LF_____/RH_____/LH_____/WS_____/AA_____/
    
         ⍊       ⍊      ⍊      ⍊       ⍊     ⍊      ⍊               
        ['']     [" ]    [  ]    [  ]    [  ]   [ "]    ['']       
       >[__]<    [_<]    [<.]   <[..]>   [.>]   [>_]   <[__]>    
         |\       ||      /|      ||      |\     ||      /|     
      --------------------------------------------------------
      HP1____/HP2____/HP3____/HP4____/HP5____/HP6____/HP7____/ 


N

        ⍊     ⍊        ⍊    ⍊        ⍊      ⍊      ⍊
       ['']   ['']      ['']  ['']      ['']   ['']   \[*-]
      └[__]┘ └[__]┘    └[__]┘┌[__]┘    └[__]┐ ┌[__]┐   [__]\ 
        ||     /<        >\    <\        />    /  \    /  | 
      --------------------------------------------------------
      A_____/RB_____/LF_____/RH_____/LH_____/WS_____/AA_____/
    
         ⍊       ⍊      ⍊      ⍊       ⍊     ⍊      ⍊               
        ['']     [" ]    [  ]    [  ]    [  ]   [ "]    ['']       
       >[__]<    [_<]    [<.]   <[..]>   [.>]   [>_]   <[__]>    
         |\       ||      /|      ||      |\     ||      /|     
      --------------------------------------------------------
      HP1____/HP2____/HP3____/HP4____/HP5____/HP6____/HP7____/ 





###Antennae
NB: Antennae are UTF-16 symbols (2 bytes)

      ⍊⍎⍚⍒ ↀ
      ^-^-^-^-^-
      1 2 3 4 5 
    