export class Card {
    constructor(public courseName: string,
        public foodType: string,
        public location: string,
        public price: number,
        public rank: number,
        public startDate: Date,
        public imagePath: string,
        public duration: string,
        public tutorName: string,
        public description: string

    ) { }
}