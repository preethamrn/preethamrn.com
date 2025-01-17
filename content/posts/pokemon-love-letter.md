---
title: "Using ChatGPT to make a Pokémon theme of my favorite card game"
link: "pokemon-love-letter"
description: "ChatGPT is really great at some things but at other times, it's so incompetent that I feel like giving up"
date: 2024-02-16
timeToRead: 10
tags: ["Life", "Programming"]
---

Most people know by now that ChatGPT (and other AI tools) are incredibly impressive at some things and terribly stupid at others. But I'd never actually properly tested that for myself... until now. While doing this project, ChatGPT was able to do some things so quickly that I could have never done on my own and failed at other things in a way that almost made me want to quit.

Love Letter is one of my favorite card games. It's super simple to learn, the mechanics are really easy, each round takes about 5 minutes, and there are so many different interactions between the cards that you can get a lot of mileage and replayability out of it[^1].

The game designers have made many custom versions of it with [unique card art](https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=love%20letter) however they're almost impossible to come by because most of them are limited edition and they never made a Pokemon version. I wanted to change that.

My 3 goals for the project were:
1. Maintain the original rules and mechanics of the game. If it ain't broke don't fix it.
2. Try to be thematically accurate so the Pokemon and moves matched with the abilities of each card.
3. Make the cards look like real Pokemon cards except using custom card art.

### Step 0: Getting ChatGPT Plus
I wanted ChatGPT Plus to help with generating the custom card art but my plans were foiled almost as soon as they started because of "high demand".
![waitlist](/posts/pokemon-love-letter/gpt_waitlist.png)

I figured I could try generating images using StableDiffusion. After all, it was free and I had a pretty good GPU. I quickly learned, however, that while it turned out the be pretty great at humans and it could be tweaked using LoRAs to generate other characters, you couldn't stretch its creativity that far outside of its training set. In the best case I got a deformed image of a Charmander and in the worst case I got absolute gibberish.

::side-by-side{}
#left
I don't even know what this is supposed to be...

#right
![spooky faces](/posts/pokemon-love-letter/stablediffusion/00000-1727058110.png)
::

::side-by-side{}
#left
It's great at designing generic things. Just that when I ask it to add a Pokemon in there, it completely breaks.

#right
![palace](/posts/pokemon-love-letter/stablediffusion/00022-3487952973.png)
::

::side-by-side{}
#left
Is this supposed to be a spaceship or a Togepi?

#right
![egg](/posts/pokemon-love-letter/stablediffusion/00000-1854640301.png)
::

::side-by-side{}
#left
We're getting closer but...
1. These look like people dressed up as Pokemon
2. They aren't even real Pokemon

#right
![halloween costumes](/posts/pokemon-love-letter/stablediffusion/00001-3257732172.png)
::

::side-by-side{}
#left
Using LoRAs I was finally able to generate something that looked like a Charmander. But it's tail somehow morphed into the tablecloth

#right
![charmander/table cloth](/posts/pokemon-love-letter/stablediffusion/00003-476866056.png)
::

::side-by-side{}
#left
This is the best one I got and it still looks a bit janky.

#right
![half decent Charmander](/posts/pokemon-love-letter/stablediffusion/00004-2535089552.png)
::

At this point I decided to put the project on hold. About a week later I was met with a pleasant surprise and I was able to sign up for ChatGPT Plus. I wasn't planning on working on the project much so I decided to just generate a simple image of a Charmander and hope that it worked out.

### Step 1: Generating Pokemon images
Within a minute of setting it up, I gave it my first prompt
![First prompt. Exactly what I was looking for](/posts/pokemon-love-letter/first_prompt.png)

What took me hours to fail at with StableDiffusion, ChatGPT was able to do in a minute. This is the image that I ended up using in my final prints. Chansey and Snorlax were just as smooth.

::side-by-side{leftWidth="48%"}
#left
![Chansey](/posts/pokemon-love-letter/chansey.png)

#right
![Snorlax](/posts/pokemon-love-letter/snorlax.png)
::

I got a bit carried away because of how quickly things were coming together. Love Letter only has 10 cards so I had to stop and figure out which Pokemon I actually wanted to have in the game. I couldn't generate all 151 original Pokemon (at least not today).

