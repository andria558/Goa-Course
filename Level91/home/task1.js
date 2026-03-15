const baseIngredients = ['water', 'herb', 'crystal'];
const cloned = [...baseIngredients];
const withPhoenix = ['phoenix feather', ...cloned];
const enhancedPotion = [...withPhoenix, 'moon dust', 'sun ray'];
console.log(enhancedPotion);
