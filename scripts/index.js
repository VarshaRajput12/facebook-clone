const dummy_post = document.querySelector(".dummy_posts");

async function api() {
  let data1 = await fetch(
    "https://fbbackendposts-production-5f33.up.railway.app/fb/getAllposts",{
      method: "POST"
    }
  );
  let data = await data1.json();

  for (let i = 0; i < data.length; i++) {
    
    let currentTime = new Date();
    let showTime;
    let postedTime = new Date(data[i].time);
    let timeDiff = currentTime - postedTime;
    timeDiff = Math.round(timeDiff/1000);

    if(timeDiff < 60){
      showTime = timeDiff + ' s';
    }
    else if(timeDiff >= 60 && timeDiff < 3600){
      timeDiff = Math.round(timeDiff/60);
      showTime = timeDiff + ' m';
    }
    else if(timeDiff >= 3600 && timeDiff < (3600*24)){
      timeDiff = Math.round(timeDiff/3600);
      showTime = timeDiff + ' h';
    }
    else if(timeDiff >= (3600*24) && timeDiff < (3600*24*30)){
      timeDiff = Math.round(timeDiff/(3600*24));
      showTime = timeDiff + ' d';
    }
    else if(timeDiff >= (3600*24*30) && timeDiff < (3600*24*30*12)){
      timeDiff = Math.round(timeDiff/(3600*24*30));
      showTime = timeDiff + ' m';
    }


    dummy_post.innerHTML = `<div class="dummy_post">
      <div class="top">
        <img src="${data[i].userImage}" alt="" class="profile bg_img hover" width="45px" />
        <div class="name">
          <p class="pointer">${data[i].userNamePost}</p>
          <span class="pointer"
            >${showTime}.<i class="fa-solid fa-earth-americas"></i
          ></span>
        </div>

        <div class="icons">
          <i class="fa-solid fa-ellipsis hover"></i>
         
        </div>
      </div>
      <p id="post-caption">${data[i].caption}</p>
      <div class="image">
        <img src="${data[i].postImage}" alt="post" />
      </div>
      <div class="bottom">
        <div class="likes">
          <span class="pointer like-count" id="like-count" id="like-count">${data[i].like} Likes</span>
        </div>
        <div class="commets">
          <p class="pointer comment commentcount">${data[i].comment} Comments</p>
        </div>
      </div>
      <div class="reaction">
        <span class="like1"><p class="hover "><i class="fa-regular icon  fa-thumbs-up"></i> Like</p></span>
         <p class="hover comment_btn"><i class="fa-regular fa-message"></i> Comment</p></span>
        <p class="hover"><i class="fa-solid fa-share"></i> Share</p>
    </div>
    <div class="commentSection">
          <div class="Profile_area">
            <img
              src="/images/profile2.png"
              alt=""
              class="hover userimage"
              width="45px"
            />
            <div class="input_field flex ">
              <input type="text"  class="usercomment"placeholder="Write a comment..." />
              <i class="fa-brands fa-rocketchat pointer"></i>
              <i class="fa-regular fa-face-smile pointer"></i>
              <i class="fa-solid fa-camera-retro pointer"></i>
              <i class="fa-regular fa-image pointer"></i>
              <button class="pointer comment-add">Add</button>
            </div>
            
            
          </div>
          <ul class="commentlist">
          
          </ul>
          </div>
          </div>
       
`+ dummy_post.innerHTML;
    // dummy_post.insertAdjacentHTML("afterbegin", post)
  }
  // ===================================add comment
  let commentCount = document.querySelectorAll(".commentcount");
  let addComment = document.querySelectorAll(".comment_btn");
  let commentSection = document.querySelectorAll(".commentSection");
  let addBtn = document.querySelectorAll(".comment-add");
  let userComment = document.querySelectorAll(".usercomment");
  let commentlist = document.querySelectorAll(".commentlist");

  for (let i = 0; i < addComment.length; i++) {
    addComment[i].addEventListener("click", () => {
      if (commentSection[i].style.display == "block") {
        commentSection[i].style.display = "none";
      } else {
        commentSection[i].style.display = "block";
      }
    });
    

    addBtn[i].addEventListener("click", () => {
      
      if (userComment[i].value.length > 0) {
        
        commentlist[i].innerHTML += `<li>
        
    <span class="comment-person">
    <img src="/images/profile2.png" alt="" class="hover userimage commenti" width="30px"/>
      <span class="comment_text">${userComment[i].value}</span>
    </span>
    </li>`;
    imageRender()
        commentCount[i].innerHTML = `<span style="margin-left:-50px"class="commentcount"> <p class="pointer comment">${++data[data.length-1-i].comment}Comments</p></span>`;
        userComment[i].value = "";
        
      }
    });
  }

  //=========================for displaying user profile=============
  function imageRender(){
  let userdata = [
    {
      email: "santosh@gmail.com",
      profilePic:
        "https://images.unsplash.com/photo-1554311884-415bfda22b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60-1.fna.fbcdn.net/v/t1.6435-9/180555609_835950667306477_8372471323999180307_n.jpg?stp=c0.232.576.576a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=X_lWHKpsJCcAX_d_x_a&_nc_ht=scontent.fdbd1-1.fna&oh=00_AfDveHHlzXU6eM7ISWaR-KmFLTWleTld-Ub-47Q-c3hpkQ&oe=63CBA2B8://scontent.fdbd1-2.fna.fbcdn.net/v/t39.30808-6/272761181_1011609503073925_5723654845178925652_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-uIbQyVbT9sAX_QROVi&_nc_oc=AQlYysLgwkhD0CQIhatqnkjw07-Hwzoiw8lgu7Fu9gd2X8quntvLbRivNs15eXOELWSEioi1fVSFm0i3F8uNTPZJ&tn=BOMrDsLuOSui51gf&_nc_ht=scontent.fdbd1-2.fna&oh=00_AfAMStQAwDcpfRmdoR3PEwByjcYjYQosva6lefqBCh0F8Q&oe=63A8D1B0",
    },
    {
      email: "varsharajput353@gmail.com",
      profilePic:
        "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      email: "ss0149952@gmail.com",
      profilePic:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      email: "rohanpalankar8@gmail.com",
      profilePic:
        "https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/58460714_2287391554832092_8244223977036185600_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_H-Wll3YYZsAX_wV8nc&_nc_oc=AQlOjK0ZniGbopsnq7JZYOg1w9GN1PQB7BU7UsxJlvcX2Un_F7sRyu7W5y1Fzwzc6M8&_nc_ht=scontent.fblr19-1.fna&oh=00_AfCeZYKKBuYs6TYhmQ0cQzxSlEncwD2vKJQmCPXq_1T3uQ&oe=63D0D104",
    },
  ];

  
  let Email = localStorage.getItem("userEmail");

  let userimage = document.querySelectorAll(".userimage");
   
  for (let k = 0; k < userdata.length; k++) {
    for (let i = 0; i < userimage.length; i++) {
      if (userdata[k].email == Email) {
        userimage[i].src = userdata[k].profilePic;
      }
    }
  }
}
imageRender()
  // ====================this is for likeing post

  let likebtn = document.querySelectorAll(".like1");
  let icon = document.querySelectorAll(".icon");
  let likeCount = document.querySelectorAll(".like-count");

  console.log(data[0].like)
  for (let j = 0; j < likebtn.length; j++) {
    likebtn[j].addEventListener("click", () => {
      
      if (likebtn[j].style.color != "blue"){
        likeCount[j].innerHTML = `<span style="margin-left:-20px" class="pointer like-count" id="like-count">
        ${Number(data[data.length-1-j].like) + 1} Likes</span>`;

        likebtn[j].style.color = "blue";
        icon[j].style.color = "blue";
      }
      else {
        likeCount[j].innerHTML = `<span style="margin-left:-20px" class="pointer like-count" id="like-count">
        ${Number(data[data.length-1-j].like)} Likes</span>`;

        likebtn[j].style.color = "black";
        icon[j].style.color = "black";
      }
      
    });
  }
}
api();

