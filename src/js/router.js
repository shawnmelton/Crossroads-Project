define(['jquery', 'underscore', 'backbone', 'tools/homeHoverContent', 'tools/contentLocator',
	'views/home', 'views/find', 'views/connectSecondary', 'views/learnSecondary', 'views/secondary'], 
	function($, _, Backbone, homeHoverContent, contentLocator, homeView, findView, connSecView, learnSecView, secondaryView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'abide': 'showAbide',
				'learn': 'showLearn',
				'learn/beliefs': 'showLearn',
				'learn/identity': 'showLearn',
				'learn/mission': 'showLearn',
				'learn/sermons': 'showLearn',
				'connect': 'showConnect',
				'connect/life-groups': 'showConnect',
				'connect/whats-going-on': 'showConnect',
				'connect/worship': 'showConnect',
				'connect/upside-down-christmas': 'showUpsideDownChristmas',
				'find': 'showFind',
				'find/contact': 'showFind',
				'moms': 'showMoms',
				'easter': 'showEaster',
				'family-on-mission': 'showFamilyOnMission',
				'daddy-daughter-dance': 'showDance',
				'i-am-crossroads': 'showIAm',
				'3dm-conference': 'show3dmConference',
				'military-wives': 'showMilitaryWives',
				'i-still-do': 'showIStillDo',
				'administrative-pastor': 'showExecPastor',
				'in-the-news': 'showNews',
				'cares': 'showCares',
				'administrative-assistant': 'showAdminAsst',
				'childrens-director': 'showKidsDirector',
				'the-camp': 'showCamp',
				'starting-point': 'showStartingPoint',
				'women': 'showWomen',
				'fall-festival': 'showFallFestival',
				'justice-sunday': 'showJustice',
				'kids': 'showKids',
				'imperfect-conference': 'showImperfectConference',
				'membership-class': 'showMembershipClass',
				'spring-picnic': 'showSpringPicnic',
				'mercy-justice': 'showMercyJustice',
				'swag': 'showSwag',
				'beach-baptism': 'showBeachBaptism',
				'summer-schedule': 'showSummerServices',
				'the-camp-continued': 'showCampContinued',
				'campus': 'showCampus',
				'financial-peace': 'showFP',
				'entrusted': 'showEntrusted',
				'tidewater-park': 'showTidewaterPark',
				'volunteer-appreciation-night': 'showVolunteerAppreciation',
				'live': 'showLive',
				
				// Default
				"*actions": 'defaultAction'
			},

			showLive: function() {
				connSecView.render('live');

				var width = (window.innerWidth * 0.8),
					height = (width * 0.75);

				if (width > 1000) {
					width = 1000;
					height = 750;
				}

				document.getElementById('live').innerHTML = '<iframe src="//player.vimeo.com/hubnut/album/4186555?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=1&amp;video_byline=0" width="'+ width +'" height="'+ height +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			},

			showVolunteerAppreciation: function() {
				connSecView.render('volunteerAppreciation');
			},

			showTidewaterPark: function() {
				connSecView.render('tidewaterPark');
			},

			showEntrusted: function() {
				connSecView.render('entrusted');
			},

			showFP: function() {
				connSecView.render('financialPeace');
			},

			showAbide: function() {
				connSecView.render('abide');
			},

			showCampus: function() {
				learnSecView.render('campus');
			},

			showCampContinued: function() {
				connSecView.render('campContinued');
			},

			showBeachBaptism: function() {
				connSecView.render('beachBaptism');	
			},

			showSummerServices: function() {
				learnSecView.render('summerSchedule');
			},

			showSwag: function() {
				connSecView.render('swag');
			},

			showJustice: function() {
				connSecView.render('justiceSunday');
			},

			showMembershipClass: function() {
				learnSecView.render('membershipClass');
			},

			showMercyJustice: function() {
				connSecView.render('mercyAndJustice');
			},

			showImperfectConference: function() {
				connSecView.render('imperfectConference');
			},

			showKids: function() {
				connSecView.render('kids');
			},

			showFallFestival: function() {
				connSecView.render('fallFestival');
			},

			showAdminAsst: function() {
				learnSecView.render('adminAssistant');
			},

			showWomen: function() {
				connSecView.render('women');
			},

			showExecPastor: function() {
				learnSecView.render('execPastor');
			},

			showCares: function() {
				connSecView.render('cares');
			},

			showCamp: function() {
				connSecView.render('theCamp');
			},

			showStartingPoint: function() {
				connSecView.render('startingPoint');
			},
			
			showHome: function(){
				homeView.render();

				if($(document).width() > 800 && !homeHoverContent.areHandlersSet()) {
					homeHoverContent.setHandlers();
				}
			},

			show3dmConference: function() {
				learnSecView.render('threeDMConf');
			},

			showDance: function() {
				connSecView.render('daddydance');
			},

			showIAm: function() {
				learnSecView.render('iAmCRC');
			},

			showIStillDo: function() {
				connSecView.render('iStillDo');
			},

			/*showIAmCRCVideo: function() {
				var width = Math.floor($(window).width() * 0.88),
					height = Math.floor((width * 9) / 16);

				if(width > 1000) {
					width = 1000;
					height = 562;
				} 

				$('#iamcrc').append('<video width="'+ width +'" height="'+ height +'" controls="controls"><source src="/video/i-am-crossroads.mp4" type="video/mp4"></video>');
			},*/

			showKidsDirector: function() {
				learnSecView.render('childrensDirector');
			},
			
			showLearn: function() {
				learnSecView.render('learn');
				contentLocator.moveByUrl();
			},
			
			showConnect: function() {
				connSecView.render('connect');
				contentLocator.moveByUrl();
			},

			showEaster: function() {
				connSecView.render('easter');
			},

			showFamilyOnMission: function() {
				connSecView.render('familyOnMission');
			},
			
			showFind: function() {
				findView.render();
				contentLocator.moveByUrl();
			},

			showMoms: function() {
				connSecView.render('moms');
			},

			showMilitaryWives: function() {
				connSecView.render('militaryWives');
			},

			showNews: function() {
				learnSecView.render('inTheNews');
			},

			showUpsideDownChristmas: function() {
				connSecView.render('upsideDownChristmas');
			},

			showSpringPicnic: function() {
				connSecView.render('springPicnic');
			},

			show404: function() {
				learnSecView.render('404');
			},
			
			defaultAction: function(actions){
				secondaryView.render();
			}
		});
		
		var initialize = function(){
			var app_router = new AppRouter();
			Backbone.history.start({
				pushState: true
			});
		};
		
		return {
			initialize: initialize
		};
	}
);