describe('Member', function(){
  var Member = require('../src/Member.js'),
  member,
  role;

  beforeEach(function(){
    member = new Member('Joel', 'Grissom');
    role = 'Grammarian';
  });

  it('should be able to add a new role to a member', function(){
    member.addRole(role);

    expect(member.getRole(0)).toBe(role);
  });

  it('should be able to delete a role', function(){
    member.deleteRole();

    expect(member.getRole(0)).not.toBeDefined();
  });

  it('should be able to show as unavailable', function(){
    member.markUnavailable();

    expect(member.available).toBeFalsy();
    expect(member.available).not.toBeTruthy();
  });

  it('should be able to show as available', function(){
    member.markAvailable();

    expect(member.available).toBeTruthy();
    expect(member.available).not.toBeFalsy();
  });
});
