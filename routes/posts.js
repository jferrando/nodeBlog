
/*
 * GET users listing.
 */

exports.list = function(req, res){
 res.json(JSON.stringify(
    [
      {
	title:"title1"
	,desc:"desc1"
      }
      ,{
	title:"title2"
	,desc:"desc2"
      }
    ]
  ));
};