### Step 2: Pokemon list and movesets
The full list of Love Letter cards and abilities can be found [here](https://en.wikipedia.org/wiki/Love_Letter_(card_game)#Card_types). With 151 Pokemon to choose from it wasn't too difficult to find ones that matched.

1. I wanted to have the three starter Pokemon in there because they're iconic.
2. I wanted the final card - Princess - to be special and Mew felt like a good fit for that.
3. The Baron which involves comparing hands and chosing the higher card to win seemed like the move Explosion which is one that Electrode is known for.
4. For the remaining cards, I mostly went on [pokemondb](https://pokemondb.net/pokedex/gengar/moves/1) and searched up a Pokemon and checked if it had the right moves, or vice versa.

The full list of the Pokemon and moves is in the footnotes[^2]. It took a few iterations to get it right because I wanted to balance the different types of Pokemon I would have. Even after finishing this list, I'd have to go back and make changes because some of the ChatGPT just wouldn't generate some of the Pokemon.

As an experiment after the fact, I also wanted to see what ChatGPT would give me if I decided to outsource this task to it as well[^3].

### Step 3: Generating the rest of the images

#### Step 3.0: Squirtle
Squirtle was a breeze just like Chansey and Snorlax. Just a bit of prompting required to get it to look more like a Spy and in the right setting.
![Squirtle(s)](/posts/pokemon-love-letter/squirtle.png)

#### Step 3.1: Bulbasaur
Bulbasaur was a bit tougher. 

::side-by-side{leftWidth="50%"}
#left
Somehow no matter how I asked, ChatGPT refused to generate an image of Bulbasaur because it "cannot create images that directly depict copyrighted characters such as Bulbasaur from Pokémon." However, it "can generate an original image inspired by the concept of a creature with similar characteristics that does not infringe on copyright" This didn't make much sense to me since it was able to generate images of every other Pokemon I threw at it.

#right
![It wouldn't generate a copyrighted character](/posts/pokemon-love-letter/bulbasaur_1.png)
::

::side-by-side{leftWidth="50%"}
#left
I tried jailbreaking. I tried starting new chats in case it would forget that Bulbasaur was copyrighted and generate the image for me (which actually worked to some extent. The image started generating, but before displaying it printed out the error message. I think there's an extra filter after generating the image but before outputting it). I tried to prompt it with an image instead of with text. Nothing worked.

#right
![Even the wildest jailbreaks didn't work](/posts/pokemon-love-letter/bulbasaur_2.png)
::

I was worried that I'd have to give up on my plans. If Bulbasaur didn't work then how many others would fail?

As a last resort, I tried asking it to generate Ivysaur instead. I guess I'd just have to settle for a stage 1 Pokemon instead of the starters like I wanted. But surprisingly instead of producing an Ivysaur, it made a pretty accurate depiction of Bulbasaur. If I actually wanted an Ivysaur I would probably have been a bit disappointed but I guess in this case I'll use ChatGPT's failures for my benefit.

!["Bulbasaur" which is actually supposed to be an Ivysaur](/posts/pokemon-love-letter/bulbasaur.png)

#### Step 3.2: Electrode
Electrode was even more of a pain. Here's a short list of some of the images it generated when asking for an Electrode.
!["Electrode(s)"](/posts/pokemon-love-letter/voltorb.png)

The majority of my time was spent trying to get the colors right, removing the black stripe from the middle, and switching the red and white so the orientation was correct. I think part of the problem is that pokeballs have red on top and white on the bottom so it wasn't able to flip the colors around. The last one it generated looked alright although it still had that stripe in the middle. In the end I decided to cut my losses and just rename the card to Voltorb instead.

I think part of the problem was that ChatGPT doesn't know its top from bottom.
![A square which is supposed to have a red top half and blue bottom but ChatGPT generated a diagonal split](/posts/pokemon-love-letter/wtf.png)


#### Step 3.3 Generating the rest of the rest of the images
After spending way too long on just two cards, I was worried the rest would take forever and would have equally strange circumstances. However they were surprisingly uneventful outside of a few interesting images.

::side-by-side{}
#left
This was supposed to be a Gengar

#right
![DALL·E - A realistic depiction of a fictional creature inspired by Gengar from Pokemon, reimagined in real life. This creature has a dark, ghostly appearance.png](/posts/pokemon-love-letter/dall-e1.png)
::

::side-by-side{}
#left
And can you guess what this one is? If you guessed Alakazam you'd be right. This was one of the reasons 7 is Ditto (Transform) instead of Alakazam (Teleport). I assume the fact that it's a humanoid Pokemon makes it tougher to generate than usual.

#right
![DALL·E - A realistic depiction of a fictional creature inspired by Alakazam from Pokemon, reimagined in real life with specific modifications. The creature is.png](/posts/pokemon-love-letter/dall-e2.png)
::

I decided not to use these...

### Step 4: Designing the card layouts
And here's where I realized I messed up. Pokemon card art needed to be a 14:10 aspect ratio which none of my images were. Asking ChatGPT to fill the outside of the images didn't work particularly well and new images with the correct aspect ratio didn't look particularly great either so I felt like I was back at square one.
![DALL-E can no longer generate Charmanders](/posts/pokemon-love-letter/wtf2.png)

Now I probably could have gotten this to work with better prompting but I also wasn't particularly keen on regenerating all my images only to face issues with Voltorb again. One thing I learned from the project is that if you can't fix it, then work around it later.

::side-by-side{}
#left
I found a [Pokemon card generating website](https://pokecardmaker.net/creator) which allowed me to make full art card. This would fit the Pokemon that I had pretty well (with a bit of cropping) and it would only leave a small colored band at below the card art which turned out to be a good thing since it helped with the readability of the small text.

#right
![Charmander](/posts/pokemon-love-letter/Charmander.png)
::

::side-by-side{}
#left
A bit of editing to add the strength of each card and I had most of my images, ready for printing.

#right
![Fianl charmander](/posts/pokemon-love-letter/final_charmander.png)
::

All I had left was generating card backs and rules cards
![Card backs](/posts/pokemon-love-letter/backs.png)
Although the second card looked a lot better, I decided to print most of the cards on the first back and only use the second card back for the rules. And I'm glad I did for reasons that will later become apparent.

### Step 5: Printing, packaging, and playing
I did all of the printing, cutting out, gluing, and packaging cards myself. It probably wasn't the best use of time (especially when I was [procrastinating working on another project](/posts/when-should-you-give-up)) but I also enjoyed the process. It was somewhat relaxing, repetitive work that I could do while watching or listening to something in the background. I made a challenge out of it, figuring out how quickly I could finish a page of cards from printout to sleeved. By the end, I could get 6 cards done in about 10 minutes.
![Cutting the cards](/posts/pokemon-love-letter/wip.jpg)

Choosing the first card back really sped things up. Since the card back had a full red background and didn't need to be centered as precisely, I could scale it up a few percent before printing, allowing me to cut both the card front and card back together instead of needing to cut them separately, glue them together, and then cut them to shape again. This means that someone could theoretically differentiate between different cards by seeing how centered the card back was but I don't think anyone I play with would take it that seriously.
![The unsleeved cards](/posts/pokemon-love-letter/unsleeved.jpg)

I bought some Pokemon tokens to count as point trackers, sleeved all the cards, and put them in a box to end up with my final product.
![Final images](/posts/pokemon-love-letter/final.jpg)

### What I learned
1. ChatGPT is really impressive at doing some things but will remind you quite often that it's not actually that smart. It makes it somewhat hard to rely on when I can't trust that it'll even know its up from down. I guess living in an 800 dimensional hyperspace will do that to you.
2. Prompt engineering isn't easy
3. Doing AI art using something like StableDiffusion is tough. I'll have to look into it more some other day but for now ChatGPT was able to get the job done for me a lot faster.
4. Working on the project gave me a lot of appreciation for all the effort and detail that goes into printing trading cards. Centering, making sure the cards aren't see through, having a border to avoid the card art from being visible from the edges, etc.

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">I finally came up with a project to use ChatGPT on. I made a custom Pokemon version of Love Letter. At some points I was really impressed at how efficient it was and at other points I wanted to just bang my head against the wall...<a href="https://t.co/AWlLAhbbd5">https://t.co/AWlLAhbbd5</a></p>&mdash; preethamrn (@preethamrn) <a href="https://twitter.com/preethamrn/status/1758584635720929654?ref_src=twsrc%5Etfw">February 16, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

---

[^1]: I also enjoy games like Exploding Kittens, Coup, Secret Hitler. Similar suggestions would be appreciated.
[^2]: Unless you're a fan of Pokemon this section will probably go over your head so you can skip it. And even if you are a fan, you should probably skip it if you don't want to be infuriated with my terrible reasoning. So here's is the list of Pokemon I settled on:

    0. **Spy - Squirtle**: Ash's Squirtle from the [Squirtle Squad](https://bulbapedia.bulbagarden.net/wiki/Squirtle_Squad) reminded me of a spy.
    1. **Guard - Charmander**: It was the first one I generated, and I wanted all the Gen 1 starters in the game but Charmander didn't have a great place to go so Guard it is.
    2. **Priest - Bulbasaur**: Vine Whip kind of feels like it's grabbing someone's card from a distance. So the moveset works.
    3. **Baron - Electrode**: It explodes. One of the two cards dies.
    4. **Handmaid - Chansey**: It heals and protects.
    5. **Prince - Arcanine**: It learns the move Roar which works with the card's ability - forcing the opponent to discard their hand.
    6. **Chancellor - Gengar**: It learns Metronome which is kind of like allowing yourself to select a random "move" from the 3 cards that you draw.
    7. **King - Ditto**: Transform makes you turn into your opponent's card (technically they also turn into yours because you trade cards but stop overthinking it)
    8. **Countess - Snorlax**: It's a lazy Pokemon that doesn't do anything. Pretty fitting for the Countess' ability
    9. **Princess - Mew**: Mew felt like an apt card to put at the top of the list and its move Psywave can cause [glitches](https://www.youtube.com/watch?v=5KmTCdnWzVI) that break multiplayer battles in Gen 1. So the fact that this Pokemon can end the game for you made it a good fit for the Princess.

[^3]: ChatGPT came up with this:

    **Guard (1) - Machoke (Move: Detect)** -
        Reasoning: The Guard's ability to guess another player's hand makes Machoke a fitting choice because it's known for its strength and vigilance, qualities you'd want in someone guarding information. The move "Detect" represents the Guard's ability to anticipate and counter the opponent's moves, akin to guessing a player's card.

    **Priest (2) - Alakazam (Move: Teleport)** -
        Reasoning: Alakazam's high intelligence and psychic powers make it ideal for the role of the Priest, who can see another player's hand. "Teleport" symbolizes the ability to access hidden information, reflecting the Priest's insight into others' intentions.

    **Baron (3) - Gyarados (Move: Thrash)** -
        Reasoning: The Baron's gameplay involves comparing hands and knocking out the lower one. Gyarados, with its fierce and intimidating presence, suits this confrontational role. "Thrash" represents the Baron's aggressive challenge to directly compare power.

    **Handmaid (4) - Chansey (Move: Protect)** -
        Reasoning: Chansey is known for its caring nature and ability to shield others, making it perfect for the Handmaid's role, which offers protection from other players' actions. The move "Protect" directly correlates with the Handmaid's ability to safeguard the player.

    **Prince (5) - Gallade (Move: Psycho Cut)** -
        Reasoning: Gallade, a Pokémon known for its chivalry and swordsmanship, mirrors the Prince's role of forcing a player to discard their hand. "Psycho Cut" represents the Prince's decisive action to change the course of the game, cutting through the opponent's strategies.

    **King (6) - Empoleon (Move: Hydro Pump)** -
        Reasoning: Empoleon's regal and commanding presence embodies the King, who can trade hands with another player. "Hydro Pump" signifies the powerful impact of such a strategic move, akin to the King's authority to alter positions.

    **Countess (7) - Gardevoir (Move: Heal Pulse)** -
        Reasoning: Gardevoir's protective instincts and elegance align with the Countess, who must be discarded if caught with the King or Prince. "Heal Pulse" reflects the Countess's role in maintaining balance and ensuring the well-being of her allies, even if it means sacrificing her position.

    **Princess (8) - Mew (Move: Transform)** -
        Reasoning: Mew, with its rare and elusive nature, perfectly represents the Princess, the key to winning but also vulnerable if forced out. "Transform" symbolizes the game-ending consequence of losing the Princess, as Mew's ability to change its form reflects the significant impact of the Princess's departure from the game.
    
    It wasn't that bad but also didn't end up being anywhere near I would have chosen.