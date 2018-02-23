/**
 * This is the playlist of Mr MPJ that I'm watching while doing this playground:
 * https://www.youtube.com/playlist?list=PL0zVEGEvSaeFSwPn06GKArptSxiP1Gff8
 */

// Simple functor poc with Array.map

const dragons = [
    { name: 'Fluffykins', health: 70},
    { name: 'Deathlord', health: 65000},
    { name: 'Little pizza', health: 2}
];

const names = dragons.map((dragon, i) => dragon.name)
    .map(name => name.length);

console.log(names);
names