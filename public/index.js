
// Ratio of Obese (BMI >= 30) in U.S. Adults, CDC 2008
var data = [
  , .187, .198, , .133, .175, .151, , .1, .125, .171, , .172, .133, , .108,
  .142, .167, .201, .175, .159, .169, .177, .141, .163, .117, .182, .153, .195,
  .189, .134, .163, .133, .151, .145, .13, .139, .169, .164, .175, .135, .152,
  .169, , .132, .167, .139, .184, .159, .14, .146, .157, , .139, .183, .16, .143
];

var users = ['mark','nick','josh'];
  
var all_states_to_user = [ 
    {},
     { 
      IA: 2 },
     { 
      MS: 0,
      IA: 2 },
     { 
      MS: 0,
      PA: 1,
      IA: 2 }, 
     { 
      MS: 0,
      PA: 1,
      WI: 2,
      IA: 2 }, 
            { 
      MS: 0,
      PA: 1,
      NY: 1,
      WI: 2,
      IA: 2 }, 
            { 
      MS: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      WI: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      WI: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      MI: 2,
      WI: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2 }, 
        { 
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2 }, 
    { 
      AL: 0,
      MS: 0,
      LA: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2 }, 
    { 
      AL: 0,
      MS: 0,
      LA: 0,
      AR: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2 },
    { 
      AL: 0,
      MS: 0,
      LA: 0,
      AR: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2,
      NE: 2 },
    { 
      AL: 0,
      MS: 0,
      LA: 0,
      AR: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      WV: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2,
      NE: 2 },
    { 
      AL: 0,
      MS: 0,
      LA: 0,
      AR: 0,
      MO: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      WV: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2,
      NE: 2 },
    { 
      AL: 0,
      MS: 0,
      LA: 0,
      AR: 0,
      MO: 0,
      PA: 1,
      NY: 1,
      NJ: 1,
      DE: 1,
      MD: 1,
      WV: 1,
      IN: 2,
      MI: 2,
      WI: 2,
      MN: 2,
      IA: 2,
      IL: 2,
      SD: 2,
      NE: 2 },
];

var svg = d3.select("#chart").append("svg")
    .attr("width", 960)
    .attr("height", 500);

function setUser(states_for_user) {
    return function(d){
          var state_name = d.properties.name;
          var state =_.find(window.states_lookup.items, function(s){return s.name === state_name});
          var user = states_for_user[state.abbreviation];
          if(user != undefined){
            //console.log(state,users[user]);
            return users[user];             
          } else {
              return "noone";
          }
      };
}

d3.json("us-states.json", function(json) {
  var path = d3.geo.path();


  // A thick black stroke for the exterior.
  svg.append("g")
      .attr("class", "black")
    .selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("d", path)
      .attr("class",setUser(all_states_to_user[0]));
      
});
function index(i, N) { return i % (N*2) - (i % N * 2 + 1) * (Math.floor(i/N)%2); }

function next(pos) {
    d3.json("us-states.json", function(json) {
        var path = d3.geo.path();
        
        var len = all_states_to_user.length;
        
        var i = index(pos, len);
        
        svg.selectAll("path")
            .data(json.features)
            .attr("class", setUser(all_states_to_user[i]));
    });
    
    setTimeout(function () { next(pos+1); }, 1000);
}

setTimeout(function () { next(0); }, 1000);