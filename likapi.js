/*!
  * Likapi v1.0 (https://likapi.github.io/)
  * Copyright 2020-2021 (https://likapi.github.io/docs/#contributeurs)
  * Licence MIT (https://github.com/likapi/likapi/blob/main/LICENSE)
  */

//Appeller la fonction call pour appeller une api (REST)
//call('https://likapi.gihub.io/api')

async function call(api) {
	if(typeof api === "undefined") {
		console.log("Erreur aucune url n'a été définie...")
	} else {
		var response = await window.fetch(api)
			if(response.ok) {
				var data = await response.json()
				console.log(data)
			} else {
				console.error("Erreur 404 avec la librairie Likapi...")
				console.log("Impossible d'appeler l'API : ("+response.url+")...")
  			}
	}
}

