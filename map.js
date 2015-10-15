var athletes = {
  "AZ": {
      "names": []
  },
  "CO": {
      "names": []
  },
  "DE": {
      "names": []
  },
  "FL": {
      "names": ["Taylor Barton", 
      "Dionte Taylor", 
      "James Crawford", 
      "Carroll Phillips",
      "Desmond Cain",
      "Geronimo Allison",
      "Teko Powell",
      "Harry Black",
      "Jevaris Little",
      "Eaton Spence",
      "Tre Watson"]
  },
  "GA": {
      "names": ["Henry Enyenihi",
                "Julian Jones"]
  },
  "HI": {
      "names": []
  },
  "ID": {
      "names": []
  },
  "IL": {
      "names":
      	{
      		"Naperville": ["Josh Ferguson",
      		               "Mike Dudek",
      		               "Dennis Thurow"],
      		"Charleston": ["Dillan Caley"],
      		"New Lenox": ["B.J. Below"],
      		"Champaign": ["Jimmy Fitzgerald", 
      					  "Michael Martin"],
			"Springfield": ["Malik Turner",
							"Jake Broeker",
							"Zack Grant"],
			"Rochester": ["Wes Lunt"],
			"Gurnee": ["Caleb Reams"],
			"Bolingbrook": ["Rob Bain"],
			"Orland Park": ["Taylor Zalewski",
							"Jonathan Milazzo"],
			"Lemont": ["Clayton Fejedelem"],
			"Chicago": ["Patrick Nelson", 
						"Davontay Kwaaning",
						"Daylen Dunlap",
						"Ryan Tucker",
						"Jamal Milan"],
			"O'Fallon": ["Darius Mosley"],
			"Peoria": ["Kendrick Foster", 
						"Brandon Robert"],
			"Calumet City": ["Cedric Doxy"],
			"River Forest": ["Cameron Tucker"],
			"DeKalb": ["Dre Brown"],
			"Franklin Park": ["Nelson Lugo"],
			"Carpentersville": ["T.J. Moss"],
			"Tinley Park": ["Julian Hylton",
							"Chris O'Connor"],
			"Elmhurst": ["Jim Nudera"],
			"Schaumburg": ["Lesie Pool"],
			"Casey": ["Sean White"],
			"Bartlett": ["David Reisner"],
			"Highland Park": ["Jason Goldsmith"],
			"Vernon Hills": ["Jimmy Marchese"],
			"Wheaton": ["Chris Royer"],
			"Western Springs": ["Luke Nelson"],
			"Darien": ["Ikjot Wahi"],
			"Spring Grove": ["Tim Clary"],
			"Hinsdale": ["Jack Clark"],
			"Lincoln": ["Conner Schmidt"],
			"Frankfort": ["Nick Allegretti", "Max Marietti"],
			"Elk Grove Village": ["Mike Parisi"],
			"Crestwood": ["Ryan Walton"],
			"Coal City": ["Matt Long"],
			"Jacksonville": ["Gabe Megginson"],
			"Lisle": ["Pat Flavin"],
			"Urbana": ["Kameron Fry"],
			"Golf": ["Bobby Walker"],
			"Olney": ["Jordan Hahn"],
			"Lawrenceville": ["Max Loeb"]
      	}
  },
  "IN": {
      "names": ["Jeff George Jr.",
      "Ryan Frain",
      "Ted Karras",
      "Adam Solomon"
      ]
  },
  "IA": {
      "names": ["Andrew Davis"]
  },
  "KS": {
      "names": ["Henry McGrew"]
  },
  "KY": {
      "names": []
  },
  "LA": {
      "names": []
  },
  "MD": {
      "names": ["Reggie Corbin", "Darwyn Kelly"]
  },
  "ME": {
      "names": []
  },
  "MA": {
      "names": []
  },
  "MN": {
      "names": []
  },
  "MI": {
      "names": ["Kenny Nelson",
      "Alex Mussat",
      "Tyler White"]
  },
  "MS": {
      "names": []
  },
  "MO": {
      "names": ["Nathan Echard", "Zach Hirth"]
  },
  "MT": {
      "names": []
  },
  "NC": {
      "names": []
  },
  "NE": {
      "names": []
  },
  "NV": {
      "names": ["Samuel Harlib"]
  },
  "NH": {
      "names": []
  },
  "NJ": {
      "names": ["Sean Adesanya", "Altan Aldemir"]
  },
  "NY": {
      "names": []
  },
  "ND": {
      "names": []
  },
  "NM": {
      "names": []
  },
  "OH": {
      "names": ["V'Angelo Bentley", 
        "Chayce Crouch",
        "Chris Boles",
        "Caleb Day",
        "Chunky Clements", 
        "Justin Hardee",
        "Zeke Martin",
        "Tito Odenigbo",
        "Dawuane Smoot",
        "Joe Spencer",
        "Christian DiLauro",
        "Mason Monheim",
        "Frank Sumpter",
        "Austin Schmidt",
        "LaKieth Walls",
        "Mike Svetina"
]
  },
  "OK": {
      "names": []
  },
  "OR": {
      "names": []
  },
  "PA": {
      "names": ["Tyrin Stone-Davis", "Jihad Ward", "T.J. Neal"]
  },
  "RI": {
      "names": []
  },
  "SC": {
      "names": []
  },
  "SD": {
      "names": []
  },
  "TN": {
      "names": ["Ke'Shawn Vaughn", "Cameron Watkins"]
  },
  "TX": {
      "names": ["Sam Mays",
                "Chris James",
                "Marchie Murdock",
                "Justice Williams",
                "Chayce McLaughlin"]
  },
  "UT": {
      "names": []
  },
  "WI": {
      "names": ["Austin Roberts"]
  },
  "VA": {
      "names": []
  },
  "VT": {
      "names": []
  },
  "WA": {
      "names": []
  },
  "WV": {
      "names": []
  },
  "WY": {
      "names": []
  },
  "CA": {
      "names": ["Eric Finney", 
                "Man Berg",
                "Zach Heath", 
                "Ainslie Nelson", 
                "Raphael Barr",
                "Jordan Fagan",
                "Joe Fotu",
                "Connor Brennan"]
  },
  "CT": {
      "names": []
  },
  "AK": {
      "names": []
  },
  "AR": {
      "names": []
  },
  "AL": {
      "names": []
  }
};

