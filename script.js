// *********Toggle theme- Dark and Light*********
const themeToggle = document.querySelector('.theme-toggle');
const webPage = document.querySelector('.wrapper');

function applyDark(){
    webPage.classList.add('dark-theme');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
}
function applyLight(){
    webPage.classList.remove('dark-theme');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
}

let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(isDark){
    applyDark();
}
else{
    applyLight();
}

function toggleTheme(){
    if(isDark){
        applyLight();
        isDark=false;
    }
    else{
        applyDark();
        isDark=true;
    }
}
themeToggle.addEventListener('click',toggleTheme);


// ***********Random Prompt Generator**********
const randomBtn = document.querySelector('.prompt-btn');
const promptInput = document.querySelector('.prompt-input');
const examplePrompts = [
  "A sprawling futuristic metropolis at night with neon lights, flying cars, and towering skyscrapers disappearing into the misty clouds",
  "A medieval knight clad in ornate silver armor riding a fire-breathing dragon across a crimson sunset sky, with mountains in the background",
  "An enchanted forest with bioluminescent trees, glowing mushrooms, and fairies dancing around a sparkling waterfall under a full moon",
  "A massive cyberpunk cityscape featuring holographic advertisements, bustling street markets, and androids mingling with humans",
  "A steampunk-inspired airship harbor above the clouds, filled with brass ships, engineers, and gears turning in the sky",
  "An alien bazaar on a desert planet, populated by colorful extraterrestrial species trading futuristic gadgets under twin suns",
  "A deep-sea coral kingdom illuminated by glowing sea life, with mermaids swimming among ancient sunken ruins",
  "A snow-covered fantasy castle on a high mountain peak, surrounded by magical creatures and protected by a dragon circling above",
  "A post-apocalyptic landscape with overgrown cities, abandoned vehicles, and sentient robots wandering in search of purpose",
  "A traditional Japanese festival at night with lantern-lit streets, fireworks, kimonos, food stalls, and floating cherry blossoms",
  "An epic space battle between massive starships and sleek fighter crafts, all taking place above a ringed gas giant planet",
  "An ancient stone temple hidden deep in a tropical jungle, partially buried and covered in vines with glowing runes on the walls",
  "A gigantic humanoid robot towering over a futuristic city as citizens gather in awe and fear, framed by a glowing sky",
  "A time-traveling detective in a trench coat standing in 1920s New York, surrounded by Art Deco buildings and glowing portals",
  "A fierce Norse warrior wielding a glowing axe in the middle of a snowstorm, with icy cliffs and Viking ships in the background",
  "A cozy village of fairy houses built into giant mushrooms, with warm glowing windows and small winged creatures fluttering around",
  "A powerful witch flying over a medieval town under a crescent moon, leaving a trail of sparkling magic dust behind her",
  "Two samurai engaged in an intense duel inside a misty bamboo forest, cherry blossom petals floating in the air around them",
  "Futuristic hovercars racing along glowing magnetic tracks in a tunnel of light, with spectators watching from digital billboards",
  "An eerie, crumbling Victorian mansion at night, surrounded by twisted trees and glowing ghostly apparitions",
  "A hidden tropical island with a massive waterfall, ancient statues, treasure chests, and colorful parrots flying above",
  "A sleek robot bartender serving glowing drinks to alien patrons in a high-tech lounge overlooking a neon-lit planet",
  "A cybernetic woman with glowing circuit tattoos walking alone in a rainy neon-lit alley, holding a plasma umbrella",
  "An ice dragon roaring atop a frozen fortress as a blizzard swirls around it, icicles hanging from jagged spires",
  "An astronaut planting a glowing tree in a Martian greenhouse dome, with a red dusty landscape outside",
  "A magical library with books floating mid-air, staircases twisting in impossible directions, and warm candlelight everywhere",
  "A pirate ship sailing through a stormy ocean with lightning striking in the background and ghostly shapes in the waves",
  "Children flying over a futuristic city with giant balloons shaped like animals, laughing as they soar through floating parks",
  "The lost city of Atlantis, submerged under crystal-clear water, with glowing buildings and merfolk swimming among ruins",
  "Mount Olympus in the clouds, where Greek gods and goddesses interact under golden temples and radiant celestial skies",
  "A pack of wolves howling at a red supermoon in the middle of a dense snow-covered forest",
  "An epic fantasy battle between elves wielding glowing bows and orcs charging across a scorched battlefield",
  "A retro diner in the middle of a desert at twilight, glowing neon signs attracting travelers from other dimensions",
  "A powerful wizard casting a massive storm spell from atop a mountain, lightning crackling around his staff",
  "A robot and a human shaking hands on a peace bridge between two futuristic cities, one organic, the other metallic",
  "An entire city built on the back of a giant turtle swimming across the ocean, with waterfalls pouring off its shell",
  "A massive tree with glowing leaves, housing a hidden elven kingdom in its branches, under a starry night sky",
  "An inventor’s lab in the Victorian era, filled with steam-powered machines, mechanical limbs, and blueprints on every surface",
  "A glowing portal opening in a child’s bedroom, revealing a colorful parallel world with floating islands and talking animals",
  "An underground cavern filled with crystals of every color, glowing softly and reflecting in a serene underground lake",
  "A baby phoenix hatching from a flame-encased egg atop a mountain surrounded by ancient fire shrines",
  "A space whale gliding through a galaxy filled with nebulas, planets, and stardust trailing behind its tail",
  "A jungle temple overtaken by giant plants and watched over by spirit animals made of light",
  "A floating market in a city built above the clouds, with airships docking and exotic goods being traded",
  "A celestial being weaving constellations in the sky using threads of pure starlight",
  "A battle between elemental titans made of fire and ice, shaking the earth as they clash in a forgotten valley",
  "An aurora borealis glowing over a quiet arctic village, with people watching in awe as the sky dances",
  "A warrior princess riding a giant wolf through a misty enchanted forest, sword drawn and cape flowing",
  "A secret magical portal inside an ancient library, guarded by a talking owl and shifting bookshelves",
  "A futuristic greenhouse tower in a polluted city, where rare plants grow and robots tend to the garden",
  "A massive lunar base on the dark side of the moon, with mining equipment, space rovers, and glowing blue ores",
  "A haunted train moving through a foggy mountain pass, with glowing windows and ghostly passengers inside",
  "A colossal sandworm bursting from the desert while adventurers flee on hoverbikes",
  "A dreamlike meadow with floating stones, multi-colored grass, and a waterfall that flows upward",
  "A council of elder dragons meeting in a lava-filled cave beneath a volcano",
  "A futuristic amusement park on another planet, with anti-gravity rides and alien food vendors",
  "A towering crystal spire in the middle of a frozen wasteland, pulsing with arcane energy",
  "A robot orchestra performing in front of a crowd of humans and androids under a starry sky",
  "A surreal desert filled with giant clocks, melting trees, and levitating camels",
  "A magical forge where dwarves are crafting weapons with fire enchanted by ancient runes",
  "A village built inside the ribs of a colossal ancient beast, with houses hanging from bones",
  "A spaceship crash site in a dense jungle, with alien flora growing out of the wreckage",
  "A mountaintop monastery with monks meditating in the clouds, surrounded by glowing symbols",
  "A dystopian school where children are trained by holograms in a massive domed facility",
  "A lighthouse on a stormy alien ocean, with electric waves and tentacled sea monsters beneath",
  "A glowing runic circle summoning a spirit in a dark forest clearing at midnight",
  "A junkyard full of sentient robots assembling themselves into a new creature",
  "A floating castle above the clouds tethered by magical chains, with winged guards circling",
  "A bustling interdimensional train station with portals to countless worlds and timelines",
  "A lone traveler walking through a canyon filled with ancient statues and swirling sand",
  "A candy-colored utopia with edible architecture and jellybean rivers",
  "A shadowy figure riding a flaming horse across a red desert under a black sky",
  "A high-tech underwater city built inside a giant transparent dome with glowing architecture",
  "A frozen battlefield where time has stopped, with warriors frozen mid-strike",
  "A whimsical tea party attended by mythical creatures in a garden of giant flowers",
  "A pair of adventurers discovering a glowing sword stuck in a stone deep within a cave",
  "An alien rainforest with tree-sized mushrooms and bioluminescent flying jellyfish",
  "A robotic dragon curled around a digital treasure hoard inside a neon cave",
  "A cathedral made of stained glass and crystal, suspended over a magical void",
  "A small cottage at the edge of the world where the land meets a star-filled abyss",
  "A mech suit garage with engineers climbing on massive armored robots",
  "A castle floating upside down in a dimension with reversed gravity and glowing rivers",
  "A dreamscape filled with flying whales, pastel clouds, and music notes drifting through the air",
  "A pirate cove inside a dormant volcano with ships docked in molten lava",
  "A caravan of merchants crossing an alien desert filled with massive bones and glowing stones",
  "A futuristic warrior standing on a battlefield made of broken holograms and collapsing code",
  "An oracle floating in a lotus position in a starry void, surrounded by shifting symbols",
  "A necromancer raising ghostly animals in a haunted forest",
  "A spacecraft shaped like a living tree soaring through a wormhole",
  "A futuristic zoo with genetically modified creatures and floating enclosures",
  "A glowing tower made of ice and fire, guarded by elemental spirits",
  "A robotic jungle where trees are made of cables and animals of chrome",
  "A child riding a cloud shaped like a lion through a sunset sky",
  "A planet made entirely of crystal, refracting starlight in every direction",
  "A sorceress controlling a storm above a battlefield of fallen titans",
  "A quantum library where books open portals to alternate histories",
  "A city built on vertical cliffs, connected by glowing rope bridges",
  "An abandoned carnival overtaken by spirits and phantom laughter",
  "A divine being creating a new star with swirling cosmic hands",
  "A digital forest made of code with creatures rendered in voxel style",
  "An alien moon with massive geysers and translucent floating life forms",
  "A time-lost island where dinosaurs and robots coexist",
  "A secret underwater cave lit by glowing jellyfish and ancient runes",
  "A cosmic tree whose branches connect multiple worlds",
  "A giant golem awakening beneath a ruined temple as explorers watch in awe",
  "A dream journal brought to life with surreal, shifting imagery",
  "A rainbow-colored storm over a city made of glass pyramids",
  "A magical bakery run by talking animals in a pastel village",
  "A mysterious floating monolith casting long shadows over an alien desert during sunset",
  "A celestial deer with a starry coat wandering through a dreamlike forest of glowing trees",
  "A futuristic sports arena where gravity-defying athletes play a neon-lit zero-G game",
  "An enchanted mirror in a forest clearing reflecting an alternate, magical world",
  "A hidden dragon hatchery carved into a cliffside, lit with glowing lava pools",
  "A spiral staircase suspended in mid-air, leading into clouds shaped like ancient symbols",
  "A neon samurai standing at the edge of a futuristic Tokyo-inspired skyline",
  "A lost moon colony overtaken by alien vegetation and pulsing with eerie green light",
  "A city built inside a giant hollowed-out asteroid, orbiting a blue star",
  "A haunted clock tower where ghostly gears float and time flows backward",
  "A biomechanical temple guarded by serpents made of living metal",
  "A sentient forest that shifts its paths and whispers ancient secrets to travelers",
  "A sky filled with floating whales swimming through shimmering clouds at dusk",
  "A mystical swamp where will-o'-the-wisps dance around ancient stone altars",
  "A circus of shadows where performers wear porcelain masks and reality bends around them",
  "A castle carved entirely from amethyst crystals, glowing from within",
  "A train that rides beams of light across dimensional rifts between realities",
  "A robotic elephant carrying a pagoda-style temple on its back through a neon jungle",
  "An angelic being descending from the sky, wings woven from pure light",
  "A spacecraft shaped like a manta ray sailing over a gas giant’s rings",
  "A haunted greenhouse filled with whispering plants and carnivorous blossoms",
  "A rainbow staircase floating in a void, with dream creatures ascending each step",
  "A futuristic temple where monks interface with AI gods through golden VR headsets",
  "An ice palace surrounded by auroras and crystalline wolves that vanish when approached",
  "A jungle village lit by bioluminescent plants, with rope bridges and treehouses",
  "A street market run by shapeshifters, where every stall changes form with each sale",
  "A wizard’s laboratory on a floating island, with magical orbs swirling around bookshelves",
  "A coral castle under the sea where aquatic centaurs conduct shimmering music",
  "A winged train flying through the night sky above glowing mountain peaks",
  "A snow globe city where each shake changes the season and the mood of its citizens",
  "A futuristic colosseum where holographic creatures battle for entertainment",
  "A submerged cathedral filled with glowing fish and angel statues watching from shadows",
  "A massive turtle with a rainforest ecosystem on its shell crossing an endless ocean",
  "A city made of shifting mirrors, constantly refracting sunlight and reality",
  "A glowing rift in the ground surrounded by people praying to the light inside",
  "A robotic bee pollinating alien flowers on a terraformed planet",
  "A spiral canyon filled with floating lanterns and ancient murals",
  "A ghost ship made of glass sailing a sea of fog under a full moon",
  "A field of sentient flowers turning to watch a traveler pass",
  "A traveler floating on a leaf over a river of starlight",
  "A mech-armored knight standing guard before a neon cathedral",
  "A dragon curled around a futuristic skyscraper in a thunderstorm",
  "A vast underwater graveyard of ancient sea monsters turned to coral",
  "A digital mountain range rendering in real time as a player approaches",
  "A mechanical phoenix reborn from scrap metal in a scrapyard temple",
  "A lonely outpost on a glacial planet glowing with buried energy crystals",
  "A time-worn library in space, orbiting a dead planet",
  "A floating prison suspended over a lava ocean with molten bridges",
  "A haunted theater where phantom actors endlessly perform forgotten tragedies",
  "A portal inside a cave that shows visions of other lives and alternate choices",
  "A mechanical forest where trees are antennae and leaves are solar panels",
  "A neon-lit sushi bar run by cyborg cats in a space station bazaar",
  "A sky filled with jellyfish-like airships slowly drifting between cities",
  "A surreal zoo where each cage contains a universe with its own laws of physics",
  "A rainbow river cutting through a monochrome desert",
  "A massive sandcastle city inhabited by tiny elemental beings",
  "A space station garden where zero-gravity butterflies float like stars",
  "A floating whale-shaped museum that collects moments from dreams",
  "A digital temple where users meditate through simulated enlightenment",
  "A mirror maze built on a cloud, reflecting infinite versions of the sky",
  "An abandoned amusement park orbiting a dying star",
  "A desert monastery where monks write in books made of light",
  "A futuristic pirate ship sailing solar winds with holographic sails",
  "A tree that bears glowing orbs of memory, harvested by dreamers",
  "A lunar circus where performers leap across craters with anti-grav boots",
  "A mythic forge inside a volcano where constellations are smelted into weapons",
  "A stairway carved from moonlight that leads to the peak of a sky mountain",
  "A crystalline dragon sleeping beneath a frozen lake",
  "A hive city made entirely of interconnected airships",
  "A dream bunker deep underground where reality glitches and loops",
  "A rainbow storm where each bolt opens a door to another dimension",
  "A floating farm run by robots that mimic old Earth animals",
  "A starlit oasis in the middle of a black sand desert",
  "A city-sized tree whose leaves change with the moods of its people",
  "A ruined palace overtaken by vines of glowing data cables",
  "A carnival powered by dreams where rides shape-shift with emotion",
  "A giant owl roosting in an ancient clock tower, keeper of forgotten time",
  "A tidal wave made of shattered mirrors approaching a digital coastline",
  "A serpentine spirit coiled around a bridge between two floating cities",
  "A labyrinth of tunnels inside a comet, glowing with ancient starfire",
  "A magical observatory where constellations move in response to whispers",
  "A beach where each grain of sand is a frozen moment in time",
  "A circus tent in a field of dreams, filled with impossible creatures",
  "A haunted puppet theater where strings move on their own",
  "A dimension where islands float upside down in a sea of vapor",
  "A solitary knight wandering through a dreamscape of liquid clouds",
  "A throne room of a storm god surrounded by lightning familiars",
  "A starlit forest with paths only visible under moonlight",
  "A futuristic inn at the edge of the universe welcoming travelers from all timelines",
  "A treehouse city built in colossal mushrooms under a twilight sky",
  "A mystical forge powered by dragon breath and volcanic crystals",
  "A frozen sea cracked open to reveal glowing creatures beneath",
  "A robot monk meditating under a digital cherry blossom tree",
  "A mountain-sized cat god sleeping beneath a city’s foundations",
  "A train station where each platform leads to a parallel version of Earth",
  "A dream café visited by spirits of poets and artists across time",
  "A ship sailing across a cloud ocean, manned by ethereal birds",
  "A candlelit chamber where prophecies write themselves on falling leaves"
];
randomBtn.addEventListener('click',()=>{
    promptInput.value = examplePrompts[Math.floor(Math.random() * 206)];
    promptInput.focus();
});


