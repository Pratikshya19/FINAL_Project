# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.destroy_all
Item.destroy_all
Customer.destroy_all

# cus1=Customer.create(name:"PP", email:"pp@gmail.com", address:"tx", password_digest: "pp")




c1=Category.create(title:"Paintings")
c2=Category.create(title:"Digital Art")
c3=Category.create(title:"Illustrations")


I1=Item.create(name:"Sailboat",artist:"Steve Henderson",price:27,description:"It's smooth sailing through aqua water reflecting the blue of the sky.", category_id:c1.id, image_url:"01.png")

I2=Item.create(name:"Life Is Dance In The Rain",artist:"Adrian Borda",price:17, description:"Dimensions 60.000 x 80.000 x 2.000 cm.", category_id:c1.id, image_url:"02.png")

I3=Item.create(name:"Drapped In A Dream",artist:"Johnathan Harris",price:38, description:"Giclee print from original acrylic on canvas painting of an Italian landscape painting from the area near Le Marche, Italy.", category_id:c1.id, image_url:"03.png")

I4=Item.create(name:"Irises",artist:"Vincent Van Gogh",price:20, description:"DescriptionIrises, 1889 (oil on canvas) by Gogh, Vincent van (1853-90); 71x93 cm; dutch", category_id:c1.id, image_url:"04.png")

I5=Item.create(name:"Princess Diana Roses In A Cut Glass Vase",artist:"Albert Williams",price:22, description:"Painting- Oil On Canvas", category_id:c1.id, image_url:"05.png")

I6=Item.create(name:"Sky Sailing", artist:"Eliza Wheeler", price:27,description:"None", category_id:c2.id, image_url:"06.png")









require 'faker'
include Faker
4.times do
    Customer.create(name: Faker::Name.name, email: Faker::Internet.email, address: Faker::Address.full_address, password: "password")

end

