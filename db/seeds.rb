melissa = User.create(username: "melissafunk", password: "hello")

c1 = Category.create(category: "Fast Food Chains")
c2 = Category.create(category:"Funniest Celebrities/Comedians")
c3 = Category.create(category:"Christmas Movies")

l1 = List.create(num1: "Shake Shack", num2: "In-n-Out", num3: "Del Taco", num4: "Popeyes", num5: "Togos", likes: 0, user_id: 1, category_id: 1)