function initialPageLoad(){
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const hero = document.createElement('div');
    const foodSection = document.createElement('div');
    const footer = document.createElement('footer');
    const navItems = document.createElement('ul');

    for (i=1; i<=3; i++){
        let navItem = document.createElement('li');
        navItem.textContent = `nav item ${i}`
        navItems.appendChild(navItem);
    }

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = "Get Some Food";
    const heroSubTitle = document.createElement('h3');
    heroSubTitle.textContent = "Best food in Dallas"

    for (i=1; i<=4; i++){
        let foodImg = document.createElement('img');
        foodImg.src = "";
        foodImg.alt = "";

        let foodTitle = document.createElement('p');
        foodTitle.textContent = `Food item ${i}`
        
        document.createElement('div').appendChild(foodImg);
    }

    header.appendChild(navItems);
    hero.appendChild(heroTitle);
    hero.appendChild(heroSubTitle);

    content.appendChild(header);
    content.appendChild(hero);
    content.appendChild(foodSection);
    content.appendChild(footer);


}

export default initialPageLoad;