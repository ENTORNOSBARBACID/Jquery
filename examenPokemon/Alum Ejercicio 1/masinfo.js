scriptUrl="pokemon.txt"
$.get(scriptUrl)
				.done(function(data) {
					console.log("Script " + scriptUrl + " cargado correctamente.");
                    $("#principal").text(data)
				})
				.fail(function(jqxhr, settings, exception) {
					$("#principal").text("Error al cargar la información."); 
					console.error("Error al cargar " + scriptUrl + ": ", exception);
            });