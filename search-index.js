var searchIndex = {};
searchIndex["array_tool"] = {"doc":"Array Tool","items":[[5,"uniques","array_tool","Get `uniques` from two vectors",null,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}],[0,"vec","","Array Tool provides many useful methods for vectors",null,null],[8,"Uniq","array_tool::vec","Several different methods for getting, or evaluating, uniqueness.",null,null],[10,"uniq","","`uniq` returns a vector of unique values within itself as compared to the other vector which is provided as an input parameter.",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"unique","","`unique` removes duplicates from within the vector and returns Self.",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"is_unique","","`is_unique` returns boolean value on whether all values within Self are unique.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"uniq_via","","`uniq_via` returns a vector of unique values within itself as compared to the other vector which is provided as an input parameter, as defined by a provided custom comparator.",0,{"inputs":[{"name":"self"},{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[10,"unique_via","","`unique_via` removes duplicates, as defined by a provided custom comparator, from within the vector and returns Self.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[10,"is_unique_via","","`is_unique_via` returns boolean value on whether all values within Self are unique, as defined by a provided custom comparator.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"bool"}}],[8,"Shift","","Removes, or Adds, the first element of self.",null,null],[10,"shift","","Removes and returns the first item from the vector",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[10,"unshift","","Insert item at the beginning of the vector.  No return value.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[8,"Intersect","","Set Intersection — Returns a new array containing elements common to the two arrays, excluding any duplicates. The order is preserved from the original array.",null,null],[10,"intersect","","Example ``` use array_tool::vec::Intersect;",2,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"intersect_if","","Example ``` # use std::ascii::AsciiExt; use array_tool::vec::Intersect;",2,{"inputs":[{"name":"self"},{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[8,"Join","","Join vector of ToString capable things to a String with given delimiter.",null,null],[10,"join","","Example ``` use array_tool::vec::Join;",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"string"}}],[8,"Times","","Expand and duplicate the vectors content `times` the integer given",null,null],[10,"times","","Example ``` use array_tool::vec::Times;",4,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"name":"self"}}],[8,"Union","","Create a `union` between two vectors. Returns a new vector by joining with other, excluding any duplicates and preserving the order from the original vector.",null,null],[10,"union","","Example ``` use array_tool::vec::Union;",5,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[0,"string","array_tool","A string is a collection so we should have more methods for handling strings.",null,null],[3,"GraphemeBytesIter","array_tool::string","A grapheme iterator that produces the bytes for each grapheme.",null,null],[8,"ToGraphemeBytesIter","","ToGraphemeBytesIter - create an iterator to return bytes for each grapheme in a string.",null,null],[10,"grapheme_bytes_iter","","Returns a GraphemeBytesIter which you may iterate over.",6,{"inputs":[{"name":"self"}],"output":{"name":"graphemebytesiter"}}],[8,"Squeeze","","Squeeze - squeezes duplicate characters down to one each",null,null],[10,"squeeze","","Example ``` use array_tool::string::Squeeze;",7,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"string"}}],[8,"Justify","","Justify - expand line to given width.",null,null],[10,"justify_line","","Example ``` use array_tool::string::Justify;",8,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"string"}}],[8,"SubstMarks","","Substitute string character for each index given.",null,null],[10,"subst_marks","","Example ``` use array_tool::string::SubstMarks;",9,{"inputs":[{"name":"self"},{"name":"vec"},{"name":"str"}],"output":{"name":"string"}}],[8,"AfterWhitespace","","After whitespace",null,null],[10,"seek_end_of_whitespace","","Given offset method will seek from there to end of string to find the first non white space.  Resulting value is counted from offset.",10,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[8,"WordWrap","","Word wrapping",null,null],[10,"word_wrap","","White space is treated as valid content and new lines will only be swapped in for  the last white space character at the end of the given width.  White space may reach beyond  the width you've provided.  You will need to trim end of lines in your own output (e.g.  splitting string at each new line and printing the line with trim_right).  Or just trust  that lines that are beyond the width are just white space and only print the width -  ignoring tailing white space.",11,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"string"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new grapheme iterator from a string source.",12,{"inputs":[{"name":"str"}],"output":{"name":"graphemebytesiter"}}],[11,"next","","",12,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"len","","",12,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}]],"paths":[[8,"Uniq"],[8,"Shift"],[8,"Intersect"],[8,"Join"],[8,"Times"],[8,"Union"],[8,"ToGraphemeBytesIter"],[8,"Squeeze"],[8,"Justify"],[8,"SubstMarks"],[8,"AfterWhitespace"],[8,"WordWrap"],[3,"GraphemeBytesIter"]]};
searchIndex["base_custom"] = {"doc":"base_custom","items":[[3,"BaseCustom","base_custom","The BaseCustom struct holds the information to perform number conversions via the `gen` and `decimal` methods.",null,null],[12,"base","","The size of the base",0,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","'new' creates a new BaseCustom instance and propogates the values for converting numeric bases.",0,{"inputs":[{"name":"vec"}],"output":{"name":"basecustom"}}],[11,"gen","","`gen` returns a String computed from the character mapping and  positional values the given u64 parameter evalutes to for your custom base",0,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"string"}}],[11,"char","","`char` returns a char straight from the character mapping. decimal value must be within character range for a Some result.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"decimal","","`decimal` returns a u64 value on computed from the units that form the custom base.",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"u64"}}],[11,"zero","","Returns the zero value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"one","","Returns the one value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"nth","","Returns the nth value of your custom base",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"from_ordinal_range","","Create a custom numeric base from an ascii range of ordinal values",0,{"inputs":[{"name":"range"}],"output":{"name":"basecustom"}}],[11,"new","","'new' creates a new BaseCustom instance and propogates the values for converting numeric bases.",0,{"inputs":[{"name":"s"},{"name":"option"}],"output":{"name":"basecustom"}}],[11,"gen","","`gen` returns a String computed from the character mapping and  positional values the given u64 parameter evalutes to for your custom base",0,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"string"}}],[11,"decimal","","`decimal` returns a u64 value on computed from the units that form the custom base.",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"u64"}}],[11,"zero","","Returns the zero value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"one","","Returns the one value of your custom base",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"nth","","Returns the nth value of your custom base",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"basecustom"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"basecustom"}],"output":{"name":"bool"}}]],"paths":[[3,"BaseCustom"]]};
searchIndex["digits"] = {"doc":"digits","items":[[3,"Digits","digits","This struct acts similar to a full number with a custom numeric character base which is provided and mapped via a BaseCustom instance.",null,null],[3,"StepMap","","",null,null],[8,"Into","","",null,null],[10,"into","","",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"digits"}}],[11,"add","","Add two Digits instances together.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"as_mapping_vec","","Returns a vector of each characters position mapping",1,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"base","","Make numeric base size publicly available on Digits",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"gen","","Allows you to generate/encode a Digits from a `u64` or other `Digits` even if they are of a different numeric base.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"self"}}],[11,"is_compat","","Returns whether the two Digits instances have the same numeric base and character mapping.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"is_one","","Returns bool value of if the number is one.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_zero","","Returns bool value of if the number is zero.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"length","","Returns a `usize` of the total linked list length.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"max_adjacent","","Give the count for the maximum of the same adjacent characters for this digit.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"mul","","Multiply two Digits instances together.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"mut_add","","Add two Digits instances together.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"mut_mul","","Multiply two Digits instances together.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"new","","Creates a new Digits instance with the provided character set and value.",1,{"inputs":[{"name":"basecustom"},{"name":"s"}],"output":{"name":"digits"}}],[11,"new_mapped","","Create a Digits from a Vector of from zero positional mappings for custom Digits numeric base.",1,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"result"}}],[11,"new_one","","Creates a new Digits instance with value of one and the provided character mapping.",1,{"inputs":[{"name":"basecustom"}],"output":{"name":"self"}}],[11,"new_zero","","Creates a new Digits instance with value of zero and uses the provided character mapping.",1,{"inputs":[{"name":"basecustom"}],"output":{"name":"self"}}],[11,"next_non_adjacent","","Returns the next Digits in incrementing that only allows the given number of adjacent number duplicates.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"one","","Creates a new Digits instance with value of one and uses the current character mapping.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"pinky","","The “pinky” is the smallest digit a.k.a. current digit in the linked list a.k.a. the right most digit. This will be a `char` value for that digit.",1,{"inputs":[{"name":"self"}],"output":{"name":"char"}}],[11,"pow","","Multiplies self times the power-of given Digits parameter.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"pred_till_zero","","Minuses one unless it's zero, then it just returns a Digits instance of zero.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"prep_non_adjacent","","Sometimes given starting Digits have more adjacent characters than is desired when proceeding with non-adjacent steps.  This method provides a valid initial state for `step_non_adjacent`'s algorithm to not miss any initial steps.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"propagate","","Creates a new Digits instance with the internal character set and given value.",1,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"self"}}],[11,"rcount","","Right count of digits character index.",1,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"usize"}}],[11,"replicate","","An alias for `clone`. Useful for unboxing.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"step_non_adjacent","","Returns the next Digits in incrementing that only allows the given number of adjacent number duplicates.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"succ","","Plus one.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"to_s","","Gives the full value of all digits within the linked list as a String.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"to_string","","Gives the full value of all digits within the linked list as a String.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"zero","","Creates a new Digits instance with value of zero and the current character mapping.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"zero_fill","","Zero fills the left of the current number up to a total character length.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"zero_trim","","Zero trims the left of the current number.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"from","","",1,null],[11,"from","","",1,null],[11,"from","","",1,null],[11,"into","","",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"digits"}],"output":{"name":"bool"}}],[11,"add","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"add_assign","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"mul","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"mul_assign","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"bitxor","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[11,"bitxor_assign","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"digits"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",2,{"inputs":[{"name":"digits"},{"name":"u8"}],"output":{"name":"self"}}],[11,"next","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}]],"paths":[[8,"Into"],[3,"Digits"],[3,"StepMap"]]};
initSearch(searchIndex);
