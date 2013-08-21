
get '/' do
  @stuff="Super Awesome"
  erb :index
end

get '/skills/:skill' do
  erb :skills
end

get '/meals' do

  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]

  erb :meals
end
