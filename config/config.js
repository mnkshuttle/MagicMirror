// Config Bus Schedule 

var config = {
	port: 8080,
ipWhitelist: [
                    "127.0.0.1",
                    "::ffff:127.0.0.1",
                    "::1",
                    "::ffff:192.168.1.1/24",
            ],
    language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
	/*	{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_right"
		},
	*/	 {
        module: 'MMM-SimpleLogo',
        position: 'top_center',   // This can be any of the regions.
       config: {
		   width:'500px',
		   position:'center'
	   }
    },
	
		{
			module: 'clock',
			position: 'top_center'
		},
		
		{
			module: 'calendar',
			header: 'B3 Shuttle Schedule',
			position: 'top_center',
			config: {
				calendars: [
					{
						symbol: 'bus ',
						url: 'googlecalendarurl.com/basic.ics'
					}
				]
			}
		},
		
	{
module: 'MMM-iFrameReload',
header:'Traffic Map',
position: 'top_right', // This can be any of the regions.
config: {
// See 'Configuration options' for more information.
url: "“http://localhost:8080/modules/MMM-iFrameReload/nameofhtmlfile.html",
width: "580px", // Optional. Default: 400px
height: "1100px", // Optional. Default: 800px
refreshInterval: 600 //Optional. Default: 3600 = 1 hour
}
},
	
		{
    module: 'MMM-WunderGround',
header: 'Weather in Moncks Corner', 
   position: 'top_left',
    config: {
        apikey: 'insertAPIkey', // private; don't share!
        pws: 'SC/Goose_Creek', //culemborg
        hourly: '1',
        fctext: '1',
        fcdaycount: "5",
        fcdaystart: "0",
        hourlyinterval: "1",
        hourlycount: "6",
        alerttime: 10000,
        alerttruncatestring: "english:",
        fade:false,
coloricon:true,
windunits:"mph",
    roundTmpDecs: 1,
    UseCardinals: 0,
    layout: "vertical",
    sysstat: 0
    }
},

    {
        module: 'MMM-Todoist',
        position: 'top_center',  // This can be any of the regions. Best results in left or right regions.
        header: 'Site News',
        config: { // See 'Configuration options' for more information.
            accessToken: 'insertaccessToken',
            maximumEntries: 60,
            interval: 60,
            lists: [ 196984039 ],
            fade: false
      }
    },
  
  
  
{
			module: 'newsfeed',
			position: 'top-left',
			config: {
				feeds: [
						 {
                    title: "USA Today",
                    url: "http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories",
                },
					
                	 {
                    title: "Post & Courier",
                    url: "http://www.postandcourier.com/search/?q=&t=article&f=rss",
                },
                	 {
                    title: "Count on 2 News",
                    url: "http://counton2.com/category/news/local-news/feed/",
                },
                
                
    
                
					
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},



	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
