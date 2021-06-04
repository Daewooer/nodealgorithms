 If root is NULL 
 then create root node
return

If root exists then
 compare the data with node.data
 
 while until insertion position is located

    If data is greater than node.data
       goto right subtree
    else
       goto left subtree

 endwhile 
 
 insert data
  
end If

If root.data is equal to search.data
   return root
else
   while data not found

      If data is greater than node.data
         goto right subtree
      else
         goto left subtree
         
      If data found
         return node
   endwhile 
   
   return data not found
   
end if 