//Sets fills depending on number of athletes from state
for (item in athletes) {
	var num = athletes[item].names.length;
  console.log(item, num);
	//var value = paletteScale(num);
	if(num >= 1 && num < 10){
		athletes[item].fillKey = 'low';
	}
	else if(num >= 10 && num < 20){
		athletes[item].fillKey = 'lo-med';
	}
	else if(num >= 20 && num < 30){
		athletes[item].fillKey = 'med';
	}
	else if(num >= 30 && num < 40){
		athletes[item].fillKey = 'hi-med';
	}
	else if(num >= 40 || item == 'IL'){
		athletes[item].fillKey = 'hi';
	}
	else{
		athletes[item].fillKey = 'none';
	}
}

//Sends names back with HTML formatting for hoverbox 
//Implement special handling for >50 (IL)
function htmlizeNames(names){
	//console.log(names);
	if(names.length == 1){
		return names;
	}
	var output = "";
	if(names.length > 1){
		for(var i = 0; i < names.length; i++){
			output += names[i];
			if(i < names.length-1){
				output += "<br>";
			}
		}
	}
	else{
		for(city in names){
			output += "<strong>" + city + "</strong><br>"
			for(var i = 0; i < names[city].length; i++){
				output += names[city][i] + "<br>"
			}
		}
	}
	return output;
}

//MAPS!
var map = new Datamap({
	element: document.getElementById('container'),
	scope: 'usa',
	fills: {
		defaultFill: '#dcf5ff',
		'none': '#dcf5ff',
		'low': '#97dbf6',
		'lo-med': '#44afdb',
		'med': '#2380a5',
		'hi-med': '#0e6b90',
		'hi': '#07445c' 
	},
	data: athletes,
	geographyConfig: {
		borderColor: '#DEDEDE',
		highlightBorderWidth: 2,
		highlightOnHover: true,
	highlightBorderColor: '#B7B7B7',
	popupTemplate: function(geography, data) {
	   if(!data) return '<div class="hoverinfo"><strong>No data!</strong></div>';
	   else if(data.names.length <= 0) return '<div class="hoverinfo"><strong>'+geography.properties.name+'</strong><br>No athletes here</strong></div>';
	   if(data.names.length < 30) return '<div class="hoverinfo">' + '<strong>' + geography.properties.name + '</strong>' + '<br>' + htmlizeNames(data.names) + '</div>';
	   else return '<div id="longbox" class="hoverinfo"><strong>' + geography.properties.name + '</strong><br>' + htmlizeNames(data.names) + '</div>'
	 }
	}
});

map.labels();