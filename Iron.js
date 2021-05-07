class Iron{
	constructor(x,y,r)
	{
		var options = {
			'restitution':0.8,
			'friction': 8, 
			'density':30	
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y,this.r, options )
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			rectMode(CENTER)
			translate(rubberpos.x, rubberpos.y);
			strokeWeight(4);
			stroke("black");
			fill("silver");
			ellipse(0,0,this.r,this.r)

			pop()
	}

}