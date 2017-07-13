var searchIndex = {};
searchIndex["base_custom"] = {"doc":"base_custom","items":[[3,"BaseCustom","base_custom","The BaseCustom struct holds the information to perform number conversions via the `gen` and `decimal` methods.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","'new' creates a new BaseCustom instance and propogates the values for converting numeric bases.",0,{"inputs":[{"name":"vec"}],"output":{"name":"basecustom"}}],[11,"gen","","`gen` returns a String computed from the character mapping and  positional values the given u64 parameter evalutes to for your custom base",0,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"string"}}],[11,"char","","`char` returns a char straight from the character mapping. decimal value must be within character range for a Some result.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"decimal","","`decimal` returns a u64 value on computed from the units that form the custom base.",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"u64"}}],[11,"zero","","Returns the zero value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"one","","Returns the one value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"nth","","Returns the nth value of your custom base",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"from_ordinal_range","","Create a custom numeric base from an ascii range of ordinal values",0,{"inputs":[{"name":"range"}],"output":{"name":"basecustom"}}],[11,"new","","'new' creates a new BaseCustom instance and propogates the values for converting numeric bases.",0,{"inputs":[{"name":"s"},{"name":"option"}],"output":{"name":"basecustom"}}],[11,"gen","","`gen` returns a String computed from the character mapping and  positional values the given u64 parameter evalutes to for your custom base",0,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"string"}}],[11,"decimal","","`decimal` returns a u64 value on computed from the units that form the custom base.",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"u64"}}],[11,"zero","","Returns the zero value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"one","","Returns the one value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"nth","","Returns the nth value of your custom base",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"basecustom"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"basecustom"}],"output":{"name":"bool"}}]],"paths":[[3,"BaseCustom"]]};
searchIndex["digits"] = {"doc":"digits","items":[[3,"Digits","digits","struct Digits",null,null],[8,"Into","","NODOC",null,null],[10,"into","","NODOC",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"digits"}}],[11,"new","","`new` creates a new Digits instance with the provided character set and value.",1,{"inputs":[{"name":"basecustom"},{"name":"s"}],"output":{"name":"digits"}}],[11,"replicate","","`replicate` — alias for clone (useful for unboxing)",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"propagate","","`propagate` creates a new number from the same underlying numeric base",1,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"self"}}],[11,"to_s","","Gives the full value of all digits within the linked list as a String.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"to_string","","Gives the full value of all digits within the linked list as a String.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"length","","`length` returns a `usize` of the total linked list length.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"zero","","`zero` returns a Digits instance with value of zero and the current character mapping.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"new_zero","","`new_zero` returns a Digits instance with value of zero and the current character mapping.",1,{"inputs":[{"name":"basecustom"}],"output":{"name":"self"}}],[11,"is_zero","","`is_zero` returns bool value of if the number is zero",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"pinky","","`pinky` is the smallest digit. a.k.a. current digit in the linked list. a.k.a. the right most digit. This will be a char value for that digit.",1,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"one","","`one` returns a Digits instance with value of one and the current character mapping.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"new_one","","`new_one` returns a Digits instance with value of one and the current character mapping.",1,{"inputs":[{"name":"basecustom"}],"output":{"name":"self"}}],[11,"add","","Add two Digits instances together.  The one the `add` method is called on must be mutable and modifies itself.  The other is consumed.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"into","","",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[8,"Into"],[3,"Digits"]]};
initSearch(searchIndex);