// *******Retrieving form values********
const promptForm = document.querySelector('.prompt-form');
const model = document.querySelector('#model-select');
const imageCount = document.querySelector('#image-count');
const aspectRatio = document.querySelector('#aspect-ratio');

promptForm.addEventListener('submit',handleFormSubmit);

function handleFormSubmit(e){
    e.preventDefault();

    const selectedModel = model.value;
    const selectedImageCount = parseInt(imageCount.value) || 1;
    const selectedAspectRatio = aspectRatio.value || "1/1";
    const promptText = promptInput.value.trim();

    createImageCards(selectedModel,selectedImageCount,selectedAspectRatio,promptText);
}

// *********Creating Image cards**********
const gridGallery = document.querySelector('.gallery-grid');
function  createImageCards(selectedModel,selectedImageCount,selectedAspectRatio,promptText){
    gridGallery.innerHTML="";
    for(let i=0 ; i<selectedImageCount ; i++){
        gridGallery.innerHTML += `<div class="img-card loading" id="card-no-${i}" style="aspect-ratio: ${selectedAspectRatio}">
                        <div class="status-container">
                            <div class="spinner"></div>
                            <p class="status-text">Generating...</p>
                        </div>
                        <i class="fa-solid fa-triangle-exclamation errorSign"></i>
                    </div>`;
    }
    generateImages(selectedModel,selectedImageCount,selectedAspectRatio,promptText);
}

