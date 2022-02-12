export interface Game {
  id: string;
  name: string;
  label: string;
  desc: string;
  logo: string;
  web: string;
  discord: string;
  atomic: string;
  how: string;
  statistic: string;
  calculator: string;
  game: string;
}

const baseHowToUrl = "/how-to/";
const baseStatisticUrl = "/statistic/";
const baseCalculatorUrl = "/calculator/";
const baseGameUrl = "/game/";

const games: Game[] = [
  {
    id: "001",
    name: "warspace",
    label: "Warspace",
    desc: "WarSpace is an NFT game project — real-time strategy. Thanks to the tokenized economy, players themselves control the market and build trade relations. Everyone can choose their own path: develop stone mining, engage in logging, restore the food industry or go deep underground in search of gold. Resources are needed to build new structures, and to participate in pvp battles.",
    logo: "warspace.jpg",
    web: "https://warspace.io",
    discord: "https://discord.gg/gwsZNMZr",
    atomic: "https://wax.atomichub.io/market?collection_name=warspacegame",
    how: `${baseHowToUrl}warspace`,
    statistic: `${baseStatisticUrl}warspace`,
    calculator: `${baseCalculatorUrl}warspace`,
    game: `${baseGameUrl}warspace`,
  },
  {
    id: "002",
    name: "farmerworld",
    label: "Farmer world",
    desc: "Farmers World is the first farming game to function on the NFTs platform. Pick for yourself suitable tools, exploit various resources, buy land to build enormous farms, and enjoy the fascinating experiences of a farmer working in Farmers World’s Ecosystem.",
    logo: "farmerworld.jpeg",
    web: "https://farmersworld.io",
    discord: "https://discord.gg/Mqj8ybM7",
    atomic: "https://wax.atomichub.io/market?collection_name=farmersworld",
    how: `${baseHowToUrl}farmerworld`,
    statistic: `${baseStatisticUrl}farmerworld`,
    calculator: `${baseCalculatorUrl}farmerworld`,
    game: `${baseGameUrl}farmerworld`,
  },
  {
    id: "003",
    name: "spacecraftxc",
    label: "Space Craft X",
    desc: "Space CraftX is a space NFT game with a perfect economic model, an interesting plot and a possibility to exchange game tokens for cryptocurrency. Extract a variety of space resources, build up your own mining plants and feel like a real space creator in the Space CraftX game.",
    logo: "spacecraftxc.jpeg",
    web: "https://spacecraftx.io",
    discord: "https://discord.gg/spacecraftx",
    atomic: "https://wax.atomichub.io/market?collection_name=spacecraftxc",
    how: `${baseHowToUrl}spacecraftxc`,
    statistic: `${baseStatisticUrl}spacecraftxc`,
    calculator: `${baseCalculatorUrl}spacecraftxc`,
    game: `${baseGameUrl}spacecraftxc`,
  },
  {
    id: "004",
    name: "goldmand",
    label: "Goldmand",
    desc: "Explore deep space with our game. The Metaverse is waiting for you. Choose a species, pick the planet and suitable land and start mining. The Big varieties for items and unique amulets.",
    logo: "goldmand.jpg",
    web: "https://play.goldmand.io",
    discord: "https://discord.gg/gwsZNMZr",
    atomic: "https://wax.atomichub.io/market?collection_name=goldmandgame",
    how: `${baseHowToUrl}goldmand`,
    statistic: `${baseStatisticUrl}goldmand`,
    calculator: `${baseCalculatorUrl}goldmand`,
    game: `${baseGameUrl}goldmand`,
  },
];

export default games;