const create_new_group_popUp = document.querySelector("#create_new_group");
const plus_btn = document.querySelector("#plus_btn");
const New_message = document.querySelector("#New_message");

plus_btn.addEventListener("click", () => {
  if (create_new_group_popUp.style.display == "block") {
    create_new_group_popUp.style.display = "none";
  } else {
    create_new_group_popUp.style.display = "block";
  }
});

New_message.addEventListener("click", () => {
  if (create_new_group_popUp.style.display == "block") {
    create_new_group_popUp.style.display = "none";
  }
});

// for profile page

const profile_page = document.querySelector("#profile_page");

profile_page.addEventListener("click", () => {
  window.location.href = "/pages/profile.html";
});

// fb_logo to home page

const fb_logo = document.querySelector("#fb_logo");

fb_logo.addEventListener("click", () => {
  window.location.href = "/pages/header.html";
});
const friend = document.querySelector("#find-friend");
friend.addEventListener("click", () => {
  window.location.href = "/pages/friends.html";
});
const home = document.querySelector("#home");

home.addEventListener("click", () => {
  window.location.href = "/pages/header.html";
});
// console.log(home.innerHTML)
const friendIcon = document.querySelector("#friend");

friendIcon.addEventListener("click", () => {
  window.location.href = "/pages/friends.html";
});

// //=========================for displaying user profile=============

// let userdata = [
//   {
//     email: "santosh@gmail.com",
//     profilePic: "/images/santosh-mehta-profilepic.jpg",
//   },
//   {
//     email: "varsharajput353@gmail.com",
//     profilePic: "/images/varsha-profilepic.jpg",
//   },
//   { email: "ss0149952@gmail.com", profilePic: "/images/sonu-profilepic.jpg" },
//   {
//     email: "rohanpalankar8@gmail.com",
//     profilePic: "/images/profile-pic-rohan.jpg",
//   },
// ];

// let Email = localStorage.getItem("userEmail");

// let userimage = document.querySelectorAll(".userimage");

// for (let k = 0; k < userdata.length; k++) {
//   for (let i = 0; i < userimage.length; i++) {
//     if (userdata[k].email == Email) {
//       userimage[i].src = userdata[k].profilePic;
//     }
//   }
// }

// --------------comment_btn-------------

// const add_comment = document.querySelector("#comment_btn");


