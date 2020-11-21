var randVideoId = null;
var randVideoStartTime = 0;
var randCounter = 0;
var randCounterVerify = 0;
var videoSoundValue = true;

function valueSettingFunc() {
	randCounter = Math.floor(Math.random() * 14);
	/*
	if(randCounter === randCounterVerify)
	{
	}
	switch(randCounter)
	{
		case 0 :
		{
			randVideoId = "AQRYd7eP6BI"; // ANYBAND - Promise You
			break;
		}
		case 1 :
		{
			randVideoId = "09R8_2nJtjg"; // MAROON5 - Sugar
			randVideoStartTime = 26; // 26초후 부터 시작
			break;
		}
		case 2 :
		{
			randVideoId = "aJOTlE1K90k"; // MAROON5 - Girl Like You Feat Cardi B
			break;
		}
		case 3 :
		{
			randVideoId = "KQ6zr6kCPj8"; // LMFAO - Party Rock Anthem Feat Lauren Bennett & GoonRock
			randVideoStartTime = 85; // 1분 25초후 부터 시작
			break;
		}
		case 4 :
		{
			randVideoId = "LQMBlFSu2QU"; // PINK - Walk Me Home - Lyrics Offical Movie
			break;
		}
		case 5 :
		{
			randVideoId = "LjhCEhWiKXk"; // BRUNO MARS - Just The Way You Are
			break;
		}
		case 6 :
		{
			randVideoId = "OPf0YbXqDm0"; // MARK RONSON - Uptown Funk feat Bruno Mars
			break;
		}
		case 7 :
		{
			randVideoId = "h--P8HzYZ74"; // ZEDD & ALESSIA CARA - Stay - Lyrics Offical Movie
			break;
		}
		case 8 :
		{
			randVideoId = "Lj6Y6JCu-l4"; // ZEDD & MAREN MORRIS & GREY - The Middle - Lyrics Offical Movie
			break;
		}
		case 9 :
		{
			randVideoId = "5Wiio4KoGe8"; // MAROON5 - What Lovers Do Feat SZA
			break;
		}
		case 10 :
		{
			randVideoId = "Uq8Dgcy4MDY"; // OWL CITY - Shooting Star
			break;
		}
		case 11 :
		{
			randVideoId = "7Qp5vcuMIlk"; // ED SHEERAN - Castle On The Hill - Lyrics Offical Movie
			break;
		}
		case 12 :
		{
			randVideoId = "H7HmzwI67ec"; // OWL CITY & CARLY RAE JEPSEN - Good Time
			break;
		}
		case 13 :
		{
			randVideoId = "nzDO6tAB6ng"; // 정은지 - 하늘바라기
			break;
		}
	}
	*/
	randVideoId = "sapuA1VnHEE";
}

function mobileCheckFunc() {
	if(navigator.userAgent.toLowerCase().indexOf('android') != -1 ||
	navigator.userAgent.toLowerCase().indexOf('ios') != -1 ||
	navigator.userAgent.toLowerCase().indexOf('mobile') != -1)
	{
		videoSoundValue = true;
	}
	else
	{
		videoSoundValue = false;
	}
}

$('document').ready(function() {
	valueSettingFunc();
	mobileCheckFunc();
	var options = { videoId: randVideoId, start: randVideoStartTime, mute: videoSoundValue };
	$('.youtubeVideoPlay').tubular(options);	
});