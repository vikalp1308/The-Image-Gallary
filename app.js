var express           =  require("express"),
app                   =  express(),
bodyParser            =  require("body-parser"),
mongoose              =  require("mongoose");

//mongoose.connect('mongodb://localhost:27017/image_gallary', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://Vikalp1308:RiyaKannu@cluster0-dujwe.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("Home");
})

app.get("/About",function(req,res){
	res.render("About");
})


app.get("/animal",function(req,res){
	res.render("Animal");
});

app.get("/foodDrink",function(req,res){
	res.render("FoodDrink");
});

app.get("/covid-19",function(req,res){
	res.render("Covid-19");
});

app.get("/nature",function(req,res){
	res.render("Nature");
});

app.get("/wallpapers",function(req,res){
	res.render("Wallpapers");
});

app.get("/technology",function(req,res){
	res.render("Technology");
});

app.get("/interiors",function(req,res){
	res.render("Interiors");
});

app.get("/spirituality",function(req,res){
	res.render("Spirituality");
});

app.get("/architecture",function(req,res){
	res.render("Architecture");
});

app.get("/artsCulture",function(req,res){
	res.render("ArtsCulture");
});

app.get("/history",function(req,res){
	res.render("History");
});


var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Server Has Started!");
});