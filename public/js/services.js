'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('services', []);

services.factory('MyService', ['$http', function ($http){
	return {
		getSession : function () {

			var session = [
			{
				"index": "0",
				"date": "05/11/2013",
				"name": "Pattern builder, un builder pour les tests",
				"title:": "-",
				"speaker": "Bertrand Mora",
				"video": "-",
				"survey": "-"
			},
			{
				"index": "1",
				"date": "19/11/2013",
				"name": "Debugger sous eclipse sans relancer le serveur",
				"title:": "20131119_-_Debug_sous_eclipse.mp4",
				"speaker": "JonathanDion",
				"video": "http: //vod.com.ftgroup/content/encoded/R2y0U06AYQkoGRkzBJSc.asx",
				"survey": "https: //fr.surveymonkey.com/s/VLJB7HQ"
			},
			{
				"index": "2",
				"date": "03/12/2013",
				"name": "OptimisationdesonEclipse(�tape1)",
				"title: ": "20131203-DH-UtilisationEclipse.mp4",
				"speaker": "Fr�d�ricDemany",
				"video": "http: //vod.com.ftgroup/content/encoded/wr9JStVJZiEKpuLkyGRE.asx",
				"survey": "https: //fr.surveymonkey.com/s/RKK7NNQ"
			},
			{
				"index": "3",
				"date": "17/12/2013",
				"name": "LesGenerics : lesnouveauxsuper-h�ros?",
				"title: ": "20131217-DH-Generic.mp4",
				"speaker": "BertrandMora",
				"video": "http: //vod.com.ftgroup/content/encoded/OoBPwmn04vG0QRLcM5XF.asx",
				"survey": "https: //fr.surveymonkey.com/s/CGNQWKC"
			},
			{
				"index": "4",
				"date": "14/01/2014",
				"name": "monNavigateurunoutildedev(�tape1)",
				"title: ": "-",
				"speaker": "Herv�Darritchon",
				"video": "-",
				"survey": "https: //fr.surveymonkey.com/s/DVGBVRW"
			},
			{
				"index": "5",
				"date": "28/01/2014",
				"name": "SoapUI, unoutildetestd'applicationWSetdebouchons",
				"title: ": "-",
				"speaker": "Herv�Darritchon",
				"video": "-",
				"survey": "https: //fr.surveymonkey.com/s/TLHH775"
			},
			{
				"index": "6",
				"date": "11/02/2014",
				"name": "uncondens�deTDDen20minuteschrono!",
				"title: ": "devheure-tddA.mp4",
				"speaker": "RodolpheDariol",
				"video": "http: //vod.com.ftgroup/content/encoded/7JzwKtMosUYXA6Ftj1o6.asx",
				"survey": "https: //fr.surveymonkey.com/s/6KKB8XY"
			},
			{
				"index": "7",
				"date": "25/02/2014",
				"name": "XEE, Unefailledes�curit�avecduXML",
				"title: ": "DH_XXE_final.mp4",
				"speaker": "Fr�d�ricDemany",
				"video": "http: //vod.com.ftgroup/content/encoded/hTVjDeiKVARTk5ieEL8S.asx",
				"survey": "https: //fr.surveymonkey.com/s/HMR75HN"
			}
			]; 
			return session;
		}
	}

}]);
