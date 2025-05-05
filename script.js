function getProfileData(username)
{
return fetch(`https://api.github.com/users/${username}`).then((row)=>{
    return row.json();
});
}
function getRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then((row)=>{
        return row.json();
    });
}
let card=document.querySelector(".card");
function showData(details)
{
console.log(details);

    let data=`<div class="flex flex-col md:flex-row gap-6">
          <!-- Avatar -->
          <div class="flex-shrink-0">
            <img
              src="${details.avatar_url}"
              alt="Avatar"
              class="w-36 h-36 rounded-full border-4 border-white dark:border-gray-900 shadow-md object-cover"
            />
          </div>

          <!-- Info -->
          <div class="flex-1 space-y-3">
            <div>
              <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">${details.name}</h2>
              <p class="text-gray-500 dark:text-gray-400">@${details.login}</p>
            </div>

            <p class="text-gray-600 dark:text-gray-300 text-sm">
                ${details.bio}
            </p>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300 pt-2">
              <div><strong>Repos:</strong> ${details.public_repos}</div>
              <div><strong>Followers:</strong> ${details.followers}</div>
              <div><strong>Following:</strong> ${details.following}</div>
              <div><strong>Location:</strong> ${details.location}</div>
              <div><strong>Company:</strong>${details.company}</div>
              <div><strong>Website:</strong> <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">${details.login}</a></div>
              <div><strong>GitHub:</strong> <a href="${details.html_url}" class="text-blue-600 dark:text-blue-400 hover:underline">${details.login}</a></div>
            </div>
          </div>
        </div>
      </div>`;
     card.innerHTML=data;   
}

let usernameinp=document.querySelector(".usernameinp");
let searchBtn=document.querySelector(".search");

searchBtn.addEventListener('click',function(event){
    event.preventDefault();
    let username=usernameinp.value.trim();
    if(username.length>0){
        getProfileData(username).then(function(data){
            showData(data);
        });   
    }else{
        alert("Enter vaild username!");
    }

    
   

})

 