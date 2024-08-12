const pastaRecipes = [
  // Advanced Pasta Recipes
  {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese", "black pepper"],
    instructions: "Cook spaghetti according to package instructions. In a separate pan, fry bacon until crispy. Whisk eggs, Parmesan cheese, and black pepper in a bowl. Drain spaghetti and toss with bacon and egg mixture."
  },
  {
    name: "Fettuccine Alfredo",
    ingredients: ["fettuccine", "butter", "heavy cream", "Parmesan cheese", "salt", "pepper"],
    instructions: "Cook fettuccine according to package instructions. In a saucepan, melt butter over medium heat. Add heavy cream, Parmesan cheese, salt, and pepper. Cook until sauce thickens. Toss cooked fettuccine in the sauce."
  },
  {
    name: "Lobster Ravioli with Lemon Cream Sauce",
    ingredients: [
      "lobster meat",
      "ravioli pasta",
      "heavy cream",
      "lemon",
      "butter",
      "shallots",
      "white wine",
      "parsley",
      "salt",
      "pepper"
    ],
    instructions: "Cook the lobster meat and chop it into small pieces. Cook the ravioli pasta according to package instructions. In a pan, melt butter and sauté shallots. Add white wine and reduce. Add heavy cream, lemon zest, and lemon juice. Stir in lobster meat and cooked ravioli. Season with salt, pepper, and garnish with parsley."
  },
  {
    name: "Wild Mushroom and Truffle Pasta",
    ingredients: [
      "pappardelle pasta",
      "wild mushrooms (e.g., porcini, shiitake)",
      "truffle oil",
      "garlic",
      "shallots",
      "chicken or vegetable broth",
      "heavy cream",
      "Parmesan cheese",
      "salt",
      "pepper",
      "fresh parsley"
    ],
    instructions: "1. Cook the pappardelle pasta according to package instructions. 2. In a pan, sauté minced garlic and shallots in olive oil. 3. Add sliced wild mushrooms and cook until tender. 4. Deglaze with broth and simmer until reduced. 5. Stir in heavy cream, truffle oil, and grated Parmesan cheese. 6. Toss cooked pasta in the sauce and season with salt and pepper. 7. Garnish with fresh parsley."
  },
  {
    name: "Smoked Salmon Carbonara",
    ingredients: [
      "spaghetti",
      "smoked salmon",
      "eggs",
      "Parmesan cheese",
      "garlic",
      "shallots",
      "white wine",
      "heavy cream",
      "fresh dill",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the spaghetti according to package instructions. 2. In a pan, sauté minced garlic and shallots. 3. Deglaze with white wine and simmer until reduced. 4. Whisk eggs, heavy cream, and grated Parmesan cheese in a bowl. 5. Toss cooked pasta in the egg mixture. 6. Stir in smoked salmon and chopped fresh dill. 7. Season with salt and pepper."
  },
  {
    name: "Spicy Shrimp Linguine with Tomatoes and Garlic",
    ingredients: [
      "linguine pasta",
      "shrimp",
      "cherry tomatoes",
      "garlic",
      "red pepper flakes",
      "olive oil",
      "white wine",
      "lemon",
      "parsley",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the linguine pasta according to package instructions. 2. In a pan, heat olive oil and sauté minced garlic and red pepper flakes. 3. Add cherry tomatoes and cook until softened. 4. Deglaze with white wine and simmer until reduced. 5. Add cooked shrimp and toss with cooked pasta. 6. Squeeze lemon juice and garnish with chopped parsley. 7. Season with salt and pepper."
  },
  {
    name: "Braised Lamb Ragù with Pappardelle",
    ingredients: [
      "pappardelle pasta",
      "lamb shoulder",
      "carrots",
      "celery",
      "onion",
      "garlic",
      "tomato paste",
      "red wine",
      "beef broth",
      "canned tomatoes",
      "bay leaves",
      "thyme",
      "rosemary",
      "Parmesan cheese",
      "salt",
      "pepper"
    ],
    instructions: "1. Season lamb shoulder with salt and pepper. 2. In a Dutch oven, sear lamb until browned. 3. Sauté chopped carrots, celery, onion, and minced garlic. 4. Stir in tomato paste and cook until caramelized. 5. Deglaze with red wine and simmer until reduced. 6. Add beef broth, canned tomatoes, bay leaves, thyme, and rosemary. 7. Braise lamb in the oven until tender. 8. Shred lamb and toss with cooked pappardelle pasta. 9. Garnish with grated Parmesan cheese."
  },
  {
    name: "Gnocchi with Gorgonzola Cream Sauce and Toasted Walnuts",
    ingredients: [
      "gnocchi",
      "Gorgonzola cheese",
      "heavy cream",
      "butter",
      "walnuts",
      "sage leaves",
      "salt",
      "pepper",
      "Parmesan cheese"
    ],
    instructions: "1. Cook the gnocchi according to package instructions. 2. In a saucepan, melt butter and crumble Gorgonzola cheese. 3. Stir in heavy cream until smooth. 4. Toast walnuts in a dry pan until fragrant. 5. Toss cooked gnocchi in the Gorgonzola cream sauce. 6. Add toasted walnuts and torn sage leaves. 7. Season with salt and pepper. 8. Garnish with grated Parmesan cheese."
  },
  {
    name: "Orecchiette with Sausage, Broccoli Rabe, and Sun-Dried Tomatoes",
    ingredients: [
      "orecchiette pasta",
      "Italian sausage",
      "broccoli rabe",
      "garlic",
      "sun-dried tomatoes",
      "chicken broth",
      "Parmesan cheese",
      "olive oil",
      "salt",
      "pepper",
      "red pepper flakes"
    ],
    instructions: "1. Cook the orecchiette pasta according to package instructions. 2. In a skillet, cook crumbled Italian sausage until browned. 3. Sauté chopped broccoli rabe and minced garlic until tender. 4. Add chopped sun-dried tomatoes and chicken broth. 5. Toss cooked pasta in the skillet with the sausage mixture. 6. Season with salt, pepper, and red pepper flakes. 7. Garnish with grated Parmesan cheese and drizzle with olive oil."
  },

  // Mid-Level Pasta Recipes
  // Mid-Level Pasta Recipes (Continued)
  {
    name: "Penne Alla Vodka with Pancetta",
    ingredients: [
      "penne pasta",
      "pancetta",
      "onion",
      "garlic",
      "vodka",
      "crushed tomatoes",
      "heavy cream",
      "Parmesan cheese",
      "fresh basil",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the penne pasta according to package instructions. 2. In a pan, cook diced pancetta until crispy. 3. Add diced onion and minced garlic, and cook until softened. 4. Deglaze with vodka and simmer until reduced. 5. Stir in crushed tomatoes and heavy cream. 6. Toss cooked pasta in the sauce. 7. Garnish with grated Parmesan cheese and torn fresh basil."
  },
  {
    name: "Chicken Alfredo Pasta Bake",
    ingredients: [
      "penne pasta",
      "chicken breast",
      "butter",
      "garlic",
      "heavy cream",
      "Parmesan cheese",
      "mozzarella cheese",
      "salt",
      "pepper",
      "Italian seasoning",
      "bread crumbs"
    ],
    instructions: "1. Cook the penne pasta according to package instructions. 2. Season chicken breast with salt, pepper, and Italian seasoning, then grill or bake until cooked through. 3. In a saucepan, melt butter and sauté minced garlic until fragrant. 4. Stir in heavy cream and grated Parmesan cheese until thickened. 5. Toss cooked pasta with the Alfredo sauce. 6. Cube cooked chicken and mix into the pasta. 7. Transfer to a baking dish, top with mozzarella cheese and bread crumbs. 8. Bake until bubbly and golden brown."
  },
  {
    name: "Pasta Primavera with Lemon Parmesan Sauce",
    ingredients: [
      "fettuccine pasta",
      "assorted vegetables (e.g., bell peppers, broccoli, carrots, snap peas)",
      "butter",
      "garlic",
      "chicken broth",
      "heavy cream",
      "lemon",
      "Parmesan cheese",
      "salt",
      "pepper",
      "fresh parsley"
    ],
    instructions: "1. Cook the fettuccine pasta according to package instructions. 2. In a pan, melt butter and sauté minced garlic until fragrant. 3. Add assorted vegetables and cook until tender-crisp. 4. Deglaze with chicken broth and simmer until reduced. 5. Stir in heavy cream, lemon zest, and grated Parmesan cheese until thickened. 6. Toss cooked pasta with the sauce and vegetables. 7. Season with salt and pepper. 8. Garnish with chopped fresh parsley."
  },
  {
    name: "Beef Stroganoff with Egg Noodles",
    ingredients: [
      "egg noodles",
      "beef sirloin",
      "onion",
      "garlic",
      "mushrooms",
      "beef broth",
      "sour cream",
      "Worcestershire sauce",
      "Dijon mustard",
      "salt",
      "pepper",
      "fresh dill"
    ],
    instructions: "1. Cook the egg noodles according to package instructions. 2. Sear beef sirloin strips until browned. 3. Sauté diced onion, minced garlic, and sliced mushrooms until softened. 4. Deglaze with beef broth and simmer until reduced. 5. Stir in sour cream, Worcestershire sauce, and Dijon mustard until creamy. 6. Toss cooked egg noodles with the beef stroganoff sauce. 7. Season with salt and pepper. 8. Garnish with chopped fresh dill."
  },
  {
    name: "Shrimp Scampi Linguine",
    ingredients: [
      "linguine pasta",
      "shrimp",
      "butter",
      "garlic",
      "white wine",
      "lemon",
      "parsley",
      "red pepper flakes",
      "Parmesan cheese",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the linguine pasta according to package instructions. 2. In a pan, melt butter and sauté minced garlic until fragrant. 3. Add shrimp and cook until pink. 4. Deglaze with white wine and simmer until reduced. 5. Stir in lemon juice, chopped parsley, and red pepper flakes. 6. Toss cooked pasta with the shrimp scampi sauce. 7. Season with salt and pepper. 8. Garnish with grated Parmesan cheese."
  },
  // Mid-Level Pasta Recipes (Continued)
  {
    name: "Rigatoni with Italian Sausage and Roasted Red Pepper Cream Sauce",
    ingredients: [
      "rigatoni pasta",
      "Italian sausage",
      "roasted red peppers",
      "garlic",
      "chicken broth",
      "heavy cream",
      "Parmesan cheese",
      "red pepper flakes",
      "salt",
      "pepper",
      "fresh basil"
    ],
    instructions: "1. Cook the rigatoni pasta according to package instructions. 2. In a pan, cook crumbled Italian sausage until browned. 3. Sauté minced garlic and chopped roasted red peppers until softened. 4. Deglaze with chicken broth and simmer until reduced. 5. Stir in heavy cream and grated Parmesan cheese until thickened. 6. Season with red pepper flakes, salt, and pepper. 7. Toss cooked pasta with the sausage and red pepper cream sauce. 8. Garnish with torn fresh basil."
  },

  // Simple Pasta Recipes
  {
    name: "Spaghetti with Marinara Sauce",
    ingredients: [
      "spaghetti",
      "marinara sauce",
      "Parmesan cheese",
      "fresh basil"
    ],
    instructions: "1. Cook the spaghetti according to package instructions. 2. Heat marinara sauce in a saucepan. 3. Toss cooked pasta in the marinara sauce. 4. Garnish with grated Parmesan cheese and torn fresh basil."
  },
  {
    name: "Creamy Garlic Parmesan Pasta",
    ingredients: [
      "linguine pasta",
      "butter",
      "garlic",
      "heavy cream",
      "Parmesan cheese",
      "salt",
      "pepper",
      "fresh parsley"
    ],
    instructions: "1. Cook the linguine pasta according to package instructions. 2. In a pan, melt butter and sauté minced garlic until fragrant. 3. Stir in heavy cream and grated Parmesan cheese until smooth. 4. Toss cooked pasta in the creamy sauce. 5. Season with salt and pepper. 6. Garnish with chopped fresh parsley."
  },
  {
    name: "Tomato Basil Pasta with Fresh Mozzarella",
    ingredients: [
      "penne pasta",
      "tomatoes",
      "fresh mozzarella",
      "garlic",
      "olive oil",
      "fresh basil",
      "balsamic vinegar",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the penne pasta according to package instructions. 2. In a skillet, sauté minced garlic in olive oil until fragrant. 3. Add diced tomatoes and cook until softened. 4. Toss cooked pasta with the tomato mixture. 5. Tear fresh mozzarella and basil leaves, and mix into the pasta. 6. Drizzle with balsamic vinegar. 7. Season with salt and pepper."
  },
  {
    name: "Lemon Garlic Butter Pasta",
    ingredients: [
      "linguine pasta",
      "butter",
      "garlic",
      "lemon",
      "Parmesan cheese",
      "fresh parsley",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the linguine pasta according to package instructions. 2. In a pan, melt butter and sauté minced garlic until fragrant. 3. Squeeze lemon juice into the pan and zest some lemon peel. 4. Toss cooked pasta in the lemon garlic butter sauce. 5. Garnish with grated Parmesan cheese and chopped fresh parsley. 6. Season with salt and pepper."
  },
  {
    name: "Pesto Pasta with Cherry Tomatoes and Pine Nuts",
    ingredients: [
      "spaghetti",
      "basil pesto",
      "cherry tomatoes",
      "pine nuts",
      "Parmesan cheese",
      "olive oil",
      "salt",
      "pepper"
    ],
    instructions: "1. Cook the spaghetti according to package instructions. 2. In a skillet, heat olive oil and halve cherry tomatoes until softened. 3. Toast pine nuts in a dry pan until golden brown. 4. Toss cooked pasta with basil pesto, cherry tomatoes, and toasted pine nuts. 5. Garnish with grated Parmesan cheese. 6. Season with salt and pepper."
  },
  {
    name: "Cacio e Pepe (Cheese and Pepper Pasta)",
    ingredients: [
      "spaghetti",
      "Pecorino Romano cheese",
      "black pepper",
      "salt"
    ],
    instructions: "1. Cook the spaghetti according to package instructions. 2. Reserve some pasta cooking water. 3. In a skillet, toast black pepper until fragrant. 4. Add cooked pasta to the skillet with some pasta water. 5. Gradually add grated Pecorino Romano cheese, stirring until melted and creamy. 6. Season with salt. 7. Serve immediately."
  }
];


export default pastaRecipes;
