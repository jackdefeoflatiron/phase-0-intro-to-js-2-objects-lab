const = employees {
    object = employee( key1, key2)
        key1 : name ,
        key2 : streetAddress,
}
function updateEmployeeWithKeyAndValue(employees,name, streetAddress){
    name("Sam")
}
function destructivelyUpdateEmployeeWithKeyAndValue(employees,name, streetAddress) {
    name.splice("Sam");
    streetAddress.splice("11 Broadway")
}
function updateEmployeeWithKeyAndValue(employees,name, streetAddress) {
    streetAddress.unshift("11 Broadway")
}
function deleteFromEmployeeByKey(employees,name, streetAddress) {
    
}
function destructivelyDeleteFromEmployeeByKey(employees,name, streetAddress) {

}