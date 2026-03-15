const nebulaStock = ['quasar', 'pulsar', 'black hole'];
const asteroidStock = ['ceres', 'vesta', 'pallas'];

const nebulaBackup = [...nebulaStock];


const extendeNebulaStock = [...nebulaStock, 'gravity lens'];

const celestialDrops = [...'meteor|comet|nova'.split('|')];

const fullInventory = [...nebulaStock, ...asteroidStock, ...celestialDrops];

console.log(celestialDrops)