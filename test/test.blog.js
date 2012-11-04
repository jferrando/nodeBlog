var assert = require('assert')
,blog = require('blog');
suite('blog',function() {
  test('all method should return all posts', function() {
    assert.equal(blog.all().length,2);
  });
  test('add method should add one object to data array', function() {
    var nposts = blog.all().length;
    blog.add({title:"post3",body:"body of post 3"});
    assert.equal(blog.all().length,nposts+1);
  });
});