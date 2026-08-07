/*   STEP 1   */
export const leagueID = "1312146993191096320"; // your league ID
export const leagueName = "Originally From Ohio Dynasty League"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2019, the Originally From Ohio Dynasty League began as a means for many to embark on their first journey into the chasms of building their very own dynasty football franchise. Each year, managers compete to have their names etched in immortal stone as Champions, aiming to avoid the ever-humiliating Toilet Bowl.</p>
  <p>Some managers built immediate win-now teams, while others began the slow process of building their dream juggernaut dynasty team. Over the years it has become clear that a portion of the league prioritizes youth and draft picks, while the rest gravitate towards the steadfast value of veterans. While some managers have fled from injuries and tumultuous contract negotiations, others bought the dip and built for their future.</p>
  <p>After years of domination, struggle and humiliation some have been fired to more simpler re-draft leagues, where others have decided to retire whilst at the pinnacle. Nonetheless the league has only gotten stronger. With more passionate managers, the competition has become more intense and more difficult than ever before.</p>
  <p>Since the retiring of the two-time league champ, we have seen a plethora of incredible storylines yet we have yet to see anyone repeat. In 2022-2023 we had back-to-back years where sixth seeded underdogs (@kclark75 and @RichBigMeechy) would go on to have highly unprobable playoff runs that included beating the other in a narrow victory. And coming into 2026, we are coming off back-to-back years in which one team truly stood head and shoulders above the rest and avenged their previous season's championship defeat. The year 2024 saw @timeidens have one of the more dominant seasons ever cruising to the 1-seed and then absolutely obliterating the competition with the #1 and #2 highest scoring playoff performances of all-time. Although the path to the 1-seed was easier for @thomaseidens in 2025 entering the last week of the regular season undefeated, our league saw one of the most dramatic regular season finishes ever. That last week, @thomaseidens was handed a double loss at the hands of his eventual championship foe in @Sengi12 and we saw the playoff bracket completely flip on it's head. To continue with the dramatics, in the championship @Sengi12 went out to an early weekend lead seeing a +90% chance of victory on several occasions yet in the last game of championship weekend, the Chosen one himself Bijan Robinson had the best rushing performance of his career and in one 80 yard touchdown dash stole the victory for @thomaseidens earning him the crown for the first time in his 3rd championship appearance!!</p>
  <p>The year is 2026 and the offseason has been anything but still where several teams have seen quite the makeover with the draft, free agency and trades. It may seem clear who is at the top and who is at the bottom now, but the season is only just beginning...</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "318054040384589824",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Michael Sengelmann",
      "location": "Columbus", // (optional)
      "bio": `<p>Ever since the league's founding in 2019 there has not been a team that has been more downtrodden or carried more misfortune in it's history than this. From lob-sided trades like the infamous "Kelce-Godwin trade" to misguided draft selections like Henry Ruggs III, this team's history has it all.</p>
      <p>However, a stroke of fortune shed it's light when this franchise decided to trade a haul of future draft choices for the #1 draft selection in the 2021 rookie draft. Being a Bengals fan, the selection of Ja'Marr Chase was an easy one, but he did not have the faintest clue for what Chase would eventually become.</p>
      <p>Seen by many now as the #1 overall dynasty asset alongside fellow LSU Tiger, Justin Jefferson, this stroke of good luck seemed to be the beginning of a new era. After a couple seasons of hitting on young receivers along with some major wins in trades, he's built one of the better WR-cores in the league to coincide with a strong cast around them.</p>
      <p>The past two seasons have been by far the best in team history as he achieved the 10th best regular season recorded in league history, averaging 121.88 PPG, winning multiple playoff games, securing the 4th and 6th highest scoring playoff performance of all-time (152.12, 150.48) and making a championship appearance coming oh so close to glory. However fortunate the past couple of years have been, it just so happened that in back-to-back years the season has come to an end at the hands of @thomaseidens and his super team... Led by the Bengals super-stack of Ja'Marr Chase, Chase Brown and Joe Burrow this team is looking to reload and make another run towards a championship in 2026...</p>
      `,
      "photo": "/managers/mike.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Thomas Eidens", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "The goal of this franchise is simple... to go from the depths to the pinnacle with my favorite players in the league in tandem.", // (optional)
    // TODO: automate this based off of total trades...
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "330022379155644416",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Thomas Eidens",
      "location": "Columbus", // (optional)
      "bio": `<p>Coming off back-to-back championship appearances along with this team's first ever championship, the window for dynasty dominance is now. Last year @thomaseidens saw by-far the best regular season this league has ever seen scoring 144.81 PPG (the second highest being 130.64). While last year's regular season was a cake-walk, the playoffs was anything but between the double loss in the last week of the regular season and the dramatic collapse of this team in the championship only to come back at the very last minute... it was nothing short of a miracle and a roller coaster. With 2025 in the past, @thomaseidens is looking to cement this core as not only champions but a dynasty worth commemorating for years to come. The core for 2026 is set and it's clear (for now as @thomaseidens loves to trade), fresh off a new contract, Bijan Robinson is this team's engine surrounded by studs at every other position, @thomaseidens is poised for a championship defense in 2026.</p>`,
      "photo": "/managers/tom.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tim Eidens", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/tim.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6786, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Stay relatively young all while competing for a championship.", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "454143122843103232",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Nick Sophocleous",
      "location": "Columbus", // (optional)
      "bio": `<p>Was a Top 3 contender for years carried by JJettas, Tyreek, and Josh Jacobs but with unfortunate injury age and trades, this team has seen a major makeover as in the middle of the season @NickSoph traded away what seemed like an untouchable dynasty assest in Justin Jefferson for Tee Higgins and a handful of future draft choices. After making several future-focused trades and coming off by-far the league's best draft class led by Jeremiyah Love, @NickSoph is looking to re-build a young core around the afforementioned Arizona stud, the early 2025 standout rookie Emeka Egbuka, the Browns young TE Harold Fannin Jr. and the leader of the Broncos in Bo Nix. See back to this team in 2027/2028 as it will look very different but will likely be back in contention./p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "self", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "https://sleepercdn.com/uploads/fc9a030b91e0381a2059a5566e7dede9.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Used to be Ethan, Now it's Kyle", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "AT LEAST 1 championship within the next three years, book it ✅", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "200649265628848128",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Zach Kirkendall",
      "location": "Columbus", // (optional)
      "bio": `<p>Off the back of a philosophy where "anything can happen once you get to the playoffs," this team has been "stuck in the middle"; either missing the playoffs entirely or bounced out of the first round each year.</p>
      <p>If this team had a spirit animal, it would truly be Lamar Jackson as year-after-year it is one of the better regular season teams consistently competing for the top yet consistently falls short in the playoffs (1-5 playoff record). Last season was no different where after completing a pre-playoff all-in trade to acquire Derrick Henry @zkirk97 made a serious push for contending winning 20 regular season games for a 3rd straight season... no small feat. Yet at the hands of the defending champ, his team fell short of 100 points ending his season in the first round yet again. 2026 looks to be more of the same. By many accounts, @zkirk97's team looks to be entering the 2026 season as at the very worst the 3rd best team in the league with a deep young WR core with plenty of upside, a young and awesome fantasy stud RB in Achane with King Henry filling support and the forever forgotten yet awesome fantasy QB in Dak Prescott... oh and the best overall dynasty TE in Brock Bowers. Yes this year has all the making of greatness all over it, but at this point the regular season doesn't matter anymore for this team... it's all about December Fantasy Football....</p>
      `,
      "photo": "/managers/zach.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Adam Sophocleous", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Capitalize on market value of players today to improve my fantasy team tomorrow", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "734486503249567744",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Will Ortquist",
      "location": "Columbus", // (optional)
      "bio": "You might call it a RE-build, but in our facilities we call it a RE-structure. Always a threat to explode, keep an out for Father William to top the leader board and make a run for the chip around '26/'27. With a young core of Garrett Wilson, Malik Nabers, Jordan Tyson, Omarion Hampton and many more up and comers... this team is right around the corner from making some noise in the regular season. At this stage of the rebuild, @willyorq is on upset watch every single week and it really is just a matter of when the stars align for when this team can seriously start to compete. Watch out in 2026 for splash performances with an eye out on 2027 and beyond for seriously competing for a title.",
      "photo": "/managers/will.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Whoever I am playing", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7606, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "We love rookies. We keep getting older and they stay the same age. Yes they do.", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "316669915576692736",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kyle Pottorf",
      "location": "Columbus", // (optional)
      "bio": `<p>No team has been a better epitome for incredibly consistent irrelevance than my OFODL dynasty team. Consistently finishing between 6-11 has been the norm for my team's troubled past. All of that changes this year…</p>
      <p>Having a team built on young unproven running backs and poorly timed trading of studs set this squad back multiple years. With Cam Akers torn achilles, JK Dobbins torn ACL, Javonte Williams' torn ACL and one of the worst trades of the past couple years (sending Amon Ra and Saquon after the 2021 season for Dobbins and the hobbit himself - Rondale Moore). However… the stars have aligned for a possible darkhorse championship run for @kpott22 led by dynasty darling Jahmyr Gibbs, the CTE candidate Cam Skattebo and a promising WR core that just needs a couple things to go right for things to work out... sunshine, rainbows, hail marys, long TD's and the hope of a long awaited fantasy football title all are hopefully in the cards for 2026. As the great Yoda once said, “Do or do not. There is no try.” @kpott22's plan to DO…and DO it good we shall.</p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "https://sleepercdn.com/uploads/3463c8e6009138203589631d1c9eeb28.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tim, Nick and Father William", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5846, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Do or do not. There is no try.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "322780169012011008",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Tim Eidens",
      "location": "Westerville", // (optional)
      "bio": `<p>Top 3 in official betting odds to win the championship this year. This team has seen every end of the spectrum from a complete dumpster fire and now the top of the mountain. The rebuild may have taken a little longer than originally expected, but of course @timeidens is happy to be where they are now. @timeidens has had some pretty decent draft picks pan out over the years (Tee Higgins, Jaylen Waddle, Joe Burrow, etc.) along with some of the worst draft picks in league history (Denzel Mims and Keshawn Vaughn in the 1st rounds). Coming off of several years in a row of seriously competing for a title, including a title run in 2024, this team is looking to bounce back to the top of the mountain on the shoulders of JJettas, Pickens, Saquon (again), Jayden Daniels, McBride and a slew of upside prospects behind them for 2026!</p>
      `,
      "photo": "/managers/tim.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Thomas Eidens", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/tom.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7526, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Don't get stuck with the unwanted baggage", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "332210266198528000",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "AJ Cardarelli",
      "location": "Cincinnati", // (optional)
      "bio": `<p>Look, this team maybe hasn't been here very long yet but its clear the Big Meeches have been established as an elite team and one of the coolest championship runs in recent years. Unfortunately the wheels for this championship window seemed to have truly fallen off last year despite being the high scorer in week 1, went on to 5-21 after that point. Whether it was injuries, poor trades or lack of depth the win-now window has seemed to have shut close for now yet with the drafting of young stud Carnell Tate 2nd overall, the arrows are pointing up... Perhaps not in 2026, but definitely in years to come. For when the time comes, this team's philosophy is to "win games" and my long term goal is to "win (more) games". Bet you didn't see that coming. Fuck the noise about "win now", "rebuild", or some other outdated terminology, here at the Big Meeches we will move pieces, make trades, and more without stupid labels.</p>
      `,
      "photo": "/managers/aj.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 1942, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Lucas, Mike, Will", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4881, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Win Games", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 1, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "459771841238528000",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Sam Shovlin",
      "location": "Louisville, KY (by way of Columbus, OH)", // (optional)
      "bio": `<p>Like many in this league, this was this manager's first ever dynasty league, and without knowing better, @samshov drafted as if it was a redraft league with zero regard for the future. It paid dividends right away as in the inaugural season, @samshov was a legitimate contender, but fell short in the finals (despite drafting Andrew Luck in the 4th round of the startup two weeks prior to his surprise retirement). After squeeking into the playoffs in the league's second year, a first round exit would be the last playoff appearance for @samshov since... Instead of realizing that the team was trending down and working towards a rebuild, the second place finish and then a playoff appearance gave the franchise the confidence to further push chips all-in for future seasons, trading away future draft picks for aging vets trying to extend the window for as long as possible. This is where the problems started. One major lowlight being when @samshov more or less traded 3 first round picks for an aging Mike Davis, an aging Julio Jones and an aging DeAndre Hopkins. See the trend? These bad trades coupled with an aging roster led me to where this team sits today. After missing out on what should have been premier rookie picks with an aging roster, finally @samshov realized their attention should be turned to a rebuild. With a new found eye to the future, @samshov shipped off veteransfor roster depth, draft choices, and young pieces. Unfortunately despite the draft selection of Puka Nacua, the stars haven't quite yet aligned where in back-to-back seasons with the year already decidedly over @samshov had top tier weekly finishes towards the end of the season. Clearly the upside is there with this team... the pieces have just not quite yet been put together in the right way...</p>
      `,
      "photo": "/managers/sam.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Blaine", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4881, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "2025 Here We Come: Life is too short to be rebuilding a dynasty team forever", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "459765109074423808",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kyle Clark",
      "location": "Columbus", // (optional)
      "bio": `<p>Historically one of the least successful teams in league history with season finishes of 10th (2019), 11th (2020) and 10th (2021), @kclark75 saw a meteoric rise in success from 2022-2025 catapulted by an unfathomable championship run in 2022. Squeeking into the playoffs as the 6th seed in 2022 with a record of 17-11, @kclark75's team went on an incredibly improbable championship run where he tallied by far the lowest playoff point differential in league history with 13.94 points through 3 games!! For perspective, the next closest was recorded by Ethan's championship run in 2020 with 37.14 points. Following this miraculous championship run many in the league doubted any chance at a title defense, however the @kclark75 WAGON was nearly unstoppable in his title defense! This past season was the first year that @kclark75 has missed the playoffs as aging RBs with declining roles finally started to catch up to his team. However, with a stroke of luck many of his core players saw upgraded situations with the most notable being Kenneth Walker joining the Chiefs for the 2026 season so we shall see if last year was just a hiccup or the beginning of the end...<p/>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "avatarLink": "https://sleepercdn.com/uploads/b2dfd06d8a943bb2f871849414985a73.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "???", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Become the Next great dynasty following Ethan's exit!", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "316633830263902208",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Lucas Pottorf",
      "location": "Columbus", // (optional)
      "bio": `<p>Like Steelers fans, when you ask this manager about his participation in this league, he'll likely reference you to the past. As this league's first ever champion in 2019, @pottluke started his dynasty league management as one of the league's most consistent teams with finishes of 1st (2019), 3rd (2020), 4th (2021) and 6th (2022). But you see the trend? Following the consistency of making every playoff since this league's founding, @pottluke is currently in the 4th year of a rebuild that started back in 2023. That's a long time for a rebuild you may ask? Well in 2023, he tore his team down to the bare minimum of roster construction so that he could earn the 1st overall draft choice and select, at the time, Ohio State Superstar Marvin Harrison Jr... Well since then Marv hasn't quite lived up to his namesake and despite the high draft choices, @pottluke's rebuild hasn't quite built the young core it once dreamt of. The rebuild may finally be nearing it's end with a core of Drake Maye, Ashton Jeanty, Chris Olave, Marvin Harrison & Jadarian Price all being very young and hopeful pieces to build a dynasty team around yet the depth still needs work... Come back next year after the rookie draft and this team will likely look very different in 2027...</p>
      `,
      "photo": "https://sleepercdn.com/uploads/3ec5f6c8869b08667e948f9c984c1ad0.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kyle Pottorf", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Marv, mArv, maRv, marV, MaRv, mArV, mARV, MaRV, MArV, MARv, MARV, MARV, MARV????", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "459771187564638208",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Blaine Hunkins",
      "location": "Columbus", // (optional)
      "bio": `<p>Though this team had a rough start in 2019 finishing last, since it saw a run at being historically one of the league's most consistent teams making the playoffs each of the next three seasons and ending with finishes of 2nd (2020), 3rd (2021) and 4th (2022) as well as earning a 1st round bye in 2022. Unfortunately as this team was extremely competitive for many consecutive seasons, it appears that the expiration date came without a ring as @bhunk3 fully committed to rebuilding in 2023, even changing his team's name to fit. After a few years of successful drafting, @bhunk3 has built a relatively competitive young core even making the playoffs in improbably fashion in 2025 as one of the fastest turnarounds in league history! Coming off a playoff appearance, this team is looking to build it's RB depth to compete and start a true championship window around the likes of TreVeyon Henderson, Drake London, Tyler Warren, Rome Odunze, Tetoroia McMillan, Jaylen Waddle and more for 2026!</p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "avatarLink": "https://sleepercdn.com/uploads/dedbb028a0fd1cc1182562222f4d5e59.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "???", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8137, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Can't wait for the 2024 draft!!!", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "459901710429581312",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Ethan Fernandez",
      "location": "Columbus", // (optional)
      "bio": `<p>Here lies the remnants of the retired back-to-back champ</p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      "avatarLink": "https://sleepercdn.com/avatars/thumbs/4ba072e6248388d12d79bfee723b9155", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      // "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Retired", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "N/A", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4663, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Win and Quit once my team ages out", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 0, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "322783015971332096",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Alec Carovillano",
      "location": "Cincinnati", // (optional)
      "bio": `<p>Here lies the remnants of the relegated non-existent trade partner...</p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      "avatarLink": "https://sleepercdn.com/avatars/thumbs/5dadf4f70e824e3506646f13fc2105d4", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      // "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Retired", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "N/A", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4881, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Wait I was in a dynasty league?", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 0, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    