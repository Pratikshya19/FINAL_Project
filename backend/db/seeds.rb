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
c4=Category.create(title:"Photos")
c5=Category.create(title:"Art")

I1=Item.create(name:"Sailboat",artist:"Steve Henderson",price:27,description:"It's smooth sailing through aqua water reflecting the blue of the sky.", category_id:c1.id, image_url:"01.png")

I2=Item.create(name:"Life Is Dance In The Rain",artist:"Adrian Borda",price:17, description:"Dimensions 60.000 x 80.000 x 2.000 cm.", category_id:c1.id, image_url:"02.png")

I3=Item.create(name:"Drapped In A Dream",artist:"Johnathan Harris",price:38, description:"Giclee print from original acrylic on canvas painting of an Italian landscape painting from the area near Le Marche, Italy.", category_id:c1.id, image_url:"03.png")

I4=Item.create(name:"Irises",artist:"Vincent Van Gogh",price:20, description:"DescriptionIrises, 1889 (oil on canvas) by Gogh, Vincent van (1853-90); 71x93 cm; dutch", category_id:c1.id, image_url:"04.png")

I5=Item.create(name:"Princess Diana Roses In A Cut Glass Vase",artist:"Albert Williams",price:22, description:"Painting- Oil On Canvas", category_id:c1.id, image_url:"05.png")

I6=Item.create(name:"Sky Sailing", artist:"Eliza Wheeler", price:27,description:"None", category_id:c2.id, image_url:"06.png")

I7=Item.create(name:"Indian Wells", artist:"Erin Hanson", price:27, description:"Warm desert colors bathe the canvas, bringing to life this beautiful desertscape near Palm Springs, California. The brush strokes in this oil painting are thick and impressionistic, creating a mosaic of color and light.", category_id:c1.id, image_url:"07.png")

I8=Item.create(name:"Lights On Whale Rock", artist:"Erin Hanson", price:60, description:"Weaving water makes it's way through the glowing hills between Paso Robles and Morrow Bay. A peaceful, enriching destination for locals and visitors.The luminous hills are comprised of greens, blues and purples to reflect the hidden colors that are unseen to the eye between sunrise and sunset", category_id:c1.id, image_url:"08.png")

I9=Item.create(name:"Bon Voyage", artist:"Greg Olsen", price:47, description:"Out the call went, twas the day to embark, All aboard on Noah�s gopher-wood ark! ", category_id:c1.id, image_url:"09.png")

I10=Item.create(name:"Summer On the Farm", artist:"Robin Moline", price:27, description:"Summer on the Farm was done as an original for the John Deere Pavilion in Moline Illinois as part of a series in a mural display depicting the four seasons on the farm.", category_id:c1.id, image_url:"10.png")

I11=Item.create(name:"Summer Sky", artist:"Linda Woods", price:22, description:"Abstract watercolor art in shades of blue by Linda Woods.", category_id:c1.id, image_url:"11.png")

I12=Item.create(name:"Too Many Watermelons", artist:"Yetiland", price:18, description:"Digital Art", category_id:c2.id, image_url:"12.png")

I13=Item.create(name:"The Introvert", artist:"Cynthia Decker", price:50, description:"The title refers to the owner of the books, and the cat. Probably to the little mouse, too, if you can find him. Digital rendering by Cynthia Decker.", category_id:c2.id, image_url:"13.png")

I14=Item.create(name:"Space Tourist", artist:"Vitaliy Gladkiy", price:27, description:"Digital Art", category_id:c2.id, image_url:"14.png")

I15=Item.create(name:"Fall Leaves", artist:"Ken Taylor", price:17, description:"This is a composite image and digital painting of Fall leaves turning color", category_id:c2.id, image_url:"15.png")  

I16=Item.create(name:"Hollow Still Life 1", artist:"Adrienne Romine", price:22, description:"A still life I created during an artist residency in Beijing, China in June 2011", category_id:c2.id, image_url:"16.png") 

 I17=Item.create(name:"Show Off", artist:"Cynthia Decker", price:42, description:"Every group has a showoff! Digital 3d rendering by Cynthia Decker. Inspired by a photograph by Hideta Nagai.", category_id:c2.id, image_url:"17.png") 

I18=Item.create(name:"Before The Storm", artist:"Steven Palmer", price:75, description:"Digital Art - Digital Art", category_id:c2.id, image_url:"18.png") 
    
I19=Item.create(name:"Doctor To Pig", artist:"Paul Noth", price:60, description:" Cartoon-Image-Type", category_id:c3.id, image_url:"19.png")   
          
I20=Item.create(name:"Grumpy Cat As David Bowie", artist:"Olga Shvartsur", price:27, description:" Grumpy Cat as David Bowie: Grumpy Bowie David NOie.", category_id:c3.id, image_url:"20.png")  

I21=Item.create(name:"Mandala Bouquet", artist:"Matthew Ridgway", price:37, description:" 1998 Matt Ridgway", category_id:c3.id, image_url:"21.png") 

I22=Item.create(name:"B B King And Lucille", artist:" David Lloyd Glover", price:30, description:"The one and only! B B is ripping another note right off the fret board of Lucille.", category_id:c3.id, image_url:"22.png")  
    
I23=Item.create(name:"Danny Devito", artist:"Greg Joens", price:25, description:"Danny DeVito is an American actor, producer and director. He gained prominence for his portrayal of the taxi dispatcher, Louie De Palma, in Taxi (1978�1983) which won him a Golden Globe and an Emmy", category_id:c3.id, image_url:"23.png")  

I24=Item.create(name:"Nighthawk", artist:" Eric Fan", price:20, description:"Nighthawk is a drawing by Eric Fan which was uploaded on September 19th, 2014.", category_id:c3.id, image_url:"24.png")  

I25=Item.create(name:"Music Man", artist:"Eric Fan", price:20, description:"Spreading the funky sounds of his hit new single Moustache Wax around the world.", category_id:c3.id, image_url:"25.png") 



require 'faker'
include Faker
1.times do
    Customer.create(name: Faker::Name.name, email: Faker::Internet.email, address: Faker::Address.full_address, password: "password")

end

