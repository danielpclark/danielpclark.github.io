var searchIndex = {};
searchIndex["base_custom"] = {"doc":"base_custom","items":[[3,"BaseCustom","base_custom","The BaseCustom struct holds the information to perform number conversions via the `gen` and `decimal` methods.",null,null],[12,"base","","The size of the base",0,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","'new' creates a new BaseCustom instance and propogates the values for converting numeric bases.",0,{"inputs":[{"name":"vec"}],"output":{"name":"basecustom"}}],[11,"gen","","`gen` returns a String computed from the character mapping and  positional values the given u64 parameter evalutes to for your custom base",0,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"string"}}],[11,"char","","`char` returns a char straight from the character mapping. decimal value must be within character range for a Some result.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"decimal","","`decimal` returns a u64 value on computed from the units that form the custom base.",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"u64"}}],[11,"zero","","Returns the zero value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"one","","Returns the one value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"nth","","Returns the nth value of your custom base",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"from_ordinal_range","","Create a custom numeric base from an ascii range of ordinal values",0,{"inputs":[{"name":"range"}],"output":{"name":"basecustom"}}],[11,"new","","'new' creates a new BaseCustom instance and propogates the values for converting numeric bases.",0,{"inputs":[{"name":"s"},{"name":"option"}],"output":{"name":"basecustom"}}],[11,"gen","","`gen` returns a String computed from the character mapping and  positional values the given u64 parameter evalutes to for your custom base",0,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"string"}}],[11,"decimal","","`decimal` returns a u64 value on computed from the units that form the custom base.",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"u64"}}],[11,"zero","","Returns the zero value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"one","","Returns the one value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"nth","","Returns the nth value of your custom base",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"basecustom"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"basecustom"}],"output":{"name":"bool"}}]],"paths":[[3,"BaseCustom"]]};
searchIndex["digits"] = {"doc":"digits","items":[[3,"Digits","digits","This struct acts similar to a full number with a custom numeric character base. But the underlying implementation is a linked list where all the methods recurse as far as need to to implement the operations.",null,null],[8,"Into","","",null,null],[10,"into","","",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"digits"}}],[11,"add","","Add two Digits instances together.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"gen","","Allows you to generate/encode a Digits from a `u64` or other `Digits` even if they are of a different numeric base.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"self"}}],[11,"is_one","","Returns bool value of if the number is one.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_zero","","Returns bool value of if the number is zero.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"length","","Returns a `usize` of the total linked list length.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"mul","","Multiply two Digits instances together.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"mut_add","","Add two Digits instances together.  The one the `mut_add` method is called on must be mutable and modifies itself.  The other is consumed.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"mut_mul","","Multiply two Digits instances together.  The one the `mut_mul` method is called on must be mutable and modifies itself.  The other is consumed.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"new","","Creates a new Digits instance with the provided character set and value.",1,{"inputs":[{"name":"basecustom"},{"name":"s"}],"output":{"name":"digits"}}],[11,"new_one","","Creates a new Digits instance with value of one and the provided character mapping.",1,{"inputs":[{"name":"basecustom"}],"output":{"name":"self"}}],[11,"new_zero","","Creates a new Digits instance with value of zero and uses the provided character mapping.",1,{"inputs":[{"name":"basecustom"}],"output":{"name":"self"}}],[11,"one","","Creates a new Digits instance with value of one and uses the current character mapping.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"pinky","","The “pinky” is the smallest digit a.k.a. current digit in the linked list a.k.a. the right most digit. This will be a `char` value for that digit.",1,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"pow","","Multiplies self times the power-of given Digits parameter.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"pred_till_zero","","Minuses one unless it's zero, then it just returns a Digits instance of zero.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"propagate","","Creates a new Digits instance with the internal character set and given value.",1,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"self"}}],[11,"replicate","","An alias for `clone`. Useful for unboxing.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"succ","","Plus one.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"to_s","","Gives the full value of all digits within the linked list as a String.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"to_string","","Gives the full value of all digits within the linked list as a String.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"zero","","Creates a new Digits instance with value of zero and the current character mapping.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"from","","",1,null],[11,"from","","",1,null],[11,"from","","",1,null],[11,"into","","",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"digits"}],"output":{"name":"bool"}}]],"paths":[[8,"Into"],[3,"Digits"]]};
initSearch(searchIndex);
