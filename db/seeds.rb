melissa = User.create(username: "melissafunk", password: "hello")

c1 = Category.create(category: "Fast Food")

l1 = List.create(top5: "Shake Shack, In-n-Out, Del Taco, Popeyes, Jack in the Box", likes: 0, user_id: 1, category_id: 1)