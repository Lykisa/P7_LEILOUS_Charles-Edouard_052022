import '../styles/Wall.css'


const url = "http://localhost:3000/api/post/"

async function affichagePost() {
    await fetch(url, {
        headers : {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).token}
    })
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data)

        data.forEach((post) => {
            console.log(post)
            let section = document.getElementById('posts');
        
            let a = document.createElement("a");
            a.href = `./post/` + post.id;
            let href = section.appendChild(a)
    
            let article = document.createElement("article");
            article.className = article
            let lienArticle = href.appendChild(article);

            let infoArticle = document.createElement("div");
            infoArticle.className = infoArticle;
            lienArticle.appendChild(infoArticle);

            let user = document.createElement("h1");
            user.innerHTML = post.user.username;
            infoArticle.appendChild(user);

            let date = document.createElement("p");
            date.innerHTML = post.createdAt.split('T')[0] +' '+ post.createdAt.split('T')[1].slice(0, -5);
            infoArticle.appendChild(date);

            let text = document.createElement("p");
            text.innerHTML = post.text;
            lienArticle.appendChild(text);

        })

    })
}



function Wall() {

    
    affichagePost()

    
    return (
        <div>
            
            <section id="posts">
                
            </section>
        </div>
    )
}

export default Wall