*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#000;
    color:#fff;
}


/* Navigation */

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:rgba(0,0,0,0.9);
    position:fixed;
    width:100%;
    top:0;
    z-index:1000;
}

.logo{
    color:#FFD700;
    font-size:28px;
    font-weight:bold;
}

.navbar ul{
    display:flex;
    gap:25px;
    list-style:none;
}

.navbar a{
    color:white;
    text-decoration:none;
}

.navbar a:hover{
    color:#FFD700;
}


/* Hero */

.hero{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    background:
    linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),
    url("images/hero.jpg");

    background-size:cover;
    background-position:center;
}

.hero h1{
    font-size:60px;
    color:#FFD700;
}

.hero p{
    margin:20px;
    font-size:22px;
}

.btn{
    display:inline-block;
    padding:15px 35px;
    background:#FFD700;
    color:#000;
    border-radius:50px;
    text-decoration:none;
    font-weight:bold;
}


/* Sections */

section{
    padding:100px 8%;
    text-align:center;
}

h2{
    color:#FFD700;
    font-size:40px;
    margin-bottom:40px;
}


/* Services */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:#151515;
    padding:30px;
    border-radius:15px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
    border:1px solid #FFD700;
}


/* Portfolio */

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.gallery img{
    width:100%;
    height:300px;
    object-fit:cover;
    border-radius:15px;
}


/* Team */

.team{
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
}

.team div,
.review-card{
    background:#151515;
    padding:25px;
    border-radius:15px;
}


/* Booking */

form{
    max-width:600px;
    margin:auto;
}

input,
select,
textarea{
    width:100%;
    padding:15px;
    margin:10px 0;
    border-radius:8px;
    border:none;
}

textarea{
    height:120px;
}

button{
    padding:15px 40px;
    background:#FFD700;
    border:none;
    border-radius:50px;
    font-weight:bold;
}


/* Reviews */

.review-box{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}


/* Contact */

#contact a{
    display:inline-block;
    margin-top:20px;
    padding:15px 30px;
    background:#25D366;
    color:white;
    border-radius:50px;
    text-decoration:none;
}


/* Footer */

footer{
    padding:20px;
    text-align:center;
    background:#111;
}


/* Mobile */

@media(max-width:768px){

.navbar{
    flex-direction:column;
}

.navbar ul{
    flex-direction:column;
    margin-top:15px;
}

.hero h1{
    font-size:35px;
}

.hero p{
    font-size:18px;
}

}