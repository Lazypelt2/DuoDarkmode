
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var menuadded = false;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
      if (window.location.href.indexOf('/guidebook/') !== -1 || window.location.href.indexOf('/alphabets/') !== -1) {
    
        var sp = document.querySelectorAll("*");
        console.log(sp.length);
    
        sp.forEach(x => {
    
          if (x.style.color == "rgb(75, 75, 75)") {
            x.style.color = "#F1F7FB";
          }
        });

      }
      
      var imgs = document.querySelectorAll("img");
      
      imgs.forEach(i => {
        if(i.src=="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/552108978e8e6913b3db22f2795556d4.svg"){
          i.src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/242446c5162c08294e9d75b0dba34fce.svg"
        }

      })
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});

function expandMenu(){

  if (window.location.href.indexOf('/stories/') !== -1){
    return;
  }


  var sidebar = document.querySelector("#root > div._1R67g._3YKTw");
  var menu = document.querySelector("#root > div._1R67g._3YKTw > div > div._1JSRd._3SuOC > div._3bTT7");

  
  // Reload page if its inside a lesson and the logout button is still there
  if (window.location.href.indexOf('/lesson') !== -1){
    if (document.body.innerHTML.indexOf('<div class="_1JSRd _3SuOC logout">') !== -1){
      location.reload();
    }
    return;
  }

  // Exit function if the Stories button is already there to not keep re-adding it
  if (document.body.innerHTML.indexOf('span id="storiesspan"') !== -1){
      return;
  }



  console.log("Storys Tab Re-Added!");
  menu.innerHTML += '<div id="storiesbtn" class="_3LfJs _2ulLR"><a class="_3zmPR" href="./stories" rel="noopener noreferrer noopener" target="/stories" tabindex="0"><span id="storiesspan" class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ"><div class="AMXUp"><img class="ZFBAG" src="https://static.wikia.nocookie.net/duolingo/images/9/9a/Stories-new.svg"></div><span class="_1lJDk">Stories</span></span></a></div>';
  if (window.location.href.indexOf('/stories') !== -1) {
  
      var anchors = document.querySelectorAll("a");
      anchors.forEach(a => {
        if (window.location.href.indexOf('/stories') !== -1) {
          var stories = document.getElementById('storiesbtn');
          stories.classList.add("_2-Cde");
        }
        if (window.location.href.indexOf('/stories') !== -1) {
          var storiesSpan = document.getElementById("storiesspan");
          storiesSpan.classList.remove("_3BxbA");
          storiesSpan.classList.remove("_2q30B");
          storiesSpan.classList.remove("_23V08");
          storiesSpan.classList.remove("_1R__D");
          storiesSpan.classList.remove("_1eTnJ");
          storiesSpan.classList.add("_3BxbA");
          storiesSpan.classList.add("_2q30B");
          storiesSpan.classList.add("_23V08");
          storiesSpan.classList.add("_2BPAp");
          storiesSpan.classList.add("_1R__D");

        }


      });
    }
}

/*
setInterval(function() {
  expandMenu();
}, 1000);
*/



