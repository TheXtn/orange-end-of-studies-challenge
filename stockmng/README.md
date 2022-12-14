# Doc
# This is stock management developed at Orange developer center
# This project made using Next Js
# To run 
Just clone and run: npm -i
Then run: npm run dev
# Next js files structure
    pages/api folder : contains backend based on express js
    /pages folder : contains the application pages
    /components folder : contains the application components 

# Api doc:
# User management:
    POST http://localhost:3000/api/auth/signup body { username , name , password}
    POST  http://localhost:3000/api/auth/callback/credentials Login Made using Next Auth
# Product Mangement:
    GET http://localhost:3000/api/itemsServices get all products
    POST http://localhost:3000/api/itemsServices add product
    PUT http://localhost:3000/api/itemsServices update product
    DELETE http://localhost:3000/api/itemsServices delete product
    GET http://localhost:3000/api/itemsServices/{id} get product by id
    
# Made with ❤️ By Yussef mrabet at Orange developer center
