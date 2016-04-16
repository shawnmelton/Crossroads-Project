define(['jquery', 'underscore', 'backbone', 'tools/homeHoverContent', 'tools/contentLocator',
	'views/home', 'views/find', 'views/connectSecondary', 'views/learnSecondary'], 
	function($, _, Backbone, homeHoverContent, contentLocator, homeView, findView, connSecView, learnSecView){
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
				
				// Default
				"*actions": 'defaultAction'
			},

			showAbide: function() {
				connSecView.render('abide');
			},

			showJustice: function() {
				connSecView.render('justiceSunday');
			},

			showMembershipClass: function() {
				learnSecView.render('membershipClass');
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
				this.show404();
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