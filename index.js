const { Client, Intents, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const json_data = require("./data.json");


function birthday_reader(){ //evantually implement list for each value
    for (let date in json_data){
        if(date == currDay){
            return json_data[date];
        }
    }
    return "false";
}




//get date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var currDay = mm + '/' + dd;

client.once(Events.ClientReady, c => {
    console.log(`lel. logged in as ${c.user.tag}`);
    //client.user.setAvatar("bot_pfp.PNG");
    //client.users.send('267777269068464129', 'lel');
    let birthday_names = birthday_reader();
    if (birthday_names == "false"){
        console.log("no ones birthday today :(");
        
    } else {
        let all_names = "";
        for(let i = 0; i < birthday_names.length; i++){
            if(i == 0 && i+1 == birthday_names.length){
                all_names = all_names + birthday_names[i];
            } else if(i+1 == birthday_names.length){
                all_names = all_names + "and " + birthday_names[i];
            } else {
                all_names = birthday_names[i] + ", " + all_names;
            }   
        }

        //now make bot ping everyone to announce a birthday

        const channel = client.channels.cache.get('1123790896123617373');
        
        channel.send('everyone it\'s ' + all_names + 's birthday today!');


        console.log(all_names);

        
        


    }


    //check if current date (day) matches any keys. if they do then dm mensun it's the [value] birthday
    //call a function from another app in java to read a file if we cant get read from discord to work

    //console.log(currDay);
    

    

})


client.login(token);
/*
client.on('ready', () => {
    console.log("Bot has logged in.");
});
*/


    


