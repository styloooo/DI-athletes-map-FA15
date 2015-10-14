var athletes = new Datamap({
  scope: 'usa',
  element: document.getElementById('map_athletes'),
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + '<strong>'+geography.properties.name+'</strong>' + '<br>' + htmlizeAthleteNames(data.names);
    },
    highlightBorderWidth: 3
  },

  fills: {
  // 'Republican': '#CC4731',
  // 'Democrat': '#306596',
  // 'Heavy Democrat': '#667FAF',
  // 'Light Democrat': '#A9C0DE',
  // 'Heavy Republican': '#CA5E5B',
  // 'Light Republican': '#EAA9A8',
  defaultFill: '#8EC8E2'
},
data:{
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
      "names": ["Josh Ferguson: Naperville",
                "Dillan Caley: Charleston", 
                "B.J. Bello: New Lenox",
                "Jimmy Fitzgerald: Champaign", 
                "Malik Turner: Springfield",
                "Wes Lunt: Rochester",
                "Caleb Reams: Gurnee",
                "Rob Bain: Bolingbrook",
                "Taylor Zalewski: Orland Park",
                "Mike Dudek: Naperville",
                "Clayton Fejedelem: Lemont",
                "Patrick Nelson: Chicago",
                "Davontay Kwaaning: Chicago",
                "Darius Mosley: O'Fallon",
                "Kendrick Foster: Peoria",
                "Cedric Doxy: Calumet City",
                "Cameron Tucker: River Forest",
                "Dre Brown: DeKalb",
                "Daylen Dunlap: Chicago",
                "Nelson Lugo: Franklin Park",
                "T.J. Moss: Carpentersville",
                "Julian Hylton: Tinley Park",
                "Jim Nudera: Elmhurst",
                "Leslie Poole: Schaumburg", 
                "Jonathan Milazzo: Orland Park",
                "Sean White: Casey",
                "Dennis Thurow: Naperville", 
                "David Reisner: Bartlett",
                "Jason Goldsmith: Highland Park",
                "Ryan Tucker: Chicago",
                "Jimmy Marchese: Vernon Hills",
                "Chris Royer: Wheaton",
                "Luke Nelson: Western Springs",
                "Ikjot Wahi: Darien",
                "Tim Clary: Spring Grove",
                "Jack Clark: Hinsdale",
                "Conner Schmidt: Lincoln",
                "Nick Allegretti: Frankfort",
                "Jamal Milan: Chicago",
                "Michael Martin: Champaign",
                "Mike Parisi: Elk Grove Village",
                "Jake Broeker: Springfield",
                "Ryan Walton: Crestwood",
                "Matt Long: Coal City",
                "Max Marietti: Frankfort",
                "Gabe Megginson: Jacksonville", 
                "Chris O’Connor: Tinley Park",
                "Pat Flavin: Lisle",
                "Kameron Fry: Urbana",
                "Bobby Walker: Golf",
                "Jordan Hahn: Olney",
                "Brandon Robert: Peoria", 
                "Zack Grant: Springfield",
                "Max Loeb: Lawrenceville"]
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
      "names": ["V’Angelo Bentley", 
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
}
});

function htmlizeAthleteNames(nameList){
  if(nameList.length > 0){
    retVal = nameList.length + " Athletes: <br>"
    for(var i = 0; i < nameList.length; i++){
      retVal += nameList[i];
      if(i < nameList.length-1){
        retVal += "<br>";
      }
    }
  }
  else{
    retVal = "No athletes here!";
  }
  return retVal;
}

athletes.labels();