/*   STEP 1   */
export const leagueID = "1050629132641607680"; // your league ID
export const leagueName = "Originally From Ohio Dynasty League"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2019, the Originally From Ohio Dynasty League began as a means for many to embark on their first journey into the chasms of building their very own dynasty football franchise. Each year, managers compete to have their names etched in immortal stone as Champions, aiming to avoid the ever-humiliating Toilet Bowl.</p>
  <p>Some managers built immediate win-now teams, while others began the slow process of building their dream juggernaut dynasty team. Over the years it has become clear that a portion of the league prioritizes youth and draft picks, while the rest gravitate towards the steadfast value of veterans. While some managers have fled from injuries and tumultuous contract negotiations, others bought the dip and built for their future.</p>
  <p>After years of domination, struggle and humiliation some have been fired to more simpler re-draft leagues, where others have decided to retire whilst at the pinnacle. Nonetheless the league has only gotten stronger. With more passionate managers, the competition has become more intense and more difficult than ever before.</p>
  <p>Recently there have been massive moves that have shaken the very foundation of the league. With the two time league champ retired, and league activity at an all-time high there is room for a new dynasty to begin.</p>
  <p>Coming off of a season where the sixth seeded Kyle Clark went into his first playoff appearance only to go on and win his first Championship, there have been a plethora of massive trades, moves and acquisitions that leave this upcoming season to chance...</p>
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
      "bio": `<p>Ever since the league's founding in 2019 there has not been a team that has been more downtrodden or carried more misfortune in it's history than this. From lob-sided trades like the infamous "Kelce-Godwin trade" to misguided draft selections like Jalen Raegor, this team's history has it all.</p>
        <p>However, a stroke of fortune shed it's light when this franchise decided to trade a haul of future draft choices for the #1 draft selection in the 2021 draft. Being a Bengals fan, the selection of Ja'Marr Chase was an easy one, but he did not have the faintest clue for what Chase would eventually become.</p>
        <p>Seen by many now as the #1 overall dynasty asset alongside fellow LSU Tiger, Justin Jefferson, this stroke of good luck seemed to be the beginning of a new era. In the following two drafts, The Ja'Mazing Chase would go on to select three wide receivers that would shape out a promising young core that is amongst the best in the league with Chris Olave, George Pickens and now rookie Jaxon Smith-Njigba.</p>
        <p>To compliment this young core, The Ja'Mazing Chase has made a trio of massive moves to acquire the necessary Running Back stable to compete with the best of the best. These moves overall resulted trading three first round draft selections in 2023, 2024 and 2025 for Running Backs Najee Harris, Nick Chubb and Austin Ekeler with one of those trades being the leagues very first four-team trade...</p>
        <p>While these moves have firmly placed this team in a win-now mode, the hardest part of the journey has yet to come as this season unlike any other has seen an arms-race, akin to the AFC, where the top of the top teams have been accumulating talent left and right.</p>
      `,
      "photo": "/managers/mike.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Lucas Pottorf, AJ Cardarelli, Will Ortquist", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Similar to that of last year's champion in Kyle Clark, the goal of this franchise is to go from the depths to the pinnacle.", // (optional)
    // TODO: automate this based off of total trades...
      "tradingScale": 3, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "330022379155644416",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Thomas Eidens",
      "location": "Columbus", // (optional)
      "bio": `<p>My team's identity has kind of been all over the place since this league kicked off. I've added some key pieces (Tee Higgins, Cooper Kupp, Joe Mixon, Tony Pollard, Jonathan Taylor) through trades to what was a solid foundation (Ceedee Lamb, Garrett Wilson, Devonta Smith, Bijan Robinson, Trevor Lawrence, Anthony Richardson). I have moved off all my picks in the next two drafts, but hoping the youth of my team and depth I've added makes the transition easier next time I choose to rebuild.</p>`,
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
      "bio": `<p>Top 3 contender carried by JJets, Tyreek, and Josh Jacobs.</p>
      <p>Best team moves this far include drafting JuJu Smith-Schuster at the 1.11 in the startup draft and trading jalen hurts for a third round pick (S/O Kyle Pottorf for the assist)</p>
      <p>Salty AsF for not winning last year, saltier that I lost to the dude whose second round pick I traded for earlier in the year assuming it’d be a top 3 second round pick.</p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "self", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "https://sleepercdn.com/uploads/fc9a030b91e0381a2059a5566e7dede9.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
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
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "200649265628848128",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Zach Kirkendall",
      "location": "Columbus", // (optional)
      "bio": `<p>Off the back of a philosophy where "anything can happen once you get to the playoffs," this team has been "stuck in the middle"; either missing the playoffs entirely or bounced out of the first round each year.</p>
      <p>After a tumultuous season of injuries and under-performance from expected studs (looking at you, Jonathan Taylor), the team was two catches by Jonnu Smith away from the dynasty community's crowned jewel: Bijan Mustardson. Unfortunately, Jonnu Smith's stone hands and butter fingers meant Atlanta's new shiny toy was not in the cards.</p>
      <p>After a spiritual journey known by many as the 2023 offseason, the team completed a Darkness Retreat (TM) to understand where it all went wrong and how it can regroup to come back stronger than ever.</p>
      <p>Fast forward to the beginning of the 2023 season, the team looks a lot different. Jonathan Taylor was shipped away for what the team hopes is an early 2024 first round pick. AJ Brown was traded for young second-year WR Treylon Burks and third-year TE Kyle Pitts. Together, Burks, Pitts, first round pick Jordan Addison and the power of the Moore Infinity Gauntlet (DJ, Elijah, Skyy and Rondale) hope to usher in a new era of fantasy points, weekly high scores, and fantasy championships.</p>
      `,
      "photo": "/managers/zach.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
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
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "734486503249567744",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Will Ortquist",
      "location": "Columbus", // (optional)
      "bio": "You might call it a RE-build, but in our facilities we call it a RE-structure. Then we call you a RE-tard. Always a threat to explode, keep an out for Father William to top the leader board and make a run for the chip around '25/'26.",
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
      "tradingScale": 0, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "316669915576692736",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kyle Pottorf",
      "location": "Columbus", // (optional)
      "bio": `<p>No team has been a better epitome for incredibly consistent irrelevance than my OFODL dynasty team. Consistently finishing between 6-11 has been the norm for my team's troubled past. All of that changes this year…</p>
      <p>Having a team built on young unproven running backs and poorly timed trading of studs set my squad back multiple years. With Cam Akers torn achilles, JK Dobbins torn ACL, Javonte Williams torn ACL and one of the worst trades of the past couple years (sending Amon Ra and Saquon after the 2021 season for Dobbins and the hobbit himself - Rondale Moore).</p>
      <p>However…the stars have aligned for a possible darkhorse championship run for “Fields of Dreams”. Led by breakout star QB Justin Fields, a strong core of running back breakout candidates, and the everlasting DK Metcalf shine light on a brighter future that lies ahead. One with sunshine, rainbows, hail marys, long TD's and the hope of a long awaited fantasy football title. As the great Yoda once said, “Do or do not. There is no try.” The “Fields of Dreams” plan to DO…and DO it good we shall.</p>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "avatarLink": "https://sleepercdn.com/uploads/3463c8e6009138203589631d1c9eeb28.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tim, Nick and Father William", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5846, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Do or do not. There is no try.", // (optional)
      "tradingScale": 3, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "322780169012011008",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Tim Eidens",
      "location": "Westerville", // (optional)
      "bio": `<p>Top 3 in official betting odds to win the championship this year.</p>
      <p>My team has seen every end of the spectrum from a complete dumpster fire and now the top of the mountain. The rebuild took a little longer than originally expected, but happy to be where we are now.</p>
      <p>I've had some pretty decen draft picks pan out over the years(Tee Higgins, Jaylen Waddle, Joe Burrow, etc.) along with some of the worst draft picks in league history (Denzel Mims and Keshawn Vaughn in the 1st rounds)</p>
      <p>Acquiring the likes of AJ Brown, Patrick Mahomes, Travis Kelce and company my team is in prime position to contend for the next 2-3 years.</p>
      `,
      "photo": "/managers/tim.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
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
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "iMessage",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "332210266198528000",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "AJ Cardarelli",
      "location": "Cincinnati", // (optional)
      "bio": `<p>Look, I may not have been here very long yet but its clear the Big Meeches have been established as an elite team and my management skills are clearly unparalleled by the other trash teams in the league. I knew Brock Purdy was going to take me to the promised land last year but the NFL is rigged.</p>
      <p>Lets talk about my players, why are you still reading this?</p>
      <p>I hate the Ravens but Lamar and Zay get a pass OK? I have high hopes for these young players especially Pierce, Flowers, and Metchie (Fuck cancer, but if he sucks he gone). Russ needs to fucking cook. And other than that I got a few older stars that hopefully will not get injured when I need them at the end of the year.</p>
      <p>My philosophy is "win games" and my long term goal is to win games. Bet you didn't see that  coming. Fuck this noise about "win now", "rebuild", or some other outdated racist terminology, here at the Big Meeches we will move pieces, make trades, and more without stupid labels.</p>
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
      "bio": `<p>This was my first dynasty league, and without knowing better, I drafted as if it was a redraft league with zero regard for the future. It paid dividends right away as the first year I had a legitimate contender, but fell short in the finals finishing in second place (despite drafting Andrew Luck in the 4th round of the startup and him retiring two weeks later). I squeaked into the playoffs the second year of the league following the second place finish, but had a decisive first round loss.</p>
      <p>Instead of realizing I was trending down and working towards a rebuild, the second place finish and then a playoff appearance gave me the confidence to further push my chips all in, and I traded away future draft picks for aging veterans who I believed were able to help me stay in win now mode. This is where the problems started. I more or less traded 3 first round picks for Mike Davis, Julio Jones and DeAndre Hopkins. These bad trades coupled with an aging roster led me to where I am today. I finished 4th to last in the third year of the league and in last place last year, but didn't have my own first rounder either year (which yielded Garrett Wilson and Bijan Robinson). I am now projected to finish in the bottom 3 next year, but I do not have my first round pick next year either.</p>
      <p>After missing out on what should have been premier rookie picks whilst having an aging roster, I realized my attention should be turned to a rebuild. With still a lack of premier draft picks in 2024, halfway through last season and into the offseason, I changed my focus to the future and fleshing out my roster. With a new found eye to the future, I shipped off veterans Jalen Hurts, Derrick Henry, DeAndre Hopkins, James Conner and Najee Harris into roster depth, draft picks, and young pieces - including Christian Watson, Dotson, QJ, Kamara, Eli Mitchell, Kendre Miller, Rashee Rice, Alec Pierce, LaPorta, Tillman and more. Now I have plenty of young talent, and I am crossing my fingers that at least a handful of them break out as top tier fantasy assets in order for my team to compete by the 2025 season.</p>
      `,
      "photo": "/managers/sam.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "avatarLink": "link to image", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
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
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "459765109074423808",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kyle Clark",
      "location": "Columbus", // (optional)
      "bio": `<p>Historically one of the least successful teams with finishes of 10th (2019), 11th (2020) and 10th (2021) has seen a meteoric rise in success over the past couple seasons catapulted by an unfathomable championship run this past year in 2022.</p>
      <p>Squeeking into the playoffs as the 6th seed in 2022 with a record of 17-11, Clark's team went on an incredibly improbable championship run where he tallied by far the lowest playoff point differential in league history with 13.94 points through 3 games!! For perspective, the next closest was recorded by Ethan's championship run in 2020 with 37.14 points.</p>
      <p>Following this miraculous championship run many in the league doubted any chance at a title defense, however the Clark WAGON has been nearly unstoppable through the first half of the fantasy season with a 13-1 record through 7 weeks.</p>
      <p>What else could be in store for this historical turnaround??<p/>
      `,
      "photo": "self", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "avatarLink": "https://sleepercdn.com/uploads/b2dfd06d8a943bb2f871849414985a73.jpg", // (optional) go to go to https://api.sleeper.app/v1/league/<your_league_id>/users under metadat.avatar
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
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
      "bio": `<p>This league's first ever champion as well as one of the league's hisotically most consistent teams with finishes of 1st (2019), 3rd (2020), 4th (2021) and 6th (2022).</p>
      <p>Following the consistency of making every playoff since this league's founding, Luke is entering the 2023 season with one goal and one goal only... And his name is Marvin Harrison Jr.</p>
      <p>Since this team won the championship in 2019, though it consistently made the playoffs it also consistently fell short of a second title leading to the ultimate decision to tear down and start over.</p>
      <p>After most recently trading away Jalen Hurts, this roster as it stands right now is easily one of the worst fantasy football rosters ever assembled and will be consistently battling for the All-Time Single Week Scoring Low week in and week out until further notice...</p>
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
      "philosophy": "Marv, mArv, maRv, marV, MaRv, mArV, mARV, MaRV, MArV, MARv, MARV, MARV, MARV!!!!", // (optional)
      // TODO: automate this based off of total trades...
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Signal",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "459771187564638208",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Blaine Hunkins",
      "location": "Columbus", // (optional)
      "bio": `<p>Though this team had a rough start in 2019 finishing last, since it has been historically one of the league's most consistent teams making the playoffs each of the next three seasons and ending with finishes of 2nd (2020), 3rd (2021) and 4th (2022) as well as earning a 1st round bye in 2022.</p>
      <p>Unfortunately as this team was extremely competitive for many consecutive seasons, it appears that the expiration date came without a ring as Blaine has fully committed to rebuilding in 2023, even changing his team's name to fit.</p>
      <p>After selling many big name players over the course of the past year, Blaine has accumulated four 2024 1st round picks including his own with the hope that those picks along with some of his younger players will return his team to relevancy within the next year or two.</p>
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
      "tradingScale": 10, // 1 - 10 (optional)
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
    