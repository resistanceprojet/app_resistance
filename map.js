const mapOptions = {
    center: [50.452479, 2.909163],
    minZoom: 8, // Niveau de zoom minimum
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', /*{attribution: '© OpenStreetMap contributors'}*/);
map.addLayer(layer);

let marker = new L.Marker([50.693217, 3.177676]);
marker.addTo(map);
// marker.bindPopup("<b>Marqueur Rouge</b><br>Cliquez pour plus d'informations.")
marker.bindPopup(`<b>Roger Vanovermeir</b><br>En mai 1940, devant l’invasion allemande, comme de nombreux habitants du Nord, il évacue avec son père jusqu’à Argenton-sur-Creuse. Quand les troupes allemandes occupent cette ville à la mi-juin, les deux hommes décident de revenir à Roubaix mais ils y sont de retour seulement en septembre 1940 car l’Occupant a installé une « ligne de démarcation » sur la Somme, le Nord-Pas-de-Calais étant rattaché au commandement militaire de Bruxelles dirigé par le général von Falkenhausen. Roger et son père reprennent contact avec Jean Lebas qui s’était replié en Bretagne avec une partie des conseillers municipaux de la ville. Celui-ci, de retour à Roubaix début juillet et destitué par le préfet, a déjà commencé à rassembler autour de lui les socialistes désireux de résister à l’Occupant et de s’opposer au régime de Vichy. Dès octobre 1940, ce groupe de résistants débute la publication du journal clandestin L’Homme libre dont la distribution va s’étendre progressivement à l’ensemble de l’agglomération lilloise et même au-delà. Théodore et Roger deviennent aussi des agents du réseau Action 40 fondé début 1941 par le docteur Marcel Guislain [4], adjoint de Lebas jusqu’en 1940, et participent à la récupération de soldats britanniques cachés par des familles puis d’aviateurs alliés, abattus au-dessus de la région, et à leur exfiltration vers le Sud de la France. Ils fournissent aussi de faux papiers aux clandestins, Cependant le réseau Action 40 est démantelé par les Allemands le 3 mai 1942 par l’arrestation chez lui, du docteur Guislain et de quatre autres dirigeants du réseau. Roger, âgé de 19 ans, va alors rejoindre le réseau de renseignement Delbo [5], créé en juin 1942 à l’initiative du service de la Sûreté de l’État belge à Londres et qui travaille en coopération avec l’état-major allié. Malheureusement à Roubaix, Roger n’échappe pas à l’arrestation le 26 mai 1943 par des agents de la Gestapo venus de Paris car certains membres arrêtés dans la capitale étaient en possession d’une liste d’adresses dont la sienne... Il est interné à la prison de Loos-lez-Lille, puis transféré à celle de Fresnes où il reste emprisonné quatre mois. Le 11 octobre 1943, alors âgé de 20 ans, il est transféré par des policiers français vers la gare de l’Est pour être déporté en tant que N.N. (Nuit et brouillard) [6]. Il est d’abord enfermé dans le camp de Neue Bremm à Sarrebruck. Il s’agit d’un camp de transit dans lequel la plupart des prisonniers y sont détenus pendant quelques semaines seulement. Mais le but est de les briser avant de les envoyer dans des camps de concentration. Ainsi, le 23 octobre 1943, Roger est transféré dans le camp de concentration de Buchenwald. Il a alors la possibilité de faire adresser un courrier en allemand à ses parents, daté du 21 novembre, par l’intermédiaire d’un autre détenu qui s’adresse à ses « parrain et marraine ». Mais ce n’est pas la fin du voyage car il subit un nouveau transfert au camp de Lublin-Maïdanek où il reste de février à juin 1944, en y travaillant dans un atelier de menuiserie. En juillet 1944, l’administration SS décide, une nouvelle fois, de le déplacer. Il est alors conduit, sous la surveillance d’un garde SS, de prison en prison : Varsovie, Lodz, Pösen, Breslau, Glogau, Leipzig, Francfort, Cassel, Mannheim, Karlsruhe et Strasbourg. Il est finalement enfermé dans le camp de concentration du Struthof, sur la commune de Natzweiller, en Alsace annexée.  le 20 juillet et y reste six semaines. L’avance alliée entraîne, en août 1944, l’abandon du camp et, pour lui, un retour vers l’Allemagne et l’internement dans le camp de Dachau où il porte le n° 99 275. Il est affecté au Kommando d’Allach.  Roger y est libéré par les Américains le 30 avril 1945.<br><img src="res/gégé.jpg"></img><img src="res/certif_gégé.jpg"></img>`)

marker = new L.Marker([50.725416, 3.161052]);
marker.addTo(map);
marker.bindPopup(`<b>Jules Notour</b><br>En juillet 1941, lorsque le gouvernement de Vichy dissout les associations professionnelles, Jules Noutour fait paraître un communiqué dans les postes de police pour protester contre cette mesure en demandant à ses camarades « d’être calmes en attendant des jours meilleurs ». Cette publication a entraîné en décembre 1941 sa révocation de la police par le préfet Fernand Carles.Le 1er septembre 1943, alors qu’il était entré dans la clandestinité dans le contexte de l’occupation allemande, Jules Noutour, quarante-cinq ans, gardien de la paix à Lille-Fives (Nord), fut arrêté par la police de sûreté allemande Révoqué deux ans plus tôt pour avoir tenu des propos anti-allemands, il était effectivement à la manoeuvre d’une filière d’évasion des prisonniers de guerre et de renseignement Son épouse et sa fille, mineure de quatorze ans, furent également arrêtées. Cette dernière, en raison de son jeune âge, fut relâchée le 16 septembre.Interrogé par Kurt Kohl, inspecteur de la Sipo-SD à La Madeleine et torturé atrocement, Jules Noutour fut ensuite condamné par un tribunal militaire allemand à 20 ans de travaux forcés. Il était déporté le 27 janvier 1944 et trouva la mort au camp de Gross-Rosen le 1er février 1945.Son épouse fut internée cinq mois à la prison de Loos, puis transférée à Essen, Ravensbrück, et Mauthausen. Elle fut libérée au printemps 1945.<br><img src="res/juju.jpg"></img>`)

marker = new L.Marker([50.629888, 3.056957])
marker.addTo(map);
marker.bindPopup(`<b>André Pantigny</b><br>André Pantigny est né à Oignies, dans le Pas-de-Calais, le 3 juin 1900, et décédé le 4 décembre 1944 au camp de concentration de Gross-Rosen, en Haute-Silésie (actuellement en Pologne). Militant socialiste dans le Pas-de-Calais, il devient en 1929 secrétaire général de la fédération du Pas-de-Calais de la SFIO et, au congrès de 1934, il impose véritablement sa ligne dans le parti, obtenant la majorité sur le scrutin proportionnel et le vote des femmes. En octobre 1937, il est élu conseiller général du canton de Carvin. En 1938, il mène jusqu'à Barcelone un convoi de cinq camions de vivres et de médicaments pour venir en aide aux républicains espagnols. Dès juillet 1940, il est actif dans la Résistance et vit dans une semi-clandestinité. Il fait du renseignement, distribue des tracts, participe à des journaux clandestins, organise des sabotages et fait plusieurs voyages pour rencontrer les chefs de la Résistance en zone libre. Il devient au début de 1943 le chef départemental du mouvement Libération-Nord. Il est arrêté le 12 juillet 1943 à la gare de Tourcoing par deux policiers français qui croyaient avoir affaire à du marché noir. Après avoir été torturé par la Gestapo, il est incarcéré à la prison de Loos-lez-Lille jusqu'au 27 mai 1944. Incarcéré un temps à la prison de Gross-Strehlitz, il arrive, en compagnie de plusieurs autres résistants, au camp de concentration de Gross-Rosen le 30 octobre 1944 et il y meurt le 4 décembre 1944. Il a été élevé, à titre posthume, au grade de chevalier de la Légion d'Honneur.<br><img src="res/andré.png" width="200"></img>`)

marker = new L.Marker([50.452479, 2.909163])
marker.addTo(map);
marker.bindPopup(`<b>Émilienne Mopty</b><br>Émilienne Mopty  est née le 29 octobre 1907 à Harnes (Pas-de-Calais), guillotinée le 18 janvier 1943 à Cologne (Allemagne.La grève de mai-juin 1941 commença à la fosse 7-7 bis de la Compagnie des mines de Dourges à Montigny. Émilienne Mopty entraîna les femmes à manifester en solidarité avec les mineurs. Elles barrèrent des routes pour empêcher le passage des voitures de police et des automitrailleuses allemandes. La grève s’étendit à l’ensemble du bassin minier.Émilienne Mopty fut arrêtée mais la police n’ayant que sa participation aux manifestations et des présomptions sur son appartenance à la résistance, elle fut libérée et retrouva ses trois enfants. De nouveau arrêtée le 14 mai 1942, elle s’échappa de la caserne de la gendarmerie en passant par la lucarne des toilettes.La presse collaboratrice Écho du Nord, Réveil du Nord et La Dépêche, publia trois photos surmontées du titre « avis de recherche », celles de Moïse Boulanger de Germinal Beudot mineurs à Harnes et celle d’Émilienne. Dans le clandestinité, elle logeait notamment chez Julien Bauduin.Son mari, Adrien Mopty, avait été arrêté et son fils ainé âgé de seize ans avait rejoint les combattants clandestins. La tante Églantine avait recueilli leurs deux fils cadets.Agent de liaison d’un des chefs de la résistance FTPF dans le bassin minier, Charles Debarge, elle transporta des armes et des explosifs et chercha des planques pour les résistants. Elle fut arrêtée par la gendarmerie française d’Arras le 16 septembre 1942, alors qu’avec son groupe elle envisageait d’attaquer un peloton d’exécution près de la citadelle d’Arras.Torturée, traduite devant le tribunal de la Feldkommandantur d’Arras, elle fut condamnée à mort. Les Allemands n’exécutant pas les femmes en France, elle fut déportée le 12 janvier 1943, comme « Nacht und Nebel » (convois de la liste I.76). Elle fut d’abord dirigée vers la prison de Bruxelles puis celle de Cologne. Elle y fut guillotinée le 18 janvier 1943.<img src="res/émilienne.jpg" width="200" style="transform: rotate(-90deg);margin: 50px"></img>`)

marker = new L.Marker([50.292063, 2.777833])
marker.addTo(map);
marker.bindPopup(`<b>Julien Hapiot</b><br>Julien Hapiot prit une grande dimension pendant l’occupation nazie. Entré dans la clandestinité dès les premiers mois de 1940, il y mena une double tâche d’action et d’organisation. Identifié après l’incendie de camions allemands à Vimy en novembre 1940, il mena dès lors une vie d’homme traqué. À la fin de 1940, il était, avec René Camphin, le responsable du PCF clandestin pour le Pas-de-Calais, chargé plus particulièrement de l’organisation militaire.Placé avec Gustave Lecointe et Nestor Calonne à la tête de la Fédération clandestine du PCF du Pas-de-Calais, il fut l’un des principaux organisateurs de la grève des mineurs de mai-juin 1941. De plus en plus activement recherché, il quitta le Pas-de-Calais pour échapper à la Gestapo et à la police française, mais fut arrêté à Blois (Loir-et-Cher). Interné à la prison de la Santé à Paris, il y fut torturé, puis ramené dans le Nord de la France pour une série de confrontations dans les prisons de Béthune, Cuincy et Arras. Il fut condamné à la peine de mort par contumace par la Section spéciale de Douai dès 1941, puis par le tribunal allemand FK 670 d’Arras le 26 août 1943, pour être fusillé le 13 septembre 1943 à Arras.<br><img src="res/julien.png" width="200"></img>`)
