export class SpaceShips {
    modelName:string;
    imageUrl: string;
    health: 50;
    activeShield: true;
    activeWeapon: true;

constructor (modelName: string, imageUrl: string){
this.modelName = modelName;
this.imageUrl = imageUrl;
}
}