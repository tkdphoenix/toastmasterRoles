function Member(first, last){
  this.first = first;
  this.last = last;
  this.available = true;
  this.roles = [];
}

Member.prototype.addRole = function(role){
  this.roles.push(role);
}

Member.prototype.getRole = function(index){
  return this.roles[index];
}

Member.prototype.deleteRole = function(index){
  this.roles.splice(index, 1);
}

Member.prototype.markUnavailable = function(){
  this.available = false;
}

Member.prototype.markAvailable = function(){
  this.available = true;
}

module.exports = Member;