function getImageDimensions(aspectR , baseSize = 512){
    const [width,height] = aspectR.split("/").map(Number);
    const scaleFactor = baseSize / Math.sqrt(width * height);

    let calculatedWidth = Math.round(width * scaleFactor);
    let calculatedHeight = Math.round(height * scaleFactor);

    calculatedWidth = Math.floor(calculatedWidth/16)*16;
    calculatedHeight = Math.floor(calculatedHeight/16)*16;

    return {width:calculatedWidth, height:calculatedHeight};
}

const generateBtn = document.querySelector('.generate-btn');

const API_KEY = "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";
async function generateImages(selectedModel,selectedImageCount,selectedAspectRatio,promptText){
    const MODEL_URL = `https://router.huggingface.co/hf-inference/models/${selectedModel}`;
    const {width,height}=getImageDimensions(selectedAspectRatio);

    generateBtn.setAttribute("disabled", "true");
    const imagePromises = Array.from({length:selectedImageCount}, async(_, i)=>{
        try{
            const response = await fetch(MODEL_URL,{
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                    "x-use-cache": "false",
                },
                method: "POST",
                body: JSON.stringify({
                    inputs: promptText,
                    parameters: {width, height},
                }),
            });
            if(!response.ok) throw new Error((await response.json())?.error);
            const result = await response.blob();
            // Convert response to an image url and udate the img card
            updateImageCards(i, URL.createObjectURL(result));
        }
        catch(error){
            const imgCard = document.getElementById(`card-no-${i}`);
            imgCard.classList.replace("loading", "error");
            console.log(error);
        }
    });
    await Promise.allSettled(imagePromises);
    generateBtn.removeAttribute("disabled");
}

function updateImageCards(imgIndex, imgUrl){
    const imgCard = document.getElementById(`card-no-${imgIndex}`);

    if(!imgCard) return;

    imgCard.classList.remove('loading');
    imgCard.innerHTML=`<img src="${imgUrl}" class="result-img">
                        <div class="img-overlay">
                            <a href="${imgUrl}" class="img-download-btn" download="${Date.now()}_somPNG_Labs.png">
                                <i class="fa-solid fa-download"></i>
                            </a>
                        </div>`;
}