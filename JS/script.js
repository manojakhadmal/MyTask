// Ajax call for Profile Picture
if (sessionStorage.getItem("userdata")) {
  let storedArray = JSON.parse(sessionStorage.getItem("userdata"));

  $.ajax({
    type: "GET",
    url: `http://localhost:3000/users/${storedArray.id}`,
    dataType: "json",
    async: true,
    success: function (responseData) {
      console.log("From 1st Call");
      let profile = "";
      let name = "";

      profile += `
    
           <img class="img-fluid" src="${responseData.profileUrl}" />
                     
            `;
      name += `
        <b>${responseData.name}</b>
        `;

      $(".profile-images").append(profile);
      $(".profile-name").append(name.toUpperCase());
    },
    error: function () {
      console.log("not able to access the data");
    },
  });
}
var count = 0;
let ajax1 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/music",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log("From 1st Call");
    let audios = "";
    $.each(responseData, function (i, v) {
      audios += `
              
  
              <div id="${v.id}" value="${v.language}" class="resource-box">
               <div class="song-image">
               <img class="img-fluid" src=${v.img} />
               </div>
               <div class="song-title">
                    <strong><span>${v.name}</span></strong>
                    <p>${v.id}</p>
                </div>  
                </div>
                
                `;
      count = count + 1;
      console.log(count);
      if (count == 5) {
        $(
          `<div class="carousel-item active"><div class="inside-main-content">${audios}</div>  </div>`
        ).appendTo(".treading-carousel");
        audios = "";
      } else if (count % 5 == 0 && count != 5) {
        $(
          `<div class="carousel-item "><div class="inside-main-content">${audios}</div>  </div>`
        ).appendTo(".treading-carousel");

        audios = "";
      }
    });
    console.log("remaining");
    // console.log(audios);
    if (audios) {
      $(
        `<div class="carousel-item"><div class="inside-main-content">${audios}</div>  </div>`
      ).appendTo(".treading-carousel");
    }
    // $(".carousel-inner").append(audios)
  },
  error: function () {
    console.log("not able to access the data");
  },
});

// ---------------      This  API ajax2 is for loading Artists    --------------------------
var cnt = 0;
let ajax2 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/artists",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log("From 2nd Call");
    let artists = "";
    $.each(responseData, function (i, v) {
      console.log("v", v);
      artists += `
        <figure class="artist-box" >
        <img class="artist-image"  src="${v.ProfilePicture}" alt="">
        <figcaption id="${v.ArtistId}" class="artist-name">${v.Artistname}</figcaption>
      </figure>
              `;
      cnt = cnt + 1;
      console.log(cnt);
      if (cnt == 4) {
        console.log("if artiests" + artists);
        $(
          `<div class="carousel-item active"><div id="artists-section">${artists}</div>  </div>`
        ).appendTo(".carousel-artists");
        artists = "";
      } else if (cnt % 4 == 0 && cnt != 4) {
        $(
          `<div class="carousel-item"><div id="artists-section">${artists}</div>  </div>`
        ).appendTo(".carousel-artists");

        artists = "";
      }
    });
    // console.log('remaining');
    //console.log(artists);
    if (artists) {
      $(
        `<div class="carousel-item"><div id="artists-section">${artists}</div>  </div>`
      ).appendTo(".carousel-artists");
    }

    //$("#artists-section").append(artists);
  },
  error: function () {
    console.log("not able to access the data");
  },
});

// ---------------      This  API ajax3 is for loading Podcasts    --------------------------
var cnt1 = 0;
let ajax3 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/music?category=podcast",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log("From 3rd Call");
    let podcasts = "";
    $.each(responseData, function (i, v) {
      //console.log("data",responseData)
      podcasts += `
        <div id="${v.id}" value="${v.language}" class="resource-box">
        <div class="song-image">
        <img class="img-fluid" src=${v.img} />
        </div>
        <div class="song-title">
             <strong><span>${v.name}</span></strong>
             <p>${v.id}</p>
         </div>  
         </div>
              `;
      cnt1 = cnt1 + 1;
      console.log(cnt1);
      if (cnt1 == 5) {
        console.log("podcaste" + podcasts);
        $(
          `<div class="carousel-item active"><div id="Podcasts-section">${podcasts}</div></div>`
        ).appendTo(".podcasts");
        podcasts = "";
      } else if (cnt1 % 5 == 0 && cnt1 != 5) {
        $(
          `<div class="carousel-item "><div id="Podcasts-section">${podcasts}</div></div>`
        ).appendTo(".podcasts");

        podcasts = "";
      }
    });
    console.log("remaining");
    console.log(podcasts);
    if (podcasts) {
      $(
        `<div class="carousel-item"><div id="Podcasts-section">${podcasts}</div></div>`
      ).appendTo(".podcasts");
    }
    //$("#Podcasts-section").append(podcasts);
  },
  error: function () {
    console.log("not able to access the data");
  },
});

// ---------------      This  API ajax2 is for New Release    --------------------------
var newReleaseCount = 0;
let ajax4 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/newReleases",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log(responseData);
    console.log("From 3rd Call");
    let newRelease = "";
    $.each(responseData, function (i, v) {
      //console.log("new release",v);
      newRelease += `
        <div id="${v.id}" value="${v.language}" class="resource-box">
        <div class="song-image">
        <img class="img-fluid" src=${v.img} />
        </div>
        <div class="song-title">
             <strong><span>${v.name}</span></strong>
             <p>${v.id}</p>
         </div>  
         </div>
              `;
      newReleaseCount = newReleaseCount + 1;
      // console.log(newReleaseCount);
      if (newReleaseCount == 5) {
        //console.log("inside new release"+newRelease);
        console.log("inside if");
        $(
          `<div class="carousel-item active"><div id="newRelease-section">${newRelease}</div></div>`
        ).appendTo(".carousel-releases");
        newRelease = "";
      } else if (newReleaseCount % 5 == 0 && newReleaseCount != 5) {
        $(
          `<div class="carousel-item "><div id="newRelease-section">${newRelease}</div></div>`
        ).appendTo(".carousel-releases");

        newRelease = "";
      }
    });
    // console.log('remaining');
    //console.log(newRelease);
    if (newRelease) {
      $(
        `<div class="carousel-item"><div id="newRelease-section">${newRelease}</div></div>`
      ).appendTo(".carousel-releases");
    }

    // $("#newRelease-section").append(newRelease);
  },
  error: function () {
    console.log("not able to access the data");
  },
});
//--------------------the ajax 5-----------------------------
let ajax5 = $.ajax({
  type: "GET",
  url:
    "http://localhost:3000/favourite?userid=" +
    sessionStorage.getItem("userId"),
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log("From 3rd Call");
    let favourite = "";

    $.each(responseData, function (i, v) {
      favourite += `
      <div id="${v.id}" value="${v.language}" class="resource-box">
      <div class="song-image">
      <img class="img-fluid" src=${v.img} />
      </div>
      <div class="song-title">
           <strong><span>${v.name}</span></strong>
           <p>${v.id}</p>
       </div>  
       </div>
            `;
    });

    if (favourite === "") {
      $("#favourites").hide();
    }
    $(".favourite").append(favourite);
  },
  error: function () {
    console.log("not able to access the data");
  },
});

// -----------------------     $(document).ready()  is for every document   ------------------------------
$(document).ready(function () {
  console.log("Path name is " + window.location.pathname);
  console.log("Path name is href " + window.location.href);

  // -----------------------------------------------language-starts-------------------------------------------
  $(".dropdown-menu a").on("click", function () {
    var a_href = $(this).attr("id");
    console.log(a_href);

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/music?language=" + a_href,

      dataType: "json",
      async: true,
      success: function (responseData) {
        console.log(responseData);

        let audios = "";
        $.each(responseData, function (i, v) {
          console.log(v.url);
          audios += `
            
            <div id="${v.id}" value="${v.language}"class="resource-box">
         <div class="song-image">
         <img class="img-fluid" src=${v.img} />
         </div>
         <div class="song-title">
              <strong><span>${v.name}</span></strong>
              <p>${v.id}</p>
          </div>  
          </div> 
            `;
        });
        $("p:first").text(a_href.toUpperCase() + " SONGS");
        $("p.library-sub-title1:not(:first)").remove();
        $("#newRelease-section,#Podcasts-section,#artists-section").remove();
        $(".inside-main-content").empty();
        $(".inside-main-content").append(audios);
      },
      error: function () {
        console.log("not able to access the data");
      },
    });
  });

  // -----------------------------------------------language-Ends-------------------------------------------

  // -----------------------     $("body").on('load'...)  is only for HOME PAGE   --------------

  $("body").on("load", function () {
    if (window.location.href.indexOf("Home.html") > -1) {
      $.when(ajax1).done((data1) => {
        console.log("AJAX-1 Is Loaded : ", data1);

        $.when(ajax2).done((data2) => {
          console.log("AJAX-2 Is Loaded : ", data2);
        });

        $.when(ajax3).done((data3) => {
          console.log("AJAX-3 Is Loaded : ", data3);
        });

        $.when(ajax4).done((data4) => {
          console.log("AJAX-4 Is Loaded : ", data4);
        });
        $.when(ajax5).done((data5) => {
          console.log("AJAX-5 Is Loaded : ", data5);
        });
      });

      console.log(window.location.href.indexOf("Home.html"));
      console.log("It works");
    }

    //----------------    After clicking on artist's name    -----------------

    $("body").on("click", ".artist-name", function () {
      alert("Clicked");
      console.log("Clicked artist image");
      let name = $(this).attr("id");
      localStorage.setItem("item", name);
      window.location.href = "./Artists.html?artistName=" + name;
    });
  });
  //  ------------------------    $("body").on('load'...) ENDS HERE     -----------------

  //  ------------------------    Artist Page     -----------------

  if (window.location.href.indexOf("Artists.html") > -1) {
    alert("in artists");
    const qstring = window.location.search;
    const urlParams = new URLSearchParams(qstring);
    const artistName = urlParams.get("artistName");
    console.log("This is artist!!!!!!!!!!!!" + artistName);

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/music?artist=" + artistName,
      dataType: "json",
      async: true,
      success: function (responseData) {
        console.log("From 4th Call");
        console.log("Artist Particular", responseData);
        let Particular_artist = "";
        $.each(responseData, function (i, v) {
          Particular_artist += `
          <div id="${v.id}" value="${v.language}"class="resource-box">
          <div class="song-image">
          <img class="img-fluid" src=${v.img} />
          </div>
          <div class="song-title">
               <strong><span>${v.name}</span></strong>
               <p>${v.id}</p>
           </div>  
           </div>
                `;
        });

        $("#artists-page").append(Particular_artist);
      },
      error: function () {
        console.log("not able to access the data");
      },
    });
  }

  //  ------------------------    Artist Page ENDS HERE     -----------------

  //--------------------------- After Clicked On Song ----------------------------

  $("body").on("click", ".resource-box", function () {
    if (sessionStorage.getItem("token") === null) {
      window.location.href = "./login.html";
    } else {
      let songurl = $(this).attr("id");
      let songLang = $(this).attr("value");
      console.log(songLang);
      window.location.href =
        "./temp.html?id=" + songurl + "&language=" + songLang;
    }
  });

  // Search Song Functionality
  $("#searchkey").on("keyup", function () {
    let key = $(this).val().toLowerCase();
    console.log(key);

    $(".resource-box").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(key) > -1);
    });
  });

  //  ------------------------    temp PAGE Starts here     -----------------

  if (window.location.href.indexOf("temp.html") > -1) {
    sessionStorage.removeItem("song");
    let currentAudioUrl;
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get("id");
    let language = searchParams.get("language");
    console.log(language);
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/music?language=" + language,
      dataType: "json",
      async: true,
      success: function (responseData) {
        console.log("First ResponseData 0 Is : ", responseData[0]);

        let song = "";
        let songNameTop = "";
        let songNameAudiobar = "";
        let songImage = "";
        let bottomSongImage = "";
        let url;

        let songData;
        let counter = 1;
        $.each(responseData, function (i, v) {
          console.log(responseData);
          if (id == v.id) {
            songData = v;
            sessionStorage.setItem("song", JSON.stringify(v));
            url = v.url;
          } else {
            song += `
          <div id="${v.id}" value="${v.language}"class="resource-box">
          <div class="song-image">
          <img class="img-fluid" src=${v.img} />
          </div>
          <div class="song-title">
               <strong><span>${v.name}</span></strong>
               <p>${v.id}</p>
           </div>  
           </div> 
              `;
          }

          counter += 1;
          if (counter == 5) {
            //console.log("inside new release"+newRelease);
            console.log("inside if");
            $(
              `<div class="carousel-item active"><div id="display-for-song-playlist">${song}</div></div>`
            ).appendTo(".song-carousel");
            song = "";
          } else if (counter % 5 == 0 && counter != 5) {
            $(
              `<div class="carousel-item "><div id="display-for-song-playlist">${song}</div></div>`
            ).appendTo(".song-carousel");

            song = "";
          }
        });
        if (song) {
          $(
            `<div class="carousel-item"><div id="display-for-song-playlist">${song}</div></div>`
          ).appendTo(".song-carousel");
        }

        songNameTop += `<h3>${songData.name}</h3>
        <h5>${songData.artist}</h5>`;

        songNameAudiobar += `<h5>${songData.name}</h5>
        <h6>${songData.artist}</h6>`;

        bottomSongImage += `<img class="img-fluid" src="${songData.img}"></img>`;
        songImage += `<img id="songPage-image" src="${songData.img}"></img>`;

        console.log("responseData Is : ", responseData);
        console.log("songNameTop Is : " + songNameTop);
        console.log("songNameAudiobar Is : " + songNameAudiobar);

        $(".songdetailTop").append(songNameTop);
        $("#songPlayer-song-title").append(songNameAudiobar);

        $("#display-for-song-playlist").empty();

        $("#display-for-song-playlist").append(song);
        $("#songPage-bottom-corner-image").empty();
        $("#songPage-bottom-corner-image").append(bottomSongImage);
        $(".songPage-image-div").empty();
        $(".songPage-image-div").append(songImage);
        // console.log(url);
        let myaudio = new Audio(url);

        console.log("My audio is : ", myaudio);

        // This is for play button on top in green colour
        $("body").on("click", ".playButton", function () {
          myaudio.play();
          console.log("My audio from inside is : ", myaudio);

          $("#playbtn").hide();
          $("#pausebtn").show();
        });
        //-------------------------------

        // This is for play button on audio bar
        $("body").on("click", "#playbtn", function () {
          myaudio.play();

          $("#playbtn").hide();
          $("#pausebtn").show();
        });

        $("body").on("click", "#pausebtn", function () {
          console.log("Current Time Is " + myaudio.currentTime);
          myaudio.pause();
          $("#playbtn").show();
          $("#pausebtn").hide();
        });
        $("body").on("click", "#repeatbtn", function () {
          console.log("Current Time Is " + myaudio.currentTime);

          myaudio.currentTime = 0;
          myaudio.play();
        });
        // This is for fast-forward and fast-backward
        $("body").on("click", "#fastbackwarddbtn", function () {
          console.log("Current Time Is " + myaudio.currentTime);

          myaudio.currentTime = myaudio.currentTime - 10;
          console.log(
            "Current Time After Backwarding Is " + myaudio.currentTime
          );
        });
        $("body").on("click", "#fastforwardbtn", function () {
          console.log("Current Time Is " + myaudio.currentTime);
          myaudio.currentTime = myaudio.currentTime + 10;
          console.log(
            "Current Time After Forwarding Is " + myaudio.currentTime
          );
        });
        // Fast forward and backward ends

        // This is for mute unmute
        $("body").on("click", ".volumebtn", function () {
          if (myaudio.muted === false) {
            myaudio.muted = true;
          } else {
            myaudio.muted = false;
          }
          $("#volume-up-button").toggle();
          $("#volume-mute-button").toggle();
        });

        //  ----   Mute Unmute Ends   ------
        //--------------Progresbar functionalities--------------//

        $(myaudio).on("timeupdate", function (event) {
          var currentTime = myaudio.currentTime;
          var duration = myaudio.duration;
          var progress_time = (currentTime / duration) * 100;

          $(".progress").css("width", `${progress_time}%`);

          var min_duration = Math.floor(duration / 60);
          var sec_duration = Math.floor(duration % 60);

          if (duration) {
            $("#duration").text(`${min_duration}:${sec_duration}`);
          }

          //Dynamic currentTime

          var newcurrentmin = Math.floor(currentTime / 60);
          var newcurrentsec = Math.floor(currentTime % 60);
          if (newcurrentsec < 10) {
            newcurrentsec = `0${newcurrentsec}`;
          }
          $("#current_time").text(`${newcurrentmin}:${newcurrentsec}`);
        });
        //------------progress bar click function------//
        $("#progress_div").on("click", function (event) {
          var offset = event.offsetX;

          var clientWidth = $(progress_div).innerWidth();

          var duration = audio.duration;
          var move_progress = (offset / clientWidth) * duration;
          audio.currentTime = move_progress;
        });
      },
      error: function () {
        console.log("not able to access the data");
      },
    });

    //---------------------------------audio_functionality_end_------------------//
  }

  $("body").bind("beforeunload", function () {});
  //  ------------------------    temp Page ENDS HERE     -----------------

  //Log In

  $("#loginbtn").click(function () {
    let id = $("#userId").val();
    let password = $("#userPassword").val();

    let flag = true;

    // Validation For UserID

    var re_userId = /(?=[a-zA-Z0-9-]{5,25}$)^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;

    var user = re_userId.test(id);

    if (user) {
      $("#userId").removeClass("invalid").addClass("valid");
      $("#username").css({ display: "none" });

      // Validation For Password

      var re_password =
        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

      var user = re_password.test(password);

      if (user && password.length > 4) {
        $("#userPassword").removeClass("invalid").addClass("valid");
        $("#password").css({ display: "none" });
      } else {
        flag = false;
        $("#userPassword").removeClass("valid").addClass("invalid");
        $("#password").css({ display: "block" });
        $("#password").css({ color: "red" });
      }
    } else {
      flag = false;
      $("#userId").removeClass("valid").addClass("invalid");
      $("#username").css({ display: "block" });
      $("#username").css({ color: "red" });
    }

    if (id === "") {
      $("#userId").removeClass("valid").addClass("invalid");
      $("#userId").css({ display: "block" });
      // $("#userId").css({"color":"red"})
    } else if (password === "") {
      $("#userPassword").removeClass("valid").addClass("invalid");
      $("#userPassword").css({ display: "block" });
      // $("#userPassword").css({"color":"red"})
    }
    if (flag === true) {
      $.ajax({
        type: "GET",
        url: `http://localhost:3000/users?q=${id}`,
        dataType: "json",
        async: true,
        success: function (data) {
          if (password == data[0].password) {
            //if (password == data.password) {
            console.log("Password is " + data[0].password);

            sessionStorage.setItem("userdata", JSON.stringify(data[0]));

            let storedArray = JSON.parse(sessionStorage.getItem("userdata"));

            //This below line generates a random token after user is logged in
            token = Math.random().toString(36).substr(2, 8);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", data[0].id);

            console.log("Log In");

            window.location.replace("./password.html");
          } else {
            console.log("Password is " + data.password);
            alert("Wrong Pass");
            console.log("!!! Wrong Password");
          }
        },
        error: function () {
          alert("Invalid user");
          console.log("!!! User Id Wrong And Pass!!!");
        },
      });
    }
  });

  //Regstration :

  $("#registrationbtn").click(function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const userId = $("#userId").val();
    const password = $("#userPassword").val();
    const confirmPassword = $("#confirmPassword").val();

    let flag = true;

    if (name === "") {
      flag = false;
      $("#name").removeClass("valid").addClass("invalid");
      $("#name").css({ display: "block" });
      $("#fname").css({ display: "block" });
      $("#fname").css({ color: "red" });
    } else if (email === "") {
      flag = false;
      $("#email").removeClass("valid").addClass("invalid");
      $("#email").css({ display: "block" });
      $("#mail").css({ display: "block" });
      $("#mail").css({ color: "red" });
    } else if (userId === "") {
      flag = false;
      $("#userId").removeClass("valid").addClass("invalid");
      $("#userId").css({ display: "block" });
      $("#username").css({ display: "block" });
      $("#username").css({ color: "red" });
    } else if (password === "") {
      flag = false;
      $("#userPassword").removeClass("valid").addClass("invalid");
      $("#userPassword").css({ display: "block" });
      $("#password").css({ display: "block" });
      $("#password").css({ color: "red" });
    } else if (confirmPassword === "") {
      flag = false;
      $("#confirmPassword").removeClass("valid").addClass("invalid");
      $("#confirmPassword").css({ display: "block" });
      // $("#confirmPassword").css({"color":"red"})
    } else {
      // Validation For Name

      var re_name = /^[a-zA-Z ]+$/;
      var user = re_name.test(name);

      if (user && name.length > 2) {
        $("#name").removeClass("invalid").addClass("valid");
        $("#fname").css({ display: "none" });

        // Validation For Email
        var re_email =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re_email.test(email);

        if (is_email) {
          $("#email").removeClass("invalid").addClass("valid");
          $("#mail").css({ display: "none" });

          // Validation For UserID

          var re_userId =
            /(?=[a-zA-Z0-9-]{5,25}$)^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;

          var user = re_userId.test(userId);

          if (user) {
            $("#userId").removeClass("invalid").addClass("valid");
            $("#username").css({ display: "none" });

            // Validation For Password

            var re_password =
              /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
            var user = re_password.test(password);

            if (user && password.length > 4) {
              $("#userPassword").removeClass("invalid").addClass("valid");
              $("#password").css({ display: "none" });
            } else {
              flag = false;
              $("#userPassword").removeClass("valid").addClass("invalid");
              $("#password").css({ display: "block" });
              $("#password").css({ color: "red" });
            }
          } else {
            flag = false;
            $("#userId").removeClass("valid").addClass("invalid");
            $("#username").css({ display: "block" });
            $("#username").css({ color: "red" });
          }
        } else {
          flag = false;
          $("#email").removeClass("valid").addClass("invalid");
          $("#mail").css({ display: "block" });
          $("#mail").css({ color: "red" });
        }
      } else {
        flag = false;
        $("#name").removeClass("valid").addClass("invalid");
        $("#fname").css({ display: "block" });
        $("#fname").css({ color: "red" });
      }
    }

    if (flag === true) {
      if (password === confirmPassword) {
        alert("In Ajax :  " + userId);
        jQuery.ajax({
          url: "http://localhost:3000/users",
          type: "POST",
          data: {
            id: userId,
            password: `${password}`,
            name: `${name}`,
            email: `${email}`,
          },
          dataType: "json",
          beforeSend: function (x) {
            if (x && x.overrideMimeType) {
              x.overrideMimeType("application/j-son;charset=UTF-8");
            }
          },
          success: function (result) {
            alert("Regristration successfully");
          },
        });
      } else {
        alert("Password Not Match");
      }
    }
  });

  // For validation
  Fname: $("#name").on("input", function () {
    var input = $(this);
    var is_name = input.val();
    var re = /^[a-zA-Z ]+$/;
    var user = re.test(input.val());
    if (user && is_name.length > 2) {
      input.removeClass("invalid").addClass("valid");
      $("#fname").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");
      $("#fname").css({ display: "block" });
      $("#fname").css({ color: "red" });
    }
  });

  //Email

  $("#email").on("input", function () {
    var input = $(this);
    var re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email = re.test(input.val());
    console.log(is_email);
    if (is_email) {
      input.removeClass("invalid").addClass("valid");
      $("#mail").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");
      $("#mail").css({ display: "block" });
      $("#mail").css({ color: "red" });
    }
  });

  //UserId
  $("#userId").on("input", function () {
    var input = $(this);
    var re = /(?=[a-zA-Z0-9-]{5,25}$)^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;
    var re1 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var user = re.test(input.val());
    var user1 = re1.test(input.val());
    if (user || user1) {
      input.removeClass("invalid").addClass("valid");
      $("#username").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");
      $("#username").css({ display: "block" });
      $("#username").css({ color: "red" });
    }
  });

  // Password :
  $("#userPassword").on("input", function () {
    var input = $(this);
    var is_pass = input.val();
    var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    var user = re.test(input.val());
    if (user && is_pass.length > 4) {
      input.removeClass("invalid").addClass("valid");
      $("#password").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");

      $("#password").css({ display: "block" });
      $("#password").css({ color: "red" });
    }

    // NewPassword :

    $("#newPassword").on("input", function () {
      var input = $(this);
      var is_pass = input.val();
      var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
      var user = re.test(input.val());
      if (user && is_pass.length > 4) {
        input.removeClass("invalid").addClass("valid");
        $("#password1").css({ display: "none" });
      } else {
        input.removeClass("valid").addClass("invalid");

        $("#password1").css({ display: "block" });
        $("#password1").css({ color: "red" });
      }
    });
  });
  $("body").trigger("load");

  // Search Song Functionality

  $("#searchkey").on("keyup", function () {
    let key = $(this).val().toLowerCase();
    console.log(key);

    $(".resource-box").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(key) > -1);
    });
  });

  //audio functionalities end---//

  // User Profile Validations--------------------------------------//

  //change password :

  $("#editPassbtn").on("click", function () {
    var storedArray = JSON.parse(sessionStorage.getItem("userdata"));

    const userId = storedArray.id;
    const oldpass = $("#userPassword").val();
    const newpass = $("#newPassword").val();
    const confirmpass = $("#confirmPass").val();

    let flag = true;

    if (oldpass === "") {
      flag = false;
      $("#userPassword").removeClass("valid").addClass("invalid");
      $("#userPassword").css({ display: "block" });
      $("#password").css({ display: "block" });
      $("#password").css({ color: "red" });
    } else if (newpass === "") {
      flag = false;
      $("#newPassword").removeClass("valid").addClass("invalid");
      $("#newPassword").css({ display: "block" });
      $("#password1").css({ display: "block" });
      $("#password1").css({ color: "red" });
    }
    else if (confirmpass === "") {
      alert("Enter Confirm Password")
      flag = false;
      $("#confirmpass").removeClass("valid").addClass("invalid");
      $("#confirmpass").css({ display: "block" });
     }
    else
    {
        
      var re_password =
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
      var user = re_password.test(newpass);

    if (user && newpass.length > 4) {
      $("#newPassword").removeClass("invalid").addClass("valid");
      $("#password1").css({ display: "none" });
    } else {
      flag = false;
      $("#newPassword").removeClass("valid").addClass("invalid");
      $("#password1").css({ display: "block" });
      $("#password1").css({ color: "red" });
    }


    }

    // Logic for change Password
    if(flag === true)
    {
    if (newpass === confirmpass) {
      if (oldpass === storedArray.password) {
        jQuery.ajax({
          url: `http://localhost:3000/users/${userId}`,
          type: "PUT",
          data: {
            id: storedArray.id,
            password: `${newpass}`,
            name: `${storedArray.name}`,
            email: `${storedArray.email}`,
            profileUrl: `${storedArray.profileUrl}`,
          },
          dataType: "json",
          beforeSend: function (x) {
            if (x && x.overrideMimeType) {
              x.overrideMimeType("application/j-son;charset-UTF-8");
            }
          },

          success: function (result) {
            alert("Password Change Successfully");
          },
        });
      } else {
        alert("!!! Wrong Old Password !!! ");
      }
    } else {
      alert("!!! Password Not Match !!!");
    }
  }
  });

  //change Name :
  $(document).on("click", "#namebtn", function () {
    var storedArray = JSON.parse(sessionStorage.getItem("userdata"));

    const userId = storedArray.id;
    const userName = $("#name").val();

    let flag = true;

    if (userName === "") {
      flag = false;
      $("#userName").removeClass("valid").addClass("invalid");
      $("#userName").css({ display: "block" });
      $("#fname").css({ display: "block" });
      $("#fname").css({ color: "red" });
    }
    else
    {
      var re_name = /^[a-zA-Z ]+$/;
      var user = re_name.test(name);

      if (user && userName.length > 2) {
        $("#userName").removeClass("invalid").addClass("valid");
        $("#fname").css({ display: "none" });
      }
      else {
        flag = false;
        $("#userName").removeClass("valid").addClass("invalid");
        $("#fname").css({ display: "block" });
        $("#fname").css({ color: "red" });
      }
    }

    if(flag === true)
    {

    jQuery.ajax({
      url: `http://localhost:3000/users/${userId}`,
      type: "PUT",
      data: {
        id: `${storedArray.id}`,
        password: `${storedArray.password}`,
        name: `${userName}`,
        email: `${storedArray.email}`,
        profileUrl: `${storedArray.profileUrl}`,
      },
      dataType: "json",
      beforeSend: function (x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/j-son;charset-UTF-8");
        }
      },
      success: function (result) {
        alert("success");
      },
    });
  }
  });
  // hide and show the div of user profile
  $("#editProfile").click(function () {
    $("#passwordDiv").hide();
    $("#editProfileDiv").show();
    //   $('#editProfileDiv').toggle();
  });

  $("#changePassword").click(function () {
    $("#passwordDiv").show();
    $("#editProfileDiv").hide();

    //    $('#passwordDiv').toggle();
  });

  $("#fav").click(function () {
    var storedArray = JSON.parse(sessionStorage.getItem("song"));
    var userid = sessionStorage.getItem("userId");
    // var fav = JSON.stringify(storedArray);
    //console.log("stored array"+storedArray.id);

    let favourite = {
      userid: userid,
      songid: storedArray.id,
      url: storedArray.url,
      name: storedArray.name,
      language: storedArray.language,
      img: storedArray.img,
      artist: storedArray.artist,
      category: storedArray.category,
    };
    //  console.log(object);
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/favourite?userid=" + userid,
      dataType: "json",
      async: true,
      success: function (data) {
        console.log(data);
        var flag = true;
        $.each(data, function (i, v) {
          if (favourite.songid == v.songid) {
            flag = false;
            alert("already added to favourite");
          }
        });
        console.log(flag);
        if (flag) {
          $.ajax({
            type: "post",
            url: "http://localhost:3000/favourite",
            data: favourite,
            dataType: "json",
            async: true,

            success: function (responseData) {
              console.log(responseData);
            },
            error: function (xhr, statusText) {
              if (xhr.status == 500) {
                // alert("Already added to favourite");
              }
              console.log("not able to add the data");
            },
          });
        }
      },
    });
    // console.log(flag);
  });

  // Change Profile Pic :
  $(function () {
    $("#fileupload").change(function (event) {
      let storedArray = JSON.parse(sessionStorage.getItem("userdata"));

      alert(storedArray.id);

      const chooseFile = this.files[0];

      if (chooseFile) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          $("#upload-img").attr("src", reader.result);

          console.log(reader.result);

          // Upload Button

          $("#imgBtn").click(function () {
            // Ajax Request For Storing url

            jQuery.ajax({
              url: `http://localhost:3000/users/${storedArray.id}`,
              type: "PUT",
              // data: { id: userId, profileUrl: `${reader.result}`},
              data: {
                id: storedArray.id,
                password: `${storedArray.password}`,
                name: `${storedArray.name}`,
                email: `${storedArray.email}`,
                profileUrl: `${reader.result}`,
              },

              dataType: "json",
              beforeSend: function (x) {
                if (x && x.overrideMimeType) {
                  x.overrideMimeType("application/j-son;charset=UTF-8");
                }
              },

              success: function (result) {
                //Write your code here
                $("#upload-img").attr("src", reader.result);

                alert("Profile Pic Save successfully");
              },
            });
          });
        });

        reader.readAsDataURL(chooseFile);
      }
    });
  });

  // Change Profile Pic :
  $(function () {
    $("#fileupload").change(function (event) {
      let storedArray = JSON.parse(sessionStorage.getItem("userdata"));

      alert(storedArray.id);

      const chooseFile = this.files[0];

      if (chooseFile) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          $("#upload-img").attr("src", reader.result);

          console.log(reader.result);

          // Upload Button

          $("#imgBtn").click(function () {
            // Ajax Request For Storing url

            jQuery.ajax({
              url: `http://localhost:3000/users/${storedArray.id}`,
              type: "PUT",
              // data: { id: userId, profileUrl: `${reader.result}`},
              data: {
                id: storedArray.id,
                password: `${storedArray.password}`,
                name: `${storedArray.name}`,
                email: `${storedArray.email}`,
                profileUrl: `${reader.result}`,
              },

              dataType: "json",
              beforeSend: function (x) {
                if (x && x.overrideMimeType) {
                  x.overrideMimeType("application/j-son;charset=UTF-8");
                }
              },

              success: function (result) {
                //Write your code here
                $("#upload-img").attr("src", reader.result);

                alert("Profile Pic Save successfully");
              },
            });
          });
        });

        reader.readAsDataURL(chooseFile);
      }
    });
  });
});
// Logout Functionality
function Logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userId");

  window.location.href = "../HTML/Login.html";
}
