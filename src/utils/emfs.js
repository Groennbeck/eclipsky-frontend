let emfs = 'emfs $testspath="no.hal.jex.collection/src-gen/objectstructures"  '  + 
 '   /  '  + 
 '   src/objectstructures/  '  + 
 '   	Card.java*  '  + 
 '   8<---  '  + 
 '   package objectstructures;  '  + 
 '     '  + 
 '   public class Card {  '  + 
 '       public static void main(String[] args) {  '  + 
 '           System.out.println("This is Card");  '  + 
 '       }  '  + 
 '   }  '  + 
 '     '  + 
 '   --->8  '  + 
 '   	CardDeck.java*;  '  + 
 '   	CardHand.java*;  '  + 
 '   ;  '  + 
 '   ;  '  + 
 '   tests/objectstructures/  '  + 
 '   	CardTest.java 		@ git@github.com:hallvard/jexercise/$testspath/CardTest.java;  '  + 
 '   	CardDeckTest.java 	@ git@github.com:hallvard/jexercise/$testspath/CardDeckTest.java;  '  + 
 '   	CardHandTest.java 	@ git@github.com:hallvard/jexercise/$testspath/CardHandTest.java;  '  + 
 '   	;  '  + 
 '   ;  '  + 
 '   .project: dot.project #java;  '  + 
 '     '  + 
 '   .classpath: dot.classpath  '  + 
 '   	source-folder src  '  + 
 '   	source-folder tests  '  + 
 '   	source-folder /jexercisestandalone  '  + 
 '   	class-container org.eclipse.jdt.launching.JRE_CONTAINER  '  + 
 '   	output-folder bin  '  + 
 '  ;  ' ; 

 export default emfs