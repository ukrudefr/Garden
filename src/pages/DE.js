import React from "react";
import { useTranslation } from "react-i18next";

const DE = () => {

	const { t } = useTranslation();

	if (localStorage.getItem('lng') === 'de')
	return (
		<>
		<main className="main">
		<h1 id="januar">{t("january")}</h1>
		<p>Der Garten schläft tief. Nichts zu tun. Er schläft tief und fest, wegen Schnee und Frost sogar noch tiefer.</p>
		<h4>Bäume und Sträucher:</h4>
			<ul> 
				<li>
					Es ist besser, mit dem Schnitt der Bäume bis Mitte Februar oder sogar Ende Februar zu warten. 
					Nach extremer Kälte können Sie die Pflanzen, 
					die im Weg sind und die durch Frost beschädigt wurden, 
				</li>
				</ul>
				<h4>Der Gemüsegarten:</h4>
				<ul>
				<li>Bodenvorbereitung: Wenn der Boden nicht gefroren ist, bereiten Sie den Gemüsegarten für den nächsten Saison durch tiefes Graben vor.  
					Durch die Kälte werden die großen Klumpen aufgebrochen. 
					Verteilen Sie unverrotteten Mist auf der Oberfläche  (etwa ein Drittel der Oberfläche pro Jahr).</li>
				</ul>
			<h4>Die Vorbeugung beginnt jetzt:</h4>
			<ul>
			<li>
				Obstbäume beherbergen in den Falten ihrer Rinde viele Eier, Larven und Sporen von Parasiten und Krankheiten, 
				von denen sie letztes Jahr betroffen waren. 
				Um sie zu desinfizieren und die Krankheiten zu vorbeugen, 
				fangen Sie mit Winterbehandlung an. </li>
			</ul>
			<h4>Winterblumen:</h4>
			<ul>
				<li>Botanischer Krokus</li>
				<li>Helleborine</li>
				<li>Schneepflug</li>
			</ul>
			<h4>Es ist Zeit zu ernten:</h4>
			<ul>
				<li>Kopfsalat und Friseesalat</li>
				<li>Rosenkohl, Grünkohl</li>
				<li>Spinat, Feldsalat, Löwenzahn</li>
				<li>Endives</li>
				<li>Lauch</li>
			</ul>
		<h1 id="februar">{t("february")}</h1>
				  <p>Draußen im Garten gibt es nichts zu tun.</p>
				  <h4>Gemüsegarten:</h4>
					  <ul>
						  <li>Bewahren Sie die Asche vom Kamin und Grill auf. Die können Sie 
							ab nächsten Monat gegen Schnecken verwenden. 
							Geben Sie die Asche am Fuß von Obstbäumen und Sträuchern ein.
							Die Asche ist reich an Kali und fördert die richtige Reifung der Früchte. 
							Endlich, Sie können auch den Komposthaufen bereichern.
						  </li>
						  </ul>
						  <h4>Es ist Zeit zu ernten:</h4>
						  <ul>
							  	<li>Kopfsalat und Friseesalat</li>
								<li>Rosenkohl, Grünkohl</li>
								<li>Spinat, Feldsalat, Löwenzahn</li>
								<li>Endives</li>
								<li>Lauch</li>
								</ul>
								<h4>Im Februar in eine Kiste säen:</h4>
						 <ul>
						  <li>
							Gemüse: Auberginen, Kopfsalat, Chilischoten, Paprika, Tomaten.
							Blumen: einjährige Begonie, maritime Aschenblume, Heliotrop.</li>
					  </ul>
				  
				  <h1 id="märz">{t("march")}</h1>
				  <p>Es ist der Monat des Frühlings. Bevor die Blätter erscheinen, 
					behandeln Sie die Bäume vorbeugend mit einem Produkt auf Kupferbasis 
					Legen Sie einen Ring aus Klebepapier um den Baumstamm, um zu vorbeugen, dass die 
					Schädlinge und die Flüchtlinge zu den Blättern und Früchten hinaufzuklettern können. 
				  </p>
				  <h4>Der Gemüsegarten:</h4>
				  <ul>
				  <li>Karotten säen, nachdem Sie den Boden gründlich bearbeitet haben.</li> 
				  <li>Rüben, Bohnen und Radieschen je eine Reihe säen.</li>
				  <li>Pikieren Sie bereits gesäte Tomaten und bewahren die in einem warmen Ort. </li>
			  </ul>
			  <h4>Die Vorbeugung</h4>
			  <p> Sobald die Knospen anschwellen, 
				sprühen Sie Mehrzweck-Insektizid gegen die Apfelmotte ein.
			  </p>
				  <h1 id="april">{t("april")}</h1>
				  <p>"Der April macht was er will."
				  Mit der Umstellung auf der Sommerzeit der Tag wird länger und wir können nach dem Arbeitstag im Garten arbeiten.
					Bessere Entspannung und Fitness gibt es nicht.
					Sie müssen gar nicht ins Fitnessstudio gehen!</p>
				  <ul>
					  <li>Säen Sie die widerstandsfähigsten einjährigen Blumen direkt an Ort und Stelle: Kapuzinerkresse, Kosmos, Kornblumen, Ringelblumen, Königinnen, Gänseblümchen, Lavatères, Immergrüne ...</li>
					</ul>
					  <h4>Rosenbusch:</h4>
					  <ul>
					  <li>
					  Beginnen Sie alle 15 Tage bis 3 Wochen mit vorbeugenden Behandlungen gegen Rosenstrauchkrankheiten und gegen Blattläuse. Zu Beginn eines Anfalls sind die Behandlungen wirksamer.</li>
				  </ul>
				  <h4>Gemüse:</h4>
				  <ul>
					  <li>Es ist die Zeit die Rote Bete, Karotten, Kohlrabi, Rüben, Zwiebeln, Salat in Reihen im Garten aussäen.</li>
					  <li>Selleriewurzel, Selleriestangen und Blumenkohl pikieren</li>
					  <li>Säen Sie weiterhin alle 15 Tage Radieschen aus.</li>
				  </ul>
				  <h1 id="mai">{t("may")}</h1>
				  <p>Die Sonne erwärmt die Erde und die Natur erwacht vor unseren Augen zum Leben. Wir können bereits unsere Setzlinge pflanzen.
					Ende Mai, wenn die Tempratur über Nacht nicht weniger als 10° hält, kann man die Tomaten, Auberginen, Paprika und Zucchini einpflanzen.
				  </p>
				  <h4>Rosenbusch</h4>
				  <ul>
					  <li>
					  Sprühen Sie vorbeugend ein Gesamtpflegeprodukt auf die Rosensträucher gegen verschiedene
					  Krankheiten, für die sie anfällig sind.
					  Mischen Sie Kaffeesatz zu ihren Füßen: Es handelt sich um ein Stärkungsmittel, dessen abweisende Wirkung auf Parasiten wirkt.</li>
					  <li>Gartenchrysanthemen und Herbstastern pflanzen.</li>
					  <li>Installieren Sie in der zweiten Maihälfte Pheromonfallen in Apfel- und Birnbäumen gegen den Apfelwickler.
					  </li>
				  </ul>
				  <h1 id="juni">{t("june")}</h1>
				  <p>Der Juni ist der Monat voller Gartenarbeit und insbesondere der Rosen.</p>
				  <h4>Rosenbusch</h4>
				  <ul>
					  <li>
					  Entfernen Sie verblühte Rosen, während sie entjungfern.</li>
					  <li>Behandeln Sie bereits gut entwickelte Kartoffeln mit einer Bordeaux-Mischung gegen Kraut- und Knollenfäule.</li>
					  <li>Wenn die Knoblauch- und Zwiebelblätter nicht schnell genug reifen, schichten Sie sie schichtweise ein.</li>
					  <li>Schneiden Sie alle Ausläufer ab, die die Erdbeerpflanzen in dieser Saison auszustoßen beginnen. Je früher sie eliminiert werden, desto besser.
					  </li>
					  </ul>
					  <h4>Es ist die Zeit zu ernten:</h4>
					  <ul>
					  <li> Knoblauch, Dill, Kerbel, Schnittlauch, Estragon, Minze, Petersilie, Rosmarin, Salbei, schwarze Johannisbeere, Kirschen, Erdbeeren, Johannisbeeren, Erbsen, Kartoffeln, Rucola.
					  </li>
				  </ul>
				  <h4>Die Verbeugung:</h4>
				  <ul>
					  <li>Behandeln Sie Himbeersträucher mit einem organischen Insektizid auf Basis von Rotenon oder Pyrethrum. Das ist eine Vorbeugung gegen das Eindringen von Himbeerwürmern.</li>
					  <li>Besprühen Sie die Tomaten und Kartoffeln mit Bordeaux-Mischung zur Bekämpfung gegen Falschen Mehltau, bevor Symptome auftreten, einmal etwa Mitte Juni, dann alle 3 Wochen bis Ende Juli. 
					  </li>
				  </ul>
			  <h4 id="juli">{t("july")}</h4>
				  <p>Sommerferienzeit.</p>
				  <h4>Gemüse:</h4>
				  <ul>
					  <li>Ab Mitte Juli Chicorée in Reihe säen.</li>
					  <li>Pflanzen Sie Brokkoli, Rosenkohl, Grünkohl, Winterlauch und Radieschen.</li>
				  </ul>
				  <h1 id="august">{t("august")}</h1>
				  <p>Die Sonne, die Hitze, das Leben und nicht wirklich die schwere Gartenarbeit.</p>
				  <h4>Rosenbusch</h4>
				  <ul>
				  Beschneiden Sie nicht blühende Rosenbüsche.
					  <li>Spinat und Feldsalat aussäen.</li>
					  <li>Säen Sie Chinakohl vor Mitte August in einer Reihe im Gemüsegarten aus.</li>
				  </ul>
				  <h4>Die Vorbeugung:</h4>
				  <p>
				  Setzen Sie die vorbeugende Behandlung gegen Rosenstrauchkrankheiten mindestens einmal alle 3 Wochen fort. Und wiederholen Sie zu Beginn des Monats die Behandlung gegen Falschen Mehltau an Ihren Tomatenpflanzen.</p>

			   <h1 id="september">{t("september")}</h1>
				  <p>Die Pflanzen brauchen nur wenig Zeit. Nutzen Sie diese Momente um die Natur zu genießen. 
				  </p>
				  <h4>Gemüse</h4>
				  <ul>
					  <li>
					 Säen Sie die Wintersalaten, Spinat, Feldsalat, Rucola aus.</li>
					  </ul>
					  <h4>Ernte:</h4>
					  <ul>
					  <li> Auberginen, Rote Bete, Karotten, Zucchini, Himbeeren, Äpfel und Birnen, Radieschen und Tomaten.</li>
				  </ul>
			 	  <h1 id="oktober">{t("october")}</h1>
				  <p>Die Blätter fallen. Die Natur schläft ein und hinterlässt uns ein spektakuläres, feuerfarbiges Bild und Spuren, die wir noch wegräumen müssen.</p>
					  <ul>
						  <li>Beenden Sie das Pflanzen der Frühlingsblumen für nächstes Jahr.</li>
						  <li>Entfernen Sie alle abgestorbenen einjährigen Blüten.</li>
						  <li>Säen Sie Edelwicken in Töpfe, um sie an einem geschützten Ort im Garten aufzubewahren.</li>
						  <li>Rucola und Kerbel fertig aussäen.</li>
						  <li>Knoblauch und Zwiebeln pflanzen.</li>
						  <li>Den Sellerie und den Lauch mit einer Schicht abgestorbener Blätter bedecken.</li>
						  </ul>
						  <ul>
						  <h4>Ernte:</h4>
						  <li> Rote Bete, Brokkoli, Karotten, Sellerie, Chicorée, Kohl, Spinat, Feldsalat, Lauch, Paprika, Radieschen, Zucchini.</li>
					  </ul>

				  <h1 id="november">{t("november")}</h1>
				  <p>Der November ist wohl der traurigste Monat des Jahres.Gartenarbeit ist jetzt den Wochenenden vorbehalten...</p>
					  <ul>
						  <li>Mischen Sie zersetzten Kompost oder einen Volldünger an den Füßen der Sträucher ein.</li>
						  <li>Schützen Sie zu Beginn des Monats die Erde am Fuß des Rosmarins und des Lorbeers unter einer Schicht abgestorbener Blätter.</li>
						  </ul>
						  <ul>
						  <h4>Die letzte Ernte:</h4>
						  <li> Rote Bete, Karotten, Kohl, Spinat, Feldsalat.</li>
					  </ul>
			 	  <h1 id="dezember">{t("december")}</h1>
				  <p>Ah, diese festliche Atmosphäre, die den ganzen Monat über in der Luft liegt! Der Garten ist ein wenig vergessen, er braucht diesen Monat nicht viel Pflege.</p>
				  <h4>Obsbäume:</h4>
				  <ul>
					  <li>
					 Wenn es nicht zu kalt ist, reinigen Sie die Stämme von Obstbäumen und Sträuchern. Sprühen Sie Weißölen zur Beseitigung von Parasiten, die unter der Rinde überwintern.</li>
				  </ul>
				  </main>
		</>
	)
}

export default DE 