const express=require('express');
const router=express.Router();
const post=require('../model/post');


router.get('/',async(req,res)=>{
    //  res.send("we r on post");
    try{
      const posts=await post.find();
      res.json(posts);
    }catch(err){
      res.json({message:err});
    }
  });

// CREATE POSt
  router.post('/', async(req,res)=>{
  const expense=new post({
    Expense_Category:req.body.Expense_Category,
    Expense_Date:req.body.Expense_Date,
    Amount:req.body.Amount,
    Reference_No:req.body.Reference_No,
    Expense_for:req.body.Expense_for,
    Description:req.body.Description
  });
  try {
    const Expense=await expense.save();
    res.json(Expense);
} catch (err) {
    res.json({message:err}); 
}

});

//SPECIFIC POST
 

router.get('/:postId', async (req, res)=>{
  try {
     const expense=await post.findById(req.params.postId);
     res.json(expense);
  } catch (err) {
    res.json({message:err});
  }
});



// UPDATE POST
router.patch('/:postId',async(req,res)=>{
  try{
    const options={new:true};
    const upadatedexpense= await post.findByIdAndUpdate(
     {_id:req.params.postId},
     {$set:{Expense_Category:req.body.Expense_Category,Expense_Category:req.body.Expense_Category,Expense_Date:req.body.Expense_Date 
       ,Amount:req.body.Amount,Reference_No:req.body.Reference_No,Expense_for:req.body.Expense_for,Description:req.body.Description}},
    {options});
    res.json(upadatedexpense);
  }catch(err){
    res.json({message:err});
  }
});


module.exports=router;
