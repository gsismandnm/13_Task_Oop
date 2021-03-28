class Point {
    constructor (x=0, y=0){
        this.x=x;
        this.y=y;
    }
}

class Triangle {
    constructor (a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    kenarlar = [];
    cevre =() => {
        this.kenarlar.push(Math.sqrt(Math.pow((this.b.x-this.a.x), 2) + Math.pow((this.b.y-this.a.y), 2)));
        this.kenarlar.push(Math.sqrt(Math.pow((this.c.x-this.c.x), 2) + Math.pow((this.b.y-this.c.y), 2)));
        this.kenarlar.push(Math.sqrt(Math.pow((this.c.x-this.a.x), 2) + Math.pow((this.c.y-this.a.y), 2)));
        return this.kenarlar.reduce((tolal, index) => total +=index, 0);
        }

    alan = () => {
        const s = this.cevre/2;
        return Math.sqrt((s * (this.kenarlar[0]) * (this.kenarlar[1]) * (this.kenarlar[2])));
    }

}

class Shape{
    constructor(...arg){
        this.points = arg;
    }

    kenarlar = [];
    cevre = () => {
        const p = this.points;
        for (let i = 0; i < p.length; i++){
            if (i < p.length - 1){
                this.kenarlar.push(Math.sqrt(Math.pow((p[i + 1].x - p[i].x), 2) + (Math.pow((p[i + 1].y - p[i].y), 2))));
            } else {
                this.kenarlar.push(Math.sqrt(Math.pow((p[i].x - p[0].x), 2) + (Math.pow((p[i].y - p[0].y), 2))));

            }

        }
        
    }
}

//    const tri = new Triangle (new Point (0, 0), new Point (4,3), new Point (4,0))
//    console.log(tri.cevre())
//    console.log(tri.alan);


    const sekil = new Shape(new Point (0, 0), new Point(4, 3), new Point (4, 3), new Point (5, 3));

    console.log (sekil)



