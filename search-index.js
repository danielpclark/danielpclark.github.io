var searchIndex = {};
searchIndex["array_tool"] = {"doc":"Array Tool","items":[[5,"uniques","array_tool","Get `uniques` from two vectors",null,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}],[0,"vec","","Array Tool provides many useful methods for vectors",null,null],[8,"Uniq","array_tool::vec","Several different methods for getting, or evaluating, uniqueness.",null,null],[10,"uniq","","`uniq` returns a vector of unique values within itself as compared to\nthe other vector which is provided as a input parameter.",0,{"inputs":[{"name":"uniq"},{"name":"self"}],"output":{"name":"self"}}],[10,"unique","","`unique` removes duplicates from within the vector and returns Self.",0,{"inputs":[{"name":"uniq"}],"output":{"name":"self"}}],[10,"is_unique","","`is_unique` returns boolean value on whether all values within\nSelf are unique.",0,{"inputs":[{"name":"uniq"}],"output":{"name":"bool"}}],[8,"Shift","","Removes, or Adds, the first element of self.",null,null],[10,"shift","","Removes and returns the first item from the vector",1,{"inputs":[{"name":"shift"}],"output":{"name":"t"}}],[10,"unshift","","Insert item at the beginning of the vector.  No return value.",1,{"inputs":[{"name":"shift"},{"name":"t"}],"output":null}],[8,"Intersect","","Set Intersection — Returns a new array containing elements common to the two arrays,\nexcluding any duplicates. The order is preserved from the original array.",null,null],[10,"intersect","","# Example\n```\nuse array_tool::vec::Intersect;",2,{"inputs":[{"name":"intersect"},{"name":"self"}],"output":{"name":"self"}}],[8,"Join","","Join vector of ToString capable things to a String with given delimiter.",null,null],[10,"join","","# Example\n```\nuse array_tool::vec::Join;",3,{"inputs":[{"name":"join"},{"name":"str"}],"output":{"name":"string"}}],[8,"Times","","Expand and duplicate the vectors content `times` the integer given",null,null],[10,"times","","# Example\n```\nuse array_tool::vec::Times;",4,{"inputs":[{"name":"times"},{"name":"i32"}],"output":{"name":"self"}}],[8,"Union","","Create a `union` between two vectors.\nReturns a new vector by joining with other, excluding any duplicates and preserving\nthe order from the original vector.",null,null],[10,"union","","# Example\n```\nuse array_tool::vec::Union;",5,{"inputs":[{"name":"union"},{"name":"self"}],"output":{"name":"self"}}],[11,"uniq","collections::vec","",6,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}],[11,"unique","","",6,{"inputs":[{"name":"vec"}],"output":{"name":"vec"}}],[11,"is_unique","","",6,{"inputs":[{"name":"vec"}],"output":{"name":"bool"}}],[11,"shift","","",6,{"inputs":[{"name":"vec"}],"output":{"name":"t"}}],[11,"unshift","","",6,{"inputs":[{"name":"vec"},{"name":"t"}],"output":null}],[11,"intersect","","",6,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}],[11,"join","","",6,{"inputs":[{"name":"vec"},{"name":"str"}],"output":{"name":"string"}}],[11,"times","","Expand and duplicate the vectors content `times` the integer given",6,{"inputs":[{"name":"vec"},{"name":"i32"}],"output":{"name":"vec"}}],[11,"union","","",6,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}]],"paths":[[8,"Uniq"],[8,"Shift"],[8,"Intersect"],[8,"Join"],[8,"Times"],[8,"Union"],[3,"Vec"]]};
initSearch(searchIndex);